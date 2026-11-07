
// Cloudinary Fetch helper
// Only the public cloud name belongs in frontend code.
const CLOUD_NAME = (
  import.meta.env?.VITE_CLOUDINARY_CLOUD_NAME || ""
).trim();

const DEFAULT_MAX_WIDTH = 1600;

const isLocalHost = (hostname) => {
  if (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "::1" ||
    hostname.endsWith(".local")
  ) {
    return true;
  }

  // Avoid Cloudinary fetches from private IPv4 addresses.
  const parts = hostname.split(".").map(Number);

  if (
    parts.length === 4 &&
    parts.every((part) => Number.isInteger(part) && part >= 0 && part <= 255)
  ) {
    const [a, b] = parts;

    return (
      a === 10 ||
      a === 192 && b === 168 ||
      a === 172 && b >= 16 && b <= 31 ||
      a === 169 && b === 254
    );
  }

  return false;
};

export const cloudinaryImage = (
  src,
  {
    width = DEFAULT_MAX_WIDTH,
    height,
    quality = "auto",
    format = "auto",
    crop = "limit",
  } = {}
) => {
  if (!src || typeof src !== "string") return src;

  if (
    !CLOUD_NAME ||
    src.startsWith("data:") ||
    src.startsWith("blob:")
  ) {
    return src;
  }

  // Preserve SVG and animated GIF files.
  if (/\.(svg|gif)(\?|#|$)/i.test(src)) return src;

  try {
    if (typeof window === "undefined") return src;

    if (isLocalHost(window.location.hostname)) return src;

    const originalUrl = new URL(src, window.location.origin);

    // Only optimize images hosted on this website.
    if (originalUrl.origin !== window.location.origin) return src;

    const transformations = [
      `c_${crop}`,
      width && `w_${Math.round(width)}`,
      height && `h_${Math.round(height)}`,
      `q_${quality}`,
      `f_${format}`,
    ].filter(Boolean);

    return (
      `https://res.cloudinary.com/${CLOUD_NAME}/image/fetch/` +
      `${transformations.join(",")}/` +
      encodeURIComponent(originalUrl.href)
    );
  } catch (error) {
    console.error("Cloudinary image URL error:", error);
    return src;
  }
};
