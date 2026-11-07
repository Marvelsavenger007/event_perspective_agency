
import { useState } from "react";
import { cloudinaryImage } from "../utils/cloudinary";

const OptimizedImage = ({
  src,
  alt = "",
  priority = false,
  maxWidth,
  loading,
  fetchPriority,
  onLoad,
  onError,
  ...imgProps
}) => {
  const [failedSrc, setFailedSrc] = useState(null);

  const optimizedSrc = cloudinaryImage(src, {
    width: maxWidth,
    quality: "auto",
    format: "auto",
    crop: "limit",
  });

  const usingFallback = failedSrc === optimizedSrc;
  const finalSrc = usingFallback ? src : optimizedSrc;

  return (
    <img
      {...imgProps}
      src={finalSrc}
      alt={alt}
      loading={loading ?? (priority ? "eager" : "lazy")}
      fetchPriority={fetchPriority ?? (priority ? "high" : "auto")}
      decoding="async"
      onLoad={(event) => onLoad?.(event)}
      onError={(event) => {
        if (!usingFallback && optimizedSrc !== src) {
          setFailedSrc(optimizedSrc);
        } else {
          onError?.(event);
        }
      }}
    />
  );
};

export default OptimizedImage;
