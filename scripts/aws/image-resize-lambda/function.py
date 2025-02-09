import boto3
import os
import io
from PIL import Image

# S3 Client
s3 = boto3.client("s3")

# Configuration
INPUT_BUCKET = os.environ["INPUT_BUCKET"]
OUTPUT_BUCKET = os.environ["OUTPUT_BUCKET"]
BASE_PATH = "work"
SIZES = {
    "lg": 1024,
    "md": 896,
    "sm": 640
}
FORMATS = ["webp", "png"]  # Output formats

def resize_and_upload(image, key):
    """Resize image to multiple sizes and upload them to OUTPUT_BUCKET"""
    # Load image
    with Image.open(image) as img:
        img = img.convert("RGBA")  # Preserve transparency

        for size_key, width in SIZES.items():
            # Resize while maintaining aspect ratio
            img_resized = img.copy()
            img_resized.thumbnail((width, width), Image.Resampling.LANCZOS)

            for fmt in FORMATS:
                # Save to an in-memory file
                output_buffer = io.BytesIO()
                img_format = "WEBP" if fmt == "webp" else "PNG"
                img_resized.save(output_buffer, img_format, quality=90 if fmt == "webp" else 100)
                output_buffer.seek(0)

                # Construct S3 key (e.g., work/sm/image.webp, work/sm/png/image.png)
                subfolder = "png" if fmt == "png" else ""
                new_key = f"{BASE_PATH}/{size_key}/{subfolder}{'/' if subfolder else ''}{os.path.basename(key).rsplit('.', 1)[0]}.{fmt}"

                # Upload to OUTPUT_BUCKET
                s3.upload_fileobj(output_buffer, OUTPUT_BUCKET, new_key, ExtraArgs={"ContentType": f"image/{fmt}"})
                print(f"Uploaded {new_key} to {OUTPUT_BUCKET}")

        # Generate and upload PNG version of the original image
        output_buffer = io.BytesIO()
        img.save(output_buffer, "PNG", quality=100)
        output_buffer.seek(0)
        png_key = f"{BASE_PATH}/png/{os.path.basename(key).rsplit('.', 1)[0]}.png"
        s3.upload_fileobj(output_buffer, OUTPUT_BUCKET, png_key, ExtraArgs={"ContentType": "image/png"})
        print(f"Uploaded original PNG version to {png_key} in {OUTPUT_BUCKET}")

def move_original_image(bucket, key):
    """Move the original image to the work directory in OUTPUT_BUCKET"""
    new_key = f"{BASE_PATH}/{os.path.basename(key)}"
    copy_source = {"Bucket": bucket, "Key": key}

    # Copy to the output bucket
    s3.copy_object(Bucket=OUTPUT_BUCKET, CopySource=copy_source, Key=new_key)
    print(f"Moved original {key} to {new_key} in {OUTPUT_BUCKET}")

def lambda_handler(event, context):
    """Triggered by S3 when an image is uploaded to INPUT_BUCKET"""
    for record in event["Records"]:
        bucket = record["s3"]["bucket"]["name"]
        key = record["s3"]["object"]["key"]

        if bucket != INPUT_BUCKET or not key.lower().startswith(f"{BASE_PATH}/") or not key.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
            print(f"Skipping non-image file or file outside {BASE_PATH}: {key}")
            continue

        # Download image from INPUT_BUCKET
        image_obj = s3.get_object(Bucket=bucket, Key=key)
        image_data = io.BytesIO(image_obj["Body"].read())

        # Process image and upload variations to OUTPUT_BUCKET
        resize_and_upload(image_data, key)

        # Move the original image to the work directory in OUTPUT_BUCKET
        move_original_image(bucket, key)

        return {"statusCode": 200, "body": f"Processed {key} and uploaded to {OUTPUT_BUCKET}"}
