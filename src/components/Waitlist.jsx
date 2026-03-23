import React, { useState } from "react";
import { M3eHeading } from "@m3e/react/heading";
import { M3eButton } from "@m3e/react/button";
import { M3eIcon } from "@m3e/react/icon";

const PERKS = [
  { icon: "notifications_active", text: "Early access when we launch" },

  { icon: "volunteer_activism", text: "Help shape the app" },
];

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [count] = useState(247); // mock waitlist count

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // Simulate API call — replace with your actual endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  return (
    <section id="waitlist" style={{ padding: "100px 0" }}>
      <style>{`
        .wl-inner {
          max-width: 600px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
        }

        /* Input row */
        .wl-input-row {
          display: flex;
          gap: 10px;
          margin-top: 32px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .wl-input {
          flex: 1;
          min-width: 220px;
          height: 48px;
          padding: 0 20px;
          border-radius: 99px;
          border: 1.5px solid var(--md-sys-color-outline, var(--color-border));
          background: var(--md-sys-color-surface-container-high, var(--color-surface));
          color: var(--md-sys-color-on-surface, var(--color-text));
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          caret-color: var(--md-sys-color-primary, var(--color-accent));
        }
        .wl-input::placeholder {
          color: var(--md-sys-color-on-surface-variant, var(--color-text-muted));
        }
        .wl-input:focus {
          border-color: var(--md-sys-color-primary, var(--color-accent));
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--md-sys-color-primary, var(--color-accent)) 15%, transparent);
        }
        .wl-input.error {
          border-color: var(--md-sys-color-error, #b3261e);
        }

        /* Perks row */
        .wl-perks {
          display: flex;
          gap: 24px;
          justify-content: center;
          margin-top: 40px;
          flex-wrap: wrap;
        }
        .wl-perk {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--md-sys-color-on-surface-variant, var(--color-text-muted));
        }
        .wl-perk-icon {
          color: var(--md-sys-color-primary, var(--color-accent));
        }

        /* Count badge */
        .wl-count {
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

        /* Success state */
        .wl-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          animation: wlFadeIn 0.5s cubic-bezier(0.22,1,0.36,1) both;
          padding: 32px;
          border-radius: 24px;
          background: color-mix(in srgb, var(--md-sys-color-primary, var(--color-accent)) 8%, transparent);
          border: 1.5px solid color-mix(in srgb, var(--md-sys-color-primary, var(--color-accent)) 25%, transparent);
        }
        .wl-success-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--md-sys-color-primary-container, var(--color-accent-surface));
          color: var(--md-sys-color-on-primary-container, var(--color-accent));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes wlFadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <div className="wl-inner reveal">
        {/* Count badge */}
        <div className="wl-count">
          <M3eIcon name="info" variant="rounded" style={{ fontSize: 16 }} />
          Regular Updates on Threads and Twitter
        </div>

        {/* Heading */}
        <M3eHeading variant="display" size="small" emphasized level="2">
          Be the first to ride.
        </M3eHeading>
        <p
          style={{
            marginTop: 12,
            fontSize: 16,
            lineHeight: 1.7,
            color:
              "var(--md-sys-color-on-surface-variant, var(--color-text-muted))",
          }}
        >
          DetroGo is in development and will be coming soon. Drop your email and
          we'll let you know the moment it's ready no spam, just one message.
        </p>

        {/* Form or success */}
        {status === "success" ? (
          <div className="wl-success" style={{ marginTop: 32 }}>
            <div className="wl-success-icon">
              <M3eIcon
                name="check"
                variant="rounded"
                style={{ fontSize: 28 }}
              />
            </div>
            <M3eHeading variant="title" size="large">
              You're on the list!
            </M3eHeading>
            <p
              style={{
                fontSize: 14,
                color:
                  "var(--md-sys-color-on-surface-variant, var(--color-text-muted))",
                maxWidth: 320,
                lineHeight: 1.6,
              }}
            >
              We'll send you an email as soon as DetroGo is live. Thanks for the
              support 🎉
            </p>
          </div>
        ) : (
          <>
            <div className="wl-input-row">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                className={`wl-input ${status === "error" ? "error" : ""}`}
              />
              <M3eButton
                variant="filled"
                size="medium"
                onClick={handleSubmit}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Joining…" : "Join Waitlist"}
              </M3eButton>
            </div>

            {status === "error" && (
              <p
                style={{
                  marginTop: 8,
                  fontSize: 13,
                  color: "var(--md-sys-color-error, #b3261e)",
                }}
              >
                Please enter a valid email address.
              </p>
            )}

            {/* Perks */}
            <div className="wl-perks">
              {PERKS.map((p, i) => (
                <div key={i} className="wl-perk">
                  <M3eIcon
                    name={p.icon}
                    variant="rounded"
                    className="wl-perk-icon"
                    style={{ fontSize: 16 }}
                  />
                  {p.text}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default WaitlistSection;
