import React, { useEffect, useRef } from "react";
import { useTheme } from "../ThemeContext";
import WavySeparator from "./WavyDivder";
import { M3eIconButton } from "@m3e/react/icon-button";

// Animated wavy lines — Google Expressive style
const WavyLines = () => {
  const styles = `
    .wavy-container {
      position: relative;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      margin-bottom: -2px;
    }
    .wavy-svg {
      display: block;
      width: 100%;
    }
    @keyframes waveDrift1 {
      0%   { d: path("M0,32 C160,60 320,0 480,32 C640,64 800,8 960,32 C1120,56 1280,4 1440,32 L1440,80 L0,80 Z"); }
      50%  { d: path("M0,48 C160,16 320,64 480,40 C640,16 800,56 960,36 C1120,16 1280,52 1440,44 L1440,80 L0,80 Z"); }
      100% { d: path("M0,32 C160,60 320,0 480,32 C640,64 800,8 960,32 C1120,56 1280,4 1440,32 L1440,80 L0,80 Z"); }
    }
    @keyframes waveDrift2 {
      0%   { d: path("M0,48 C200,24 400,64 600,44 C800,24 1000,60 1200,40 C1320,28 1400,48 1440,44 L1440,80 L0,80 Z"); }
      50%  { d: path("M0,36 C200,56 400,20 600,48 C800,64 1000,28 1200,52 C1320,60 1400,36 1440,52 L1440,80 L0,80 Z"); }
      100% { d: path("M0,48 C200,24 400,64 600,44 C800,24 1000,60 1200,40 C1320,28 1400,48 1440,44 L1440,80 L0,80 Z"); }
    }
    @keyframes waveDrift3 {
      0%   { d: path("M0,60 C240,40 480,72 720,56 C960,40 1200,68 1440,56 L1440,80 L0,80 Z"); }
      50%  { d: path("M0,52 C240,68 480,44 720,64 C960,76 1200,52 1440,64 L1440,80 L0,80 Z"); }
      100% { d: path("M0,60 C240,40 480,72 720,56 C960,40 1200,68 1440,56 L1440,80 L0,80 Z"); }
    }
    /* Fallback for browsers that don't support d: path() in CSS animations */
    .wave-path-1 { animation: waveDrift1 7s ease-in-out infinite; }
    .wave-path-2 { animation: waveDrift2 9s ease-in-out infinite; }
    .wave-path-3 { animation: waveDrift3 11s ease-in-out infinite; }
  `;

  return (
    <>
      <style>{styles}</style>
    </>
  );
};

const accentFilters = {
  "#1E5128": {
    light:
      "invert(18%) sepia(60%) saturate(800%) hue-rotate(95deg) brightness(60%)",
    dark: "invert(55%) sepia(60%) saturate(600%) hue-rotate(95deg) brightness(90%)",
  },
  "#1565C0": {
    light:
      "invert(18%) sepia(90%) saturate(1000%) hue-rotate(205deg) brightness(55%)",
    dark: "invert(55%) sepia(90%) saturate(800%) hue-rotate(205deg) brightness(90%)",
  },
  "#6A1B9A": {
    light:
      "invert(12%) sepia(90%) saturate(1200%) hue-rotate(272deg) brightness(55%)",
    dark: "invert(50%) sepia(90%) saturate(1000%) hue-rotate(272deg) brightness(90%)",
  },
};

const Footer = () => {
  const { darkMode, colorIndex, presets } = useTheme();

  const accent = presets[colorIndex]?.accent || "#1E5128";
  const accentFilter =
    accentFilters[accent]?.[darkMode ? "dark" : "light"] || "none";

  return (
    <>
      <WavySeparator />
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a
                href="/"
                className="navbar-brand"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0px",
                  marginBottom: "-25px",
                  marginLeft: "-4px",
                  textDecoration: "none",
                }}
              >
                <div className="footer-brand">
                  <img
                    src="/detroname.png"
                    alt="DetroGo"
                    style={{
                      width: 100,
                      height: 100,
                      filter: accentFilter,
                      transition: "filter 0.3s ease",
                    }}
                  />
                </div>
                {/* <span
                  style={{ fontWeight: "bold", fontSize: "1.2rem", color: "inherit" }}
                >
                  DetroGo
                </span>*/}
              </a>
              <p className="footer-description">
                A clean metro navigator for Delhi-NCR. Built with Material 3.
              </p>
            </div>
            <div className="footer-column">
              <h4>App</h4>
              <a href="#waitlist">Waitlist</a>
              <a href="#features">Features</a>
              <a href="#showcase">Screenshots</a>
              <a href="#schematic">Flow</a>
            </div>
            <div className="footer-column">
              <h4>More</h4>
              <a
                href="https://threads.com/@anshwadhwa8"
                target="_blank"
                rel="noreferrer"
              >
                Threads
              </a>
              <a
                href="https://x.com/anshwadhwa8"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://github.com/simplystudios"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a href="#about">About</a>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} DetroGo. Built with lots of love
            in Delhi.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
