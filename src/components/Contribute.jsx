import React from "react";
import { M3eHeading } from "@m3e/react/heading";
import { M3eButton } from "@m3e/react/button";
import { M3eIcon } from "@m3e/react/icon";

const CONTRIBUTOR_ITEMS = [
  {
    icon: "add_location_alt",
    title: "Add local data",
    desc: "Share station lists, stop names, line data, and city-specific details from the places you know.",
  },
  {
    icon: "fact_check",
    title: "Verify routes",
    desc: "Check route corrections, missing stops, station names, and interchange information.",
  },
  {
    icon: "hub",
    title: "Improve transfers",
    desc: "Map interchanges, walking links, nearby stops, and small details that make trips clearer.",
  },
];

const DATA_EXAMPLES = [
  "Station lists",
  "Line data",
  "Route corrections",
  "Interchange info",
  "Missing stops",
  "Local transit knowledge",
];

const ContributorsSection = () => {
  const GITHUB_REPO_URL = "https://github.com/DetroGO/";
  return (
    <section id="contributors" className="contributors-section">
      <style>{`
        .contributors-section {
          padding: 100px 0;
        }

        .contributors-inner {
          max-width: 920px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .contributors-header {
          max-width: 680px;
          margin: 0 auto 36px;
          text-align: center;
        }

        .contributors-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 99px;
          background: color-mix(in srgb, var(--md-sys-color-primary, var(--color-accent)) 10%, transparent);
          font-size: 13px;
          font-weight: 600;
          color: var(--md-sys-color-primary, var(--color-accent));
          margin-bottom: 20px;
        }

        .contributors-desc {
          margin-top: 12px;
          font-size: 16px;
          line-height: 1.7;
          color: var(--md-sys-color-on-surface-variant, var(--color-text-muted));
        }

        .contributors-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 28px;
        }

        .contributor-item {
          padding: 20px;
          border-radius: 24px;
          background: var(--md-sys-color-surface-container-high, rgba(128,128,128,0.08));
          text-align: left;
        }

        .contributor-icon {
          width: 38px;
          height: 38px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          background: color-mix(in srgb, var(--md-sys-color-primary, var(--color-accent)) 12%, transparent);
          color: var(--md-sys-color-primary, var(--color-accent));
        }

        .contributor-item h3 {
          margin: 0 0 8px;
          font-size: 16px;
          color: var(--md-sys-color-on-surface, var(--color-text));
        }

        .contributor-item p {
          margin: 0;
          font-size: 14px;
          line-height: 1.6;
          color: var(--md-sys-color-on-surface-variant, var(--color-text-muted));
        }

        .contributors-examples {
          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin: 0 auto 32px;
          max-width: 720px;
        }

        .contributors-example {
          padding: 7px 12px;
          border-radius: 99px;
          background: var(--md-sys-color-surface-container-high, rgba(128,128,128,0.08));
          color: var(--md-sys-color-on-surface-variant, var(--color-text-muted));
          font-size: 13px;
          font-weight: 500;
        }

        .contributors-cta {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
        }

        .contributors-note {
          margin: 0;
          max-width: 540px;
          font-size: 13px;
          line-height: 1.6;
          color: var(--md-sys-color-on-surface-variant, var(--color-text-muted));
          opacity: 0.75;
        }

        @media (max-width: 760px) {
          .contributors-section {
            padding: 80px 0;
          }

          .contributors-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="contributors-inner reveal">
        <div className="contributors-header">
          <div className="contributors-badge">
            <M3eIcon name="groups" variant="rounded" style={{ fontSize: 15 }} />
            Community powered
          </div>

          <M3eHeading variant="display" size="small" emphasized level="2">
            Help DetroGo support more cities.
          </M3eHeading>

          <p className="contributors-desc">
            Reliable Indian transit data is still hard to find in clean public
            formats. Delhi-NCR is the current focus, and DetroGo depends on the
            community to map, verify, and maintain transit data before more
            Indian cities can be supported well.
          </p>
        </div>

        <div className="contributors-grid">
          {CONTRIBUTOR_ITEMS.map((item, index) => (
            <div className="contributor-item" key={index}>
              <div className="contributor-icon">
                <M3eIcon
                  name={item.icon}
                  variant="rounded"
                  style={{ fontSize: 20 }}
                />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="contributors-examples"
          aria-label="Contribution examples"
        >
          {DATA_EXAMPLES.map((item) => (
            <span className="contributors-example" key={item}>
              {item}
            </span>
          ))}
        </div>

        <div className="contributors-cta">
          <M3eButton
            variant="filled"
            size="medium"
            onClick={() =>
              window.open(GITHUB_REPO_URL, "_blank", "noopener,noreferrer")
            }
          >
            <M3eIcon
              name="code"
              variant="rounded"
              style={{ fontSize: 18, marginRight: 6 }}
            />
            Contribute on GitHub
          </M3eButton>

          <p className="contributors-note">
            You do not need to be an expert developer. Clear local knowledge and
            verified corrections are just as useful as code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContributorsSection;
