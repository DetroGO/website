import React from "react";
import { M3eHeading } from "@m3e/react/heading";
import { M3eButton } from "@m3e/react/button";
import { M3eIcon } from "@m3e/react/icon";
import { M3eCard } from "@m3e/react/card";

// Replace with your actual Google Form link
const GOOGLE_FORM_URL = "https://forms.gle/yourformlink";

const PERKS = [
  { icon: "notifications_active", text: "First to know when we launch" },
  { icon: "volunteer_activism", text: "Help shape the app" },
  { icon: "lock", text: "No spam, ever" },
];

const WaitlistSection = () => {
  return (
    <section id="waitlist" style={{ padding: "100px 0" }}>
      <style>{`
        .wl-inner {
          max-width: 560px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
        }
        .wl-badge {
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
        .wl-perks {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 28px;
        }
        .wl-perk {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          padding: 6px 12px;
          border-radius: 99px;
          background: var(--md-sys-color-surface-container-high, rgba(128,128,128,0.08));
          color: var(--md-sys-color-on-surface-variant, var(--color-text-muted));
        }
        .wl-divider {
          width: 40px;
          height: 3px;
          border-radius: 99px;
          background: var(--md-sys-color-primary, var(--color-accent));
          margin: 24px auto 0;
          opacity: 0.4;
        }
      `}</style>

      <div className="wl-inner reveal">
        {/* Badge */}
        <div className="wl-badge">
          <M3eIcon
            name="rocket_launch"
            variant="rounded"
            style={{ fontSize: 15 }}
          />
          Coming soon
        </div>

        {/* Heading */}
        <M3eHeading variant="display" size="small" emphasized level="2">
          Be the first to ride.
        </M3eHeading>

        <p
          style={{
            marginTop: 12,
            marginBottom: 32,
            fontSize: 16,
            lineHeight: 1.7,
            color:
              "var(--md-sys-color-on-surface-variant, var(--color-text-muted))",
          }}
        >
          DetroGo is in development and coming soon to Android. Sign up and
          we'll let you know the moment it's ready.
        </p>

        {/* CTA */}
        <M3eButton
          variant="filled"
          size="medium"
          onClick={() =>
            window.open(
              "https://forms.gle/69tLCGZrFGDaMBUX7",
              "_blank",
              "noopener,noreferrer",
            )
          }
        >
          <M3eIcon
            name="edit"
            variant="rounded"
            style={{ fontSize: 18, marginRight: 6 }}
          />
          Join the Waitlist
        </M3eButton>

        <p
          style={{
            marginTop: 10,
            fontSize: 12,
            color:
              "var(--md-sys-color-on-surface-variant, var(--color-text-muted))",
            opacity: 0.7,
          }}
        >
          Opens a quick Google Form — takes 10 seconds
        </p>

        {/* Perks */}
        <div className="wl-perks">
          {PERKS.map((p, i) => (
            <div key={i} className="wl-perk">
              <M3eIcon
                name={p.icon}
                variant="rounded"
                style={{
                  fontSize: 14,
                  color: "var(--md-sys-color-primary, var(--color-accent))",
                }}
              />
              {p.text}
            </div>
          ))}
        </div>

        <div className="wl-divider" />
      </div>
    </section>
  );
};

export default WaitlistSection;
