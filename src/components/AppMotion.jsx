import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../ThemeContext";
import { M3eHeading } from "@m3e/react/heading";
import { M3eIcon } from "@m3e/react/icon";
import { M3eCard } from "@m3e/react/card";

const THEME_IMAGES = {
  Green: {
    light: [
      "/detroflow/lightgreen/1774197223419_100.PNG",
      "/detroflow/lightgreen/1774197229901_100.PNG",
      "/detroflow/lightgreen/1774197241621_100.PNG",
      "/detroflow/lightgreen/1774197249873_100.PNG",
      "/detroflow/lightgreen/1774197260217_100.PNG",
    ],
    dark: [
      "/detroflow/darkgreen/1774196915219_100.PNG",
      "/detroflow/darkgreen/1774196926851_100.PNG",
      "/detroflow/darkgreen/1774196935427_100.PNG",
      "/detroflow/darkgreen/1774196948731_100.PNG",
      "/detroflow/darkgreen/1774196965849_100.PNG",
      "/detroflow/darkgreen/1774196996624_100.PNG",
    ],
  },
  Red: {
    light: ["/detroflow/lightred/1774198101724_100.PNG"],
    dark: [
      "/detroflow/darkred/1774198266083_100.PNG",
      "/detroflow/darkred/1774198270812_100.PNG",
      "/detroflow/darkred/1774198276606_100.PNG",
      "/detroflow/darkred/1774198280289_100.PNG",
      "/detroflow/darkred/1774198285179_100.PNG",
    ],
  },
};
THEME_IMAGES.Blue = THEME_IMAGES.Green;
THEME_IMAGES.Purple = THEME_IMAGES.Red;

const STEPS = [
  {
    icon: "input",
    title: "Just pick your stations",
    desc: "Choose where you're starting and where you're headed. That's all DetroGo needs.",
  },
  {
    icon: "transform",
    title: "A clean map, instantly",
    desc: "No messy geography — a straight, simple line diagram of your route.",
  },
  {
    icon: "alt_route",
    title: "Interchanges, highlighted",
    desc: "Wherever you switch lines, it's clearly marked. No guesswork.",
  },
  {
    icon: "palette",
    title: "Lines in their real colors",
    desc: "Yellow, Blue, Magenta — every segment in the actual line color.",
  },
];

const SchematicSection = () => {
  const { colorIndex, presets, darkMode } = useTheme();
  const themeName = presets[colorIndex]?.name || "Green";
  const mode = darkMode ? "dark" : "light";
  const themeSet = THEME_IMAGES[themeName] || THEME_IMAGES.Green;
  const images = themeSet[mode] || themeSet.light;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    setCurrentIndex(0);
    setActiveStep(0);
  }, [themeName, darkMode]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % images.length;
        setActiveStep(next % STEPS.length);
        return next;
      });
    }, 2800);
    return () => clearInterval(timerRef.current);
  }, [images.length]);

  return (
    <section id="schematic" style={{ padding: "100px 0" }}>
      <style>{`
        .sm-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .sm-inner { grid-template-columns: 1fr; gap: 40px; }
          .sm-phone { display: flex; justify-content: center; }
        }

        /* Phone */
        .sm-phone { position: relative; }
        .sm-phone-glow {
          position: absolute;
          inset: -48px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            color-mix(in srgb, var(--md-sys-color-primary, var(--color-accent)) 12%, transparent),
            transparent 70%
          );
          pointer-events: none;
        }
        .sm-screen {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
          aspect-ratio: 9/19.5;
          border-radius: 28px;
          overflow: hidden;

        }
        .sm-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .sm-img.active { opacity: 1; }

        /* Dots */
        .sm-dots {
          display: flex;
          gap: 6px;
          justify-content: center;
          margin-top: 16px;
          position: relative;
          z-index: 1;
        }
        .sm-dot {
          height: 4px;
          border-radius: 99px;
          background: var(--md-sys-color-outline-variant, #ccc);
          transition: width 0.3s ease, background 0.3s ease;
          width: 14px;
        }
        .sm-dot.active {
          width: 28px;
          background: var(--md-sys-color-primary, var(--color-accent));
        }

        /* Steps */
        .sm-steps { display: flex; flex-direction: column; gap: 12px; }

        .sm-step {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 14px 16px;
          border-radius: 20px;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease;
          border: 1.5px solid transparent;
        }
        .sm-step:hover {
          background: color-mix(in srgb, var(--md-sys-color-primary, var(--color-accent)) 5%, transparent);
        }
        .sm-step.active {
          background: color-mix(in srgb, var(--md-sys-color-primary, var(--color-accent)) 10%, transparent);
          border-color: color-mix(in srgb, var(--md-sys-color-primary, var(--color-accent)) 25%, transparent);
          transform: translateX(4px);
        }
        .sm-step-num {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 13px;
          font-weight: 700;
          background: var(--md-sys-color-surface-container-high, rgba(128,128,128,0.12));
          color: var(--md-sys-color-on-surface-variant, #666);
          transition: background 0.25s ease, color 0.25s ease;
        }
        .sm-step.active .sm-step-num {
          background: var(--md-sys-color-primary, var(--color-accent));
          color: var(--md-sys-color-on-primary, #fff);
        }
        .sm-step-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--md-sys-color-on-surface, var(--color-text));
          margin-bottom: 3px;
          transition: color 0.25s ease;
        }
        .sm-step.active .sm-step-title {
          color: var(--md-sys-color-primary, var(--color-accent));
        }
        .sm-step-desc {
          font-size: 13px;
          line-height: 1.55;
          color: var(--md-sys-color-on-surface-variant, var(--color-text-muted));
        }
      `}</style>

      <div className="sm-inner">
        {/* Left: phone */}
        <div>
          <div />
          <div className="sm-screen">
            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Route map step ${i + 1}`}
                className={`sm-img ${i === currentIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Right: text + steps */}
        <div className="reveal-right">
          {/* Header */}
          <div style={{ marginBottom: 32 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--md-sys-color-primary, var(--color-accent))",
                marginBottom: 10,
              }}
            >
              Interactive Route Map
            </p>
            <M3eHeading variant="display" size="small" emphasized level="2">
              Your route, made simple.
            </M3eHeading>
            <p
              style={{
                marginTop: 10,
                fontSize: 15,
                lineHeight: 1.7,
                color:
                  "var(--md-sys-color-on-surface-variant, var(--color-text-muted))",
                maxWidth: 400,
              }}
            >
              DetroGo generates a clean line diagram of your journey no map
              clutter, just your route simplified into a clean line map.
            </p>
          </div>

          {/* Steps */}
          <div className="sm-steps">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className={`sm-step ${i === activeStep ? "active" : ""}`}
                onClick={() => {
                  setActiveStep(i);
                  setCurrentIndex(i % images.length);
                  clearInterval(timerRef.current);
                }}
              >
                <div className="sm-step-num">{i + 1}</div>
                <div>
                  <div className="sm-step-title">{step.title}</div>
                  <div className="sm-step-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchematicSection;
