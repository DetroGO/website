import React, { useEffect } from "react";
import WaitlistSection from "./components/Waitlist";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SchematicSection from "./components/AppMotion";
import FeaturesSection from "./components/FeaturesSection";
import ShowcaseSection from "./components/ShowcaseSection";
import AboutSection from "./components/AboutSection";
import { M3eTheme } from "@m3e/react/theme";
import Footer from "./components/Footer";
import WavySeparator from "./components/WavyDivder";
import { M3eButton } from "@m3e/react/button";

// Inject global animation styles once

const globalStyles = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.92); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes slideLeft {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideRight {
    from { opacity: 0; transform: translateX(-40px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1),
                transform 0.65s cubic-bezier(0.22,1,0.36,1);
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-left {
    opacity: 0;
    transform: translateX(-32px);
    transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1),
                transform 0.65s cubic-bezier(0.22,1,0.36,1);
  }
  .reveal-left.visible {
    opacity: 1;
    transform: translateX(0);
  }
  .reveal-right {
    opacity: 0;
    transform: translateX(32px);
    transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1),
                transform 0.65s cubic-bezier(0.22,1,0.36,1);
  }
  .reveal-right.visible {
    opacity: 1;
    transform: translateX(0);
  }
  .reveal-scale {
    opacity: 0;
    transform: scale(0.94);
    transition: opacity 0.6s cubic-bezier(0.22,1,0.36,1),
                transform 0.6s cubic-bezier(0.22,1,0.36,1);
  }
  .reveal-scale.visible {
    opacity: 1;
    transform: scale(1);
  }

  /* stagger children */
  .stagger > * { transition-delay: calc(var(--i, 0) * 80ms) !important; }
`;

function AppInner() {
  const { darkMode, presets, colorIndex } = useTheme();
  const color = presets[colorIndex]?.accent || "#1E5128";
  const scheme = darkMode ? "dark" : "light";

  useEffect(() => {
    // Inject global styles
    if (!document.getElementById("detro-global-anim")) {
      const style = document.createElement("style");
      style.id = "detro-global-anim";
      style.textContent = globalStyles;
      document.head.appendChild(style);
    }

    // Intersection observer for reveal classes
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const targets = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale",
    );
    targets.forEach((el, i) => {
      // auto-stagger siblings inside .stagger parents
      el.style.setProperty("--i", i);
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <M3eTheme color={color} scheme={scheme}>
      <div>
        <Navbar />
        <main>
          <br />
          <br />
          <HeroSection />
          <FeaturesSection />
          <SchematicSection />
          {/* CTA Section */}
          {/* <section
            id="download"
            style={{ background: "--md-sys-color-primary-container" }}
            className="cta-section"
          >
            <div
              className="container"
              style={{
                textAlign: "center",
                background: "--md-sys-color-primary-container",
              }}
            >
              <h2 className="reveal">Start navigating with DetroGo.</h2>
              <p className="reveal" style={{ transitionDelay: "80ms" }}>
                The smartest way to travel across Delhi-NCR Metro. Download now
                and experience the difference.
              </p>
              <M3eButton variant="filled" size="medium">
                Join The Waiting List →
              </M3eButton>
            </div>
          </section>*/}
          <ShowcaseSection />
        </main>

        <WaitlistSection />

        <Footer />
      </div>
    </M3eTheme>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}

export default App;
