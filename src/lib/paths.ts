/** Prefixes a /public file path with the site's base path (needed on GitHub Pages). */
export function withBase(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
