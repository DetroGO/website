import React from "react";
import { M3eCard } from "@m3e/react/card";
import { M3eHeading } from "@m3e/react/heading";
import { M3eIcon } from "@m3e/react/icon";

const features = [
  {
    icon: "route",
    title: "BFS Route Planning",
    desc: "A focused routing engine finds Delhi-NCR Metro paths quickly from local transit data.",
  },
  {
    icon: "map_search",
    title: "Interactive Route Map",
    desc: "Minimal schematic maps make stations, line changes, and your route easy to understand at a glance.",
  },
  {
    icon: "map",
    title: "In-App System Map",
    desc: "The supported region map is built into the app, so commuters do not need to jump between tools.",
  },
  {
    icon: "near_me",
    title: "Nearest Station",
    desc: "Find the closest station automatically and start planning from where you actually are.",
  },
  {
    icon: "palette",
    title: "Material You",
    desc: "Material 3 layouts, dynamic colors, and a native-feeling Android interface keep the app clean.",
  },
  {
    icon: "dark_mode",
    title: "Offline + AMOLED",
    desc: "Routing and GPS work offline, with an AMOLED mode for a pure black night-friendly experience.",
  },
];

const comparisonItems = {
  manual: [
    "Ads after every Interaction",
    "No transparency over your data",
    "Irrelevant content everywhere",
    "Inconsistent UI & UX",
    "Hard to verify route data",
    "Closed source",
  ],
  detro: [
    "Route planning without unrelated services",
    "Offline routing and GPS support",
    "Interactive map and in-app system map",
    "Nearest station search built in",
    "Material 3, dynamic colors, AMOLED mode",
    "Open source under GPL 3.0",
  ],
};

const FeaturesSection = () => {
  return (
    <section id="features" className="section">
      <div className="container">
        {/* Section heading */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <M3eHeading
            variant="display"
            size="small"
            className="reveal"
            style={{ marginBottom: 8 }}
          >
            Why DetroGo?
          </M3eHeading>
          <p
            className="section-subtitle reveal"
            style={{ transitionDelay: "80ms" }}
          >
            See the difference yourself
          </p>
        </div>

        {/* Custom comparison cards */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
            marginBottom: 80,
          }}
        >
          {/* Manual card */}
          <div
            style={{
              borderRadius: 24,
              padding: "28px 28px 32px",
              background: "var(--md-sys-color-surface, var(--color-surface))",
              border:
                "1.5px solid var(--md-sys-color-error, var(--color-border))",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "var(--md-sys-color-error, #ffdad6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <M3eIcon
                  name="wrong_location"
                  variant="rounded"
                  style={{
                    fontSize: 22,
                    color: "var(--md-sys-color-error-container, #93000a)",
                  }}
                />
              </span>
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 18,
                    color: "var(--md-sys-color-on-surface, var(--color-text))",
                  }}
                >
                  Other Metro Apps
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color:
                      "var(--md-sys-color-on-surface-variant, var(--color-text-muted))",
                    marginTop: 2,
                  }}
                >
                  What everyone uses
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {comparisonItems.manual.map((item, i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  <M3eIcon
                    name="close"
                    variant="rounded"
                    style={{
                      fontSize: 16,
                      color: "var(--md-sys-color-error, #b3261e)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 14,
                      color:
                        "var(--md-sys-color-on-surface-variant, var(--color-text-muted))",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DetroGo card */}
          <div
            style={{
              borderRadius: 24,
              padding: "28px 28px 32px",
              background:
                "var(--md-sys-color-primary-container, var(--color-accent-surface))",
              border:
                "1.5px solid var(--md-sys-color-primary, var(--color-accent))",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background:
                    "var(--md-sys-color-primary, var(--color-accent))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <M3eIcon
                  name="Commute"
                  variant="rounded"
                  style={{
                    fontSize: 22,
                    color: "var(--md-sys-color-on-primary, #fff)",
                  }}
                />
                {/* <img style={{ width: 40 }} src="/screenshots/logo.png"></img>*/}
              </span>
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 18,
                    color:
                      "var(--md-sys-color-on-primary-container, var(--color-text))",
                  }}
                >
                  DetroGo
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color:
                      "var(--md-sys-color-on-primary-container, var(--color-text-muted))",
                    opacity: 0.75,
                    marginTop: 2,
                  }}
                >
                  The smart way
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {comparisonItems.detro.map((item, i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  <M3eIcon
                    name="check_circle"
                    variant="rounded"
                    style={{
                      fontSize: 16,
                      color: "var(--md-sys-color-primary, var(--color-accent))",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 14,
                      color:
                        "var(--md-sys-color-on-primary-container, var(--color-text))",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature grid heading */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <M3eHeading
            variant="display"
            size="small"
            className="reveal"
            style={{ marginBottom: 8 }}
          >
            DetroGo's Toolkit for Commuters
          </M3eHeading>
          <p
            className="section-subtitle reveal"
            style={{ transitionDelay: "80ms" }}
          >
            Current app details from the DetroGo project.
          </p>
        </div>

        {/* Feature cards grid — M3e */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {features.map((f, i) => (
            <M3eCard
              key={i}
              variant="elevated"
              className="reveal-scale"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div
                slot="header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 8,
                  padding: "8px",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "var(--md-sys-color-secondary-container)",
                    color: "var(--md-sys-color-on-secondary-container)",
                    flexShrink: 0,
                  }}
                >
                  <M3eIcon
                    name={f.icon}
                    variant="rounded"
                    style={{ fontSize: 22 }}
                  />
                </span>
                <M3eHeading variant="title" size="medium">
                  {f.title}
                </M3eHeading>
              </div>
              <div
                slot="content"
                style={{
                  color: "var(--md-sys-color-on-surface-variant)",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                {f.desc}
              </div>
            </M3eCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
