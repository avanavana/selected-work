/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare function plausible(
  eventName: string,
  options?: {
    props?: Record<string, null | number | string>
  }
): void
