import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../useTheme";
import { M3eHeading, M3eIcon } from "@m3e/react/all";
import { GITHUB_REPO_URL } from "../constants/links";
import ButtonLink from "./ButtonLink";

const THEME_IMAGES = {
  Green: {
    light: [
      "/v2/getstarted/greenwhite.png",
      "/v2/homescreenlight/greenmed.png",
      "/v2/route/greenlight3.png",
      "/v2/route/greenlight2.png",
    ],
    dark: [
      "/v2/getstarted/green.png",
      "/v2/homescreen/greenmed.png",
      "/v2/planner/greenplan.png",
      "/v2/route/green5.png",
      "/v2/route/green6.png",
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
      "/v2/getstarted/purplewhite.png",
      "/v2/homescreenlight/bluemed.png",
      "/v2/planner/purpleplanlight.png",
      "/v2/route/purplelight2.png",
      "/v2/route/purplelight4.png",
    ],
    dark: [
      "/v2/getstarted/purple.png",
      "/v2/homescreen/purplemed.png",
      "/v2/planner/purpleplan.png",
      "/v2/route/purple2.png",
      "/v2/route/purple5.png",
    ],
  },
};

const HERO_CITIES = [
  { name: "Delhi-NCR", future: false },
  { name: "Mumbai", future: true },
  { name: "Bengaluru", future: true },
  { name: "Chennai", future: true },
  { name: "Hyderabad", future: true },
];

const HeroSection = () => {
  const { colorIndex, presets, darkMode } = useTheme();
  const themeName = presets[colorIndex]?.name || "Green";
  const mode = darkMode ? "dark" : "light";
  const themeSet = THEME_IMAGES[themeName] || THEME_IMAGES.Green;
  const images = themeSet[mode] || themeSet.light;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);
  const cityTimerRef = useRef(null);
  const fadeTimerRef = useRef(null);
  const imageIndex = currentIndex % images.length;
  const city = HERO_CITIES[cityIndex % HERO_CITIES.length];

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setFading(true);
      fadeTimerRef.current = setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % images.length);
        setFading(false);
      }, 400);
    }, 3200);
    return () => {
      clearInterval(timerRef.current);
      clearTimeout(fadeTimerRef.current);
    };
  }, [images.length]);

  useEffect(() => {
    cityTimerRef.current = setInterval(() => {
      setCityIndex((i) => (i + 1) % HERO_CITIES.length);
    }, 2200);

    return () => clearInterval(cityTimerRef.current);
  }, []);

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
        @keyframes citySwap {
          from { opacity: 0; transform: translateY(0.16em); }
          to   { opacity: 1; transform: translateY(0); }
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

        .hero-city-name {
          display: inline-block;
          min-width: 9.8ch;

          color: var(--md-sys-color-on-surface, var(--color-text));
          animation: citySwap 0.32s cubic-bezier(0.22,1,0.36,1) both;
        }

        .hero-city-future-mark {
          font-size: 0.60em;
          vertical-align: super;
          margin-right: 0.08em;
          color: var(--md-sys-color-primary, var(--color-accent));
        }

        .hero-city-note {
          animation: heroIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.35s both;
          margin: 12px 0 0;
          font-size: 12px;
          line-height: 1.5;
          color: var(--md-sys-color-on-surface-variant, var(--color-text-muted));
          opacity: 0.78;
        }

        .hero-buttons {
          animation: heroIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.3s both;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
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
          height: 100%;
          border-radius: 32px;
          margin-right: 10px;

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
      <section id="hero" className="hero">
        <div className="container hero-layout">
          {/* Left: text */}
          <div className="hero-text">
            {/* Badge */}
            <div className="hero-badge">
              <M3eIcon
                name="wifi_off"
                variant="rounded"
                style={{ fontSize: 16 }}
              />
              Offline-first Transit App
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
                Plan{" "}
                <span className="hero-city-name" key={city.name}>
                  {city.name}
                  {city.future && (
                    <span className="hero-city-future-mark">*</span>
                  )}
                </span>
                <br />
                <span
                  style={{
                    color: "var(--md-sys-color-primary, var(--color-accent))",
                  }}
                >
                  routes, offline.
                </span>
              </M3eHeading>
            </div>
            {/* Subtitle */}
            <p className="hero-subtitle">
              DetroGo is a minimal Material 3 transit app for commuters who just
              want route planning, system maps, nearest stations, and saved
              commute tools without the clutter.
            </p>
            {/* Buttons */}
            <div className="hero-buttons">
              <ButtonLink href="#waitlist" variant="filled" size="medium">
                Join Waitlist
              </ButtonLink>
              <ButtonLink
                href={GITHUB_REPO_URL}
                variant="tonal"
                size="medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <M3eIcon
                  name="code"
                  variant="rounded"
                  style={{ fontSize: 18, marginRight: 6 }}
                />
                Contribute on GitHub
              </ButtonLink>
            </div>
            <p className="hero-city-note">
              * Planned city support through community-contributed transit data.
            </p>
          </div>

          {/* Right: phone */}
          <img
            key={`${themeName}-${mode}-${imageIndex}`}
            src={images[imageIndex]}
            alt={`DetroGo Android app screenshot ${imageIndex + 1}`}
            className={`hero-phone-img ${fading ? "fade-out" : "fade-in"}`}
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
