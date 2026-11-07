
import { useState } from "react";
import { cloudinaryImage } from "../utils/cloudinary";

const OptimizedImage = ({
  src,
  alt = "",
  priority = false,
  maxWidth = 1600,
  loading,
  fetchPriority,
  sizes = "100vw",
  onLoad,
  onError,
  ...imgProps
}) => {
  const [failed, setFailed] = useState(false);

  const optimizedSrc = cloudinaryImage(src, {
    width: maxWidth,
    quality: "auto",
    format: "auto",
    crop: "limit",
  });

  // Generate responsive image versions.
  const widths = [
    ...[320, 480, 640, 960, 1280, 1600].filter(
      (width) => width < maxWidth
    ),
    maxWidth,
  ];

  const srcSet = !failed && optimizedSrc !== src
    ? widths
        .map((width) => {
          const url = cloudinaryImage(src, {
            width,
            quality: "auto",
            format: "auto",
            crop: "limit",
          });

          return `${url} ${width}w`;
        })
        .join(", ")
    : undefined;

  return (
    <img
      {...imgProps}
      src={failed ? src : optimizedSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={loading ?? (priority ? "eager" : "lazy")}
      fetchPriority={fetchPriority ?? (priority ? "high" : "auto")}
      decoding="async"
      onLoad={onLoad}
      onError={(event) => {
        if (!failed && optimizedSrc !== src) {
          setFailed(true);
        } else {
          onError?.(event);
        }
      }}
    />
  );
};

export default OptimizedImage;
