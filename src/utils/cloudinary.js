// Cloudinary Fetch helper.
// Only the public cloud name is used here. NEVER put the API secret in frontend code.
// Set VITE_CLOUDINARY_CLOUD_NAME in .env (local) and in Netlify's environment variables.
const CLOUD_NAME = (import.meta.env?.VITE_CLOUDINARY_CLOUD_NAME || "").trim();

// Cloudinary can only fetch images from a publicly reachable site,
// so never try to optimise on localhost / private-network hosts.
const isLocalHost = (hostname) =>
  hostname === "localhost" ||
  hostname === "127.0.0.1" ||
  hostname === "[::1]" ||
  hostname.endsWith(".local") ||
  /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(hostname);

export const cloudinaryImage = (
  src,
  { width, height, quality = "auto", format = "auto", crop = "limit" } = {}
) => {
  if (!src || typeof src !== "string") return src;

  // Not configured, or embedded / non-fetchable sources: keep the original src.
  if (!CLOUD_NAME || src.startsWith("data:") || src.startsWith("blob:")) {
    return src;
  }

  // SVGs are already tiny/vector; animated GIFs would lose animation. Leave alone.
  if (/\.(svg|gif)(\?|#|$)/i.test(src)) return src;

  try {
    if (typeof window === "undefined") return src;
    if (isLocalHost(window.location.hostname)) return src;

    const originalUrl = new URL(src, window.location.origin);

    // Only optimise images hosted on this website.
    if (originalUrl.origin !== window.location.origin) return src;

    const transformations = [
      width && `w_${width}`,
      height && `h_${height}`,
      crop && `c_${crop}`,
      `q_${quality}`,
      `f_${format}`,
    ].filter(Boolean);

    return `https://res.cloudinary.com/${CLOUD_NAME}/image/fetch/${transformations.join(",")}/${encodeURIComponent(originalUrl.href)}`;
  } catch (error) {
    console.error("Cloudinary image URL error:", error);
    return src;
  }
};
