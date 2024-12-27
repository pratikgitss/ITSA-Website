import React from "react";

export function ImageWithOverlay({
  src,
  alt,
  className = "",
  overlayColor = "from-indigo-500/20 to-purple-500/20",
}) {
  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${overlayColor} z-10`} />
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
