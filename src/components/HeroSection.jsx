import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../ThemeContext";
import { M3eButton } from "@m3e/react/button";
import { M3eHeading, M3eIcon } from "@m3e/react/all";

const THEME_IMAGES = {
  Green: {
    light: [
      "/detross/lightmode/green/imghome.PNG",
      "/detross/lightmode/green/imgroute.PNG",
      "/detross/lightmode/green/imgroutekirti.PNG",
    ],
    dark: [
      "/detross/darkmode/green/imghome.PNG",
      "/detross/darkmode/green/imgroutekirti.PNG",
      "/detross/darkmode/green/imgroutepink.PNG",
      "/detross/darkmode/green/imgrouteyellow.PNG",
    ],
  },
  Blue: {
    light: [
      "/detross/lightmode/green/imghome.PNG",
      "/detross/lightmode/green/imgroute.PNG",
      "/detross/lightmode/green/imgroutekirti.PNG",
    ],
    dark: [
      "/detross/darkmode/green/imghome.PNG",
      "/detross/darkmode/green/imgroutekirti.PNG",
      "/detross/darkmode/green/imgroutepink.PNG",
      "/detross/darkmode/green/imgrouteyellow.PNG",
    ],
  },
  Purple: {
    light: [
      "/detross/lightmode/purple/imghome.PNG",
      "/detross/lightmode/purple/imgrouteblue.PNG",
    ],
    dark: [
      "/detross/darkmode/purple/imghome.PNG",
      "/detross/darkmode/purple/imgroutered.PNG",
    ],
  },
};

const HeroSection = () => {
  const { colorIndex, presets, darkMode } = useTheme();
  const themeName = presets[colorIndex]?.name || "Green";
  const mode = darkMode ? "dark" : "light";
  const themeSet = THEME_IMAGES[themeName] || THEME_IMAGES.Green;
  const images = themeSet[mode] || themeSet.light;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    setCurrentIndex(0);
  }, [themeName, darkMode]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % images.length);
        setFading(false);
      }, 400);
    }, 3200);
    return () => clearInterval(timerRef.current);
  }, [images.length, currentIndex]);

  return (
    <>
      <style>{`
        @keyframes phoneFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes badgeIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px 6px 10px;
          border-radius: 99px;
          background: var(--md-sys-color-secondary-container, var(--color-accent-surface));
          color: var(--md-sys-color-on-secondary-container, var(--color-accent));
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 20px;
          animation: badgeIn 0.5s cubic-bezier(0.22,1,0.36,1) both;
        }

        .hero-title-wrap {
          animation: heroIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both;
          margin-bottom: 16px;
        }

        .hero-buttons {
          animation: heroIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.3s both;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hero-phone-wrap {
          animation: heroIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s both;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .hero-phone-glow {
          position: absolute;
          inset: -60px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            color-mix(in srgb, var(--md-sys-color-primary, var(--color-accent)) 14%, transparent),
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
        }
        .hero-phone-img {
          position: relative;
          z-index: 1;
          width: 280px;
          border-radius: 32px;


          transition: opacity 0.4s ease;
        }


        /* dot indicators */
        .hero-dots {
          display: flex;
          gap: 6px;
          margin-top: 20px;
          position: relative;
          z-index: 1;
        }
        .hero-dot {
          height: 4px;
          border-radius: 99px;
          background: var(--md-sys-color-outline-variant, #ccc);
          transition: width 0.3s ease, background 0.3s ease;
          width: 14px;
        }
        .hero-dot.active {
          width: 28px;
          background: var(--md-sys-color-primary, var(--color-accent));
        }
      `}</style>

      {/* Banner */}
      {/* <div
        className="banner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          padding: "10px 24px",
          background:
            "var(--md-sys-color-secondary-container, var(--color-accent-surface))",
          color:
            "var(--md-sys-color-on-secondary-container, var(--color-accent))",
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        <M3eIcon name="wand_shine" style={{ fontSize: 18 }} />
        <span>
          This site is fully responsive try switching colors and dark mode above
        </span>
      </div>*/}

      {/* Hero */}
      <section className="hero">
        <div className="container hero-layout">
          {/* Left: text */}
          <div className="hero-text">
            {/* Badge */}
            <div className="hero-badge">
              <M3eIcon
                name="calendar_today"
                variant="rounded"
                style={{ fontSize: 16 }}
              />
              Coming Soon To Delhi-NCR
            </div>

            {/* Title */}
            <div className="hero-title-wrap">
              <M3eHeading
                variant="display"
                size="large"
                emphasized
                level="1"
                style={{ lineHeight: 1.1 }}
              >
                Delhi Metro
                <br />
                <span
                  style={{
                    color: "var(--md-sys-color-primary, var(--color-accent))",
                  }}
                >
                  done right.
                </span>
              </M3eHeading>
            </div>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Now getting around Delhi-NCR just became effortless, built on
              Material 3 with clean interactive Route Maps.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">
              <M3eButton
                variant="filled"
                size="medium"
                onClick={() => {
                  document
                    .getElementById("waitlist")
                    ?.scrollIntoView({ behavior: "smooth" });
                  history.replaceState(null, "", window.location.pathname);
                }}
              >
                Join Waitlist
              </M3eButton>
              <M3eButton
                variant="tonal"
                size="medium"
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Features
              </M3eButton>
            </div>
          </div>

          {/* Right: phone */}
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`DetroGo Screenshot ${currentIndex + 1}`}
            className={`hero-phone-img ${fading ? "fade-out" : "fade-in"}`}
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
