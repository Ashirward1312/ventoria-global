import React, { useState } from "react";

const ImageLoader = ({ src, alt, className, containerClass = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClass} ${isLoaded ? "loaded" : ""}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse z-0" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};

export default ImageLoader;
