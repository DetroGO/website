import React from "react";
import { useTheme } from "../useTheme";
import { M3eCard } from "@m3e/react/card";
import { M3eHeading } from "@m3e/react/heading";
import { M3eIcon } from "@m3e/react/icon";

const THEME_GALLERY = {
  Green: {
    light: [
      {
        src: "/v2/homescreenlight/greenmed.png",
        alt: "DetroGo Route Green Light",
      },
      {
        src: "/v2/planner/greenlight.png",
        alt: "DetroGo Route Green Kirti",
      },
      {
        src: "/v2/planner/greenplanlight.png",
        alt: "DetroGo Home Green Light",
      },
      {
        src: "/v2/route/greenlight4.png",
        alt: "DetroGo Route Netaji",
      },
    ],
    dark: [
      {
        src: "/v2/homescreen/greenmed.png",
        alt: "DetroGo Route Kirti Dark",
      },
      {
        src: "/v2/planner/green.png",
        alt: "DetroGo Route Pink Dark",
      },
      {
        src: "/v2/planner/greenplan.png",
        alt: "DetroGo Home Green Dark",
      },
      {
        src: "/v2/route/green6.png",
        alt: "DetroGo Route Yellow Dark",
      },
    ],
  },
  Blue: {
    light: [
      {
        src: "/v2/homescreenlight/greenmed.png",
        alt: "DetroGo Home Light",
      },
      {
        src: "/detross/lightmode/green/imgroute.PNG",
        alt: "DetroGo Route Light",
      },
      {
        src: "/detross/lightmode/green/imgroutekirti.PNG",
        alt: "DetroGo Route Kirti",
      },
    ],
    dark: [
      { src: "/detross/darkmode/green/imghome.PNG", alt: "DetroGo Home Dark" },
      {
        src: "/detross/darkmode/green/imgroutekirti.PNG",
        alt: "DetroGo Route Kirti Dark",
      },
      {
        src: "/detross/darkmode/green/imgroutepink.PNG",
        alt: "DetroGo Route Pink Dark",
      },
      {
        src: "/detross/darkmode/green/imgrouteyellow.PNG",
        alt: "DetroGo Route Yellow Dark",
      },
    ],
  },
  Purple: {
    light: [
      {
        src: "/v2/homescreenlight/bluemed.png",
        alt: "DetroGo Home Purple Dark",
      },
      {
        src: "/v2/planner/purplelight.png",
        alt: "DetroGo Route Purple Red",
      },
      {
        src: "/v2/planner/purpleplanlight.png",
        alt: "DetroGo Route Purple Blue",
      },
      {
        src: "/v2/route/purplelight2.png",
        alt: "DetroGo Route Purple Yellow",
      },
    ],
    dark: [
      {
        src: "/v2/homescreen/purplemed.png",
        alt: "DetroGo Home Purple Dark",
      },
      {
        src: "/v2/planner/purple.png",
        alt: "DetroGo Route Purple Red",
      },
      {
        src: "/v2/planner/purpleplan.png",
        alt: "DetroGo Route Purple Blue",
      },
      {
        src: "/v2/route/purple5.png",
        alt: "DetroGo Route Purple Yellow",
      },
    ],
  },
};

const stats = [
  {
    icon: "train",
    value: "Delhi-NCR",
    label: "Supported region",
    desc: "Built around Delhi-NCR Metro with operational lines, route finding, and the system map.",
  },
  {
    icon: "offline_bolt",
    value: "Fully offline",
    label: "Routing and GPS",
    desc: "Plan routes and use location-aware commute tools without depending on live connectivity.",
  },
  {
    icon: "code",
    value: "React Native",
    label: "Open source app",
    desc: "Material 3, dynamic colors, and GPL-licensed code built for a native Android experience.",
  },
];

const ShowcaseSection = () => {
  const { colorIndex, presets, darkMode } = useTheme();
  const themeName = presets[colorIndex]?.name || "Green";
  const mode = darkMode ? "dark" : "light";
  const themeSet = THEME_GALLERY[themeName] || THEME_GALLERY.Green;
  const gallery = themeSet[mode] || themeSet.light;
  const galleryKey = `${themeName}-${mode}`;

  return (
    <section
      id="showcase"
      className="section"
      style={{
        backgroundColor: "var(--md-sys-color-surface, var(--color-surface))",
      }}
    >
      <style>{`
        .showcase-gallery-wrap { transition: opacity 0.2s ease; }
        .showcase-gallery-wrap.hidden  { opacity: 0; }
        .showcase-gallery-wrap.visible { opacity: 1; }
        @keyframes galleryFadeUp {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .sc-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          margin-top: 48px;
        }
        .sc-stat-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--md-sys-color-secondary-container, var(--color-accent-surface));
          color: var(--md-sys-color-on-secondary-container, var(--color-accent));
          margin-bottom: 12px;
        }
        .sc-stat-value {
          font-size: 24px;
          font-weight: 700;
          line-height: 1.15;
          color: var(--md-sys-color-primary, var(--color-accent));
          margin-bottom: 6px;
        }
        .sc-stat-label {
          font-size: 14px;
          font-weight: 600;
          color: var(--md-sys-color-on-surface, var(--color-text));
          margin-bottom: 8px;
        }
        .sc-stat-desc {
          font-size: 13px;
          line-height: 1.5;
          color: var(--md-sys-color-on-surface-variant, var(--color-text-muted));
        }
      `}</style>

      <div className="container">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <M3eHeading
            variant="display"
            size="small"
            emphasized
            level="2"
            className="reveal"
          >
            Light. Dark.{" "}
            <span
              style={{
                color: "var(--md-sys-color-primary, var(--color-accent))",
              }}
            >
              Yours.
            </span>
          </M3eHeading>
        </div>
        <p
          className="section-subtitle reveal"
          style={{ textAlign: "center", transitionDelay: "80ms" }}
        >
          Material 3 screens for search, route details, settings, maps, dark
          mode, and light mode.
        </p>

        {/* Gallery */}
        <div
          key={galleryKey}
          className="showcase-gallery-wrap visible"
        >
          <div className="showcase-gallery">
            {gallery.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                style={{
                  animation: `galleryFadeUp 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms both`,
                }}
              />
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 64 }}>
          <M3eHeading
            variant="headline"
            size="small"
            emphasized
            level="2"
            className="reveal"
          >
            App facts
          </M3eHeading>
        </div>

        {/* Product fact cards */}
        <div className="sc-stats-grid">
          {stats.map((s, i) => (
            <M3eCard
              key={i}
              variant="elevated"
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div slot="content">
                <div className="sc-stat-icon">
                  <M3eIcon
                    name={s.icon}
                    variant="rounded"
                    style={{ fontSize: 22 }}
                  />
                </div>
                <div className="sc-stat-value">{s.value}</div>
                <div className="sc-stat-label">{s.label}</div>
                <div className="sc-stat-desc">{s.desc}</div>
              </div>
            </M3eCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
