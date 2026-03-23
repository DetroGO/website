import React, { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";
import ColorPicker from "./ColorPicker";
import { M3eIconButton } from "@m3e/react/icon-button";
import { Sun, Moon, Menu, X } from "lucide-react";
import { M3eTooltip } from "@m3e/react/tooltip";

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

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#showcase", label: "Showcase" },
  { href: "#schematic", label: "Flow" },
  { href: "#waitlist", label: "Sign Up" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, setDarkMode, colorIndex, presets } = useTheme();

  const accent = presets[colorIndex]?.accent || "#1E5128";
  const accentFilter =
    accentFilters[accent]?.[darkMode ? "dark" : "light"] || "none";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    handleResize(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100%" /* Let it fill the 64px header natively */,
        }}
      >
        {/* Brand */}
        <a
          href="/"
          className="navbar-brand"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <div className="navbar-logo-wrap">
            <M3eIconButton variant="none">
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
            </M3eIconButton>
          </div>
          {/* <span
            style={{ fontWeight: "bold", fontSize: "1.2rem", color: "inherit" }}
          >
            DetroGo
          </span>*/}
        </a>

        {/* Right Side: Nav links + controls */}
        <nav style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Desktop Links (Hidden on Mobile) */}
          {!isMobile && (
            <ul
              style={{
                display: "flex",
                gap: "16px",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight: 500,
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* Theme Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              borderLeft: isMobile ? "none" : "1px solid rgba(128,128,128,0.2)",
              paddingLeft: isMobile ? "0" : "16px",
            }}
          >
            <M3eIconButton
              id="theme-toggle"
              variant="outlined"
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </M3eIconButton>
            <M3eTooltip htmlFor="theme-toggle">Change Theme</M3eTooltip>

            <ColorPicker />

            {/* Hamburger Button (Mobile Only) */}
            {isMobile && (
              <M3eIconButton
                variant="tonal"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </M3eIconButton>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            width: "100%",
            backgroundColor: "var(--color-surface)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            boxShadow: "var(--shadow-md)",
            borderBottom: "1px solid var(--color-border)",
            zIndex: 999,
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: "var(--color-text)",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
