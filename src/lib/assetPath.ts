// Prefix public-folder asset paths with basePath for GitHub Pages static export.
// next/image with unoptimized:true does not auto-apply basePath to /public assets.
export const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const assetPath = (src: string) => `${bp}${src}`;
