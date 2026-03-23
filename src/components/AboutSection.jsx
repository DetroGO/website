import React from "react";
import { Github, Twitter, Globe } from "lucide-react";

const techItems = [
  {
    icon: "🧭",
    title: "Dijkstra's Algorithm",
    desc: "Custom graph implementation for shortest-path routing across all 250+ metro stations.",
  },
  {
    icon: "🎨",
    title: "Material 3 + Material You",
    desc: "Full Monet color engine support — the app adapts to your wallpaper palette.",
  },
  {
    icon: "💾",
    title: "SharedPreferences",
    desc: "Lightweight local persistence for route history with zero dependencies.",
  },
  {
    icon: "🗺️",
    title: "Custom WebView Map",
    desc: "Interactive schematic metro map rendered in a sandboxed WebView with JS bridge.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" style={{ padding: "100px 0" }}>
      <style>{`
        .about-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .about-layout { grid-template-columns: 1fr; gap: 40px; }
        }
        .about-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 99px;
          background: var(--color-accent-surface);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 18px;
          border: 1px solid var(--color-border);
        }
        .about-title {
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 20px;
          color: var(--color-text);
        }
        .about-body {
          font-size: 16px;
          line-height: 1.75;
          color: var(--color-text-muted);
          margin-bottom: 14px;
        }
        .about-links {
          display: flex;
          gap: 10px;
          margin-top: 28px;
          flex-wrap: wrap;
        }
        .about-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 99px;
          border: 1.5px solid var(--color-border);
          font-size: 14px;
          font-weight: 500;
          color: var(--color-text);
          text-decoration: none;
          background: var(--color-surface);
          transition: background 0.2s ease, border-color 0.2s ease,
                      color 0.2s ease, transform 0.2s ease;
        }
        .about-link:hover {
          background: var(--color-accent-surface);
          border-color: var(--color-accent);
          color: var(--color-accent);
          transform: translateY(-2px);
        }
        .tech-stack {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .tech-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 18px 22px;
          border-radius: 20px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        .tech-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          background: var(--color-accent-surface);
        }
        .tech-icon {
          font-size: 26px;
          flex-shrink: 0;
          line-height: 1;
        }
        .tech-info h4 {
          font-size: 15px;
          font-weight: 600;
          color: var(--color-text);
          margin: 0 0 4px;
        }
        .tech-info p {
          font-size: 13px;
          color: var(--color-text-muted);
          margin: 0;
          line-height: 1.5;
        }
      `}</style>

      <div className="container">
        <div className="about-layout">
          {/* Left */}
          <div>
            <div className="about-tag reveal">👨‍💻 About</div>
            <h2
              className="about-title reveal"
              style={{ transitionDelay: "60ms" }}
            >
              Built by a student,
              <br />
              for <span className="highlight">Delhi commuters.</span>
            </h2>
            <p
              className="about-body reveal"
              style={{ transitionDelay: "120ms" }}
            >
              DetroGo started as a personal project — tired of manually tracing
              routes on the metro map every time. So I built the app I always
              wanted.
            </p>
            <p
              className="about-body reveal"
              style={{ transitionDelay: "160ms" }}
            >
              Every detail — from the grouped blob list UI to the schematic map
              — was designed and coded from scratch. Runs entirely offline,
              calculates routes in under a second.
            </p>
            <div
              className="about-links reveal"
              style={{ transitionDelay: "200ms" }}
            >
              <a
                href="https://github.com/simplystudios"
                target="_blank"
                rel="noreferrer"
                className="about-link"
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href="https://twitter.com/anshwadhwa8"
                target="_blank"
                rel="noreferrer"
                className="about-link"
              >
                <Twitter size={15} /> Twitter
              </a>
              <a
                href="https://peerlist.io/anshwadhwa"
                target="_blank"
                rel="noreferrer"
                className="about-link"
              >
                <Globe size={15} /> Peerlist
              </a>
            </div>
          </div>

          {/* Right: tech stack */}
          <div className="tech-stack">
            {techItems.map((item, i) => (
              <div
                key={i}
                className="tech-card reveal-right"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="tech-icon">{item.icon}</div>
                <div className="tech-info">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
