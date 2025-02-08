# Avana Vana – Selected Work

[//]: Release: v1.0.0 (2025-02-08)
*v1.0.0 (2025-02-08)*

This repository is my professional portfolio of selected work, hosted at [www.avanavana.com](https://www.avanavana.com).  It's a complete rebuild of a previous version of this site, designed to showcase my technical skills with modern front-end web technologies.  At the moment it is a client-side only single page app hosted on [Netlify](https://www.netlify.com). and pointed to a subdomain on my personal website with URL rewrites.

I have plans to expand this project and migrate it to a Next.js SSR-based site that includes additional features such as a blog, case studies, and other content.  The blog will be powered by markdown, [MDX](https://www.mdxjs.com), [Shiki](https://shiki.matsu.io), and [Twoslash](https://twoslash.netlify.app), with multi-part posts on the latest in modern web development, including interactive demos and code snippets on a variety of topics such as animation, accessibility, front-end, back-end, and systems design.

There remains to be some work done yet on optimizing certain aspects of this project, and refactoring some of the more complex components that became somewhat spaghettified during development, but I'll tackle those things iteratively—for now, it's more important to me to get this project launched and out the door in its current state.

## Technologies

While this project may initially seem rather simple on its surface, it is actually deceptively complex, and I could only accomplish it with the help of many fantastic open source tools, frameworks, and libraries:

- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwindcss](https://tailwindcss.com)
- [Motion (formerly Framer Motion)](https://www.motion.dev)
- [Radix UI](https://www.radix-ui.com)
- [shadcn-ui](https://shadcn.com)
- [Embla Carousel](https://www.embla-carousel.com)
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- [React Three Drei](https://github.com/pmndrs/drei)
- [React Hook Form](https://react-hook-form.com)
- [zod](https://www.zod.dev)
- [cmdk](https://cmdk.paco.me)
- [AWS S3](https://aws.amazon.com/s3)
- [AWS CloudFront](https://aws.amazon.com/cloudfront)
- [AWS Lambda](https://aws.amazon.com/lambda)
- [Pipedream](https://pipedream.com)
- [Netlify](https://www.netlify.com)
- [Vite](https://vitejs.dev)
- [pnpm](https://pnpm.io)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Million Lint](https://million.dev)
- [Plausible](https://plausible.io)
- [Vitest](https://vitest.dev)
- [Testing Library](https://testing-library.com)

## Features

- **Intro Animation**
  - Ascii animation powered by [React Three Fiber](https://github.com/pmndrs/react-three-fiber) and [Drei](https://github.com/pmndrs/drei)
  - SVG animation powered by [Motion (formerly Framer Motion)](https://www.motion.dev)
  - Skipped if user has `prefers-reduced-motion` enabled

- **Interactive Gallery**
  - Based on [Embla Carousel](https://www.embla-carousel.com)
  - Autoplay (and controls, with local storage-based persistence)
  - Manual next/prev navigation
  - Keyboard navigation
  - Touch-based gesture navigation
  - Native full-screen support
  - Filter by project category (uses [cmdk](https://cmdk.paco.me) and a custom combobox implementation of the `<Command>` component by [Radix UI](https://www.radix-ui.com) and [shadcn-ui](https://shadcn.com))
  - a11y, `prefers-reduced-motion` support
  - Gallery images partially pre- and partially lazy-loaded, for faster FCP
  - Responsive images rendered with `<picture>`, `srcset`, and `sizes`
  - Touch-friendly tooltips based on [Radix UI](https://www.radix-ui.com) and [shadcn-ui](https://shadcn.com)
  - Gallery images hosted on [AWS S3](https://aws.amazon.com/s3) and cached and served via [AWS CloudFront](https://aws.amazon.com/cloudfront)
  - Gallery images automatically resized and processed with a python-based [AWS Lambda](https://aws.amazon.com/lambda) function
  - Fully responsive

- **Project Details**
  - Based on the `<Dialog>` component by [shadcn-ui](https://shadcn.com) and [Radix UI](https://www.radix-ui.com)
  - Completely integrated with slideshow controls
  - Currently just sourced from a JSON file (K.I.S.S.)
  - Filter by project category
  - Manual next/prev navigation
  - Keyboard navigation
  - Adaptive styling based on content length and viewport size
  - Custom [Radix UI](https://www.radix-ui.com) `<ScrollArea>` component with CSS gradient mask on overflow and custom scrollbars
  - Entrance animation powered by [Motion (formerly Framer Motion)](https://www.motion.dev)

- **Contact Form**
  - Typesafety courtesy of [zod](https://www.zod.dev)
  - Validation, errors, form submission, and form state management powered by [React Hook Form](https://react-hook-form.com)
  - Form components based on [Radix UI](https://www.radix-ui.com) and [shadcn-ui](https://shadcn.com)
  - Entrance animation, form errors, and button state transitions powered by [Motion (formerly Framer Motion)](https://www.motion.dev)
  - Serverless form handling powered by [Pipedream](https://pipedream.com)

- **Fully responsive**
  - Responsive layout based on [Tailwind CSS](https://tailwindcss.com)
  - Responsive typography
  - Responsive image sources and sizes
  - Touchscreen detection and adaptive layout and styling

- **Accessibility**
  - Keyboard navigation
  - WAI-ARIA compliant
  - Sitewide `prefers-reduced-motion` support

- **Adaptive Theming**
  - Light mode
  - Dark mode
  - System mode
  - Manual theme switching
  - Theme persistence via local storage
  - Theming powered by [Tailwind CSS](https://tailwindcss.com)

I built this project to be a clear demonstration of my expertise and skills in modern front-end web development, particularly with React, TypeScript, and Tailwind CSS, which is my bread and butter these days.  It incorporates a lot of advanced features and optimizations, and though it is not the final form of this website, I'm pretty happy with how it turned out.

This project is licensed under the MIT License.

All images of work in this project are copyrighted material of Avana Vana and licensed under the [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0) license. ![CC](https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1)![BY](https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1)![NC](https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1)![ND](https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1)
