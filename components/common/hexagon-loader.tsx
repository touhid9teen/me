"use client";

import { useEffect, useState } from "react";

export default function HexagonLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after animation completes (3.2s)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#F0E7DB] dark:bg-slate-900 transition-colors">
      <div className="loader-container">
        <div className="hexagon-wrapper">
          {/* SVG Hexagon */}
          <svg className="hexagon-svg" viewBox="0 0 110 110" fill="none">
            <path
              className="hexagon-path"
              d="M 55,8 L 96,32 L 96,78 L 55,102 L 14,78 L 14,32 Z"
            />
          </svg>

          {/* T Letter */}
          <div className="t-letter">
            <div className="t-horizontal"></div>
            <div className="t-vertical"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .loader-container {
          text-align: center;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: hideLoader 0.1s ease-out 3.2s forwards;
          pointer-events: none;
        }

        .hexagon-wrapper {
          width: 110px;
          height: 110px;
          position: relative;
          margin: 0 auto;
        }

        .hexagon-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 110px;
          height: 110px;
          animation: drawHexagon 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards,
            fadeOutHexagon 0.5s cubic-bezier(0.4, 0, 0.6, 1) 2.7s forwards;
        }

        .hexagon-path {
          fill: none;
          stroke: rgb(20, 184, 166);
          stroke-width: 6;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 330;
          stroke-dashoffset: 330;
          animation: drawHexagon 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          fill: transparent;
        }

        .t-letter {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          animation: fadeInT 0.4s cubic-bezier(0.4, 0, 0.2, 1) 1.2s forwards,
            fadeOutT 0.5s cubic-bezier(0.4, 0, 0.6, 1) 2.2s forwards;
        }

        .t-horizontal {
          width: 36px;
          height: 9px;
          background: rgb(20, 184, 166);
          margin: 0 auto;
          border-radius: 2px;
        }

        .t-vertical {
          width: 9px;
          height: 34px;
          background: rgb(20, 184, 166);
          margin: 0 auto;
          border-radius: 2px;
        }
        @keyframes drawHexagon {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeInT {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.6);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes fadeOutT {
          from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.7);
          }
        }

        @keyframes fadeOutHexagon {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes hideLoader {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
      `}</style>
    </div>
  );
}
