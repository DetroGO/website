import React from "react";

const WavySeparator = () => {
  return (
    <div style={{ width: "100%", height: "12px", opacity: 0.5 }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="wavy-pattern"
            x="0"
            y="0"
            width="24"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,6 Q6,0 12,6 T24,6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavy-pattern)" />
      </svg>
    </div>
  );
};

export default WavySeparator;
