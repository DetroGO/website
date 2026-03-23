import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../ThemeContext";
import { Palette } from "lucide-react";
import { M3eIconButton } from "@m3e/react/icon-button";
import { M3eIcon } from "@m3e/react/icon";

const ColorPicker = () => {
  const { colorIndex, setColorIndex, presets } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <M3eIconButton
        variant="outlined"
        onClick={() => setOpen(!open)}
        aria-label="Change theme color"
      >
        <M3eIcon
          style={{ fontSize: 20 }}
          name="Palette"
          reflected="filled"
          variant="rounded"
        ></M3eIcon>
      </M3eIconButton>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "52px",
            right: 0,
            background: "var(--color-surface)",
            borderRadius: "16px",
            padding: "16px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
            zIndex: 1001,
            minWidth: "200px",
            border: "1px solid var(--color-border)",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "var(--color-text-muted)",
              marginBottom: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Theme Color
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
            }}
          >
            {presets.map((p, i) => (
              <button
                key={i}
                onClick={() => {
                  setColorIndex(i);
                  setOpen(false);
                }}
                title={p.name}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  border:
                    i === colorIndex
                      ? `3px solid ${p.accentLight}`
                      : "2px solid var(--color-border)",
                  background: p.accent,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  transform: i === colorIndex ? "scale(1.1)" : "scale(1)",
                  boxShadow:
                    i === colorIndex
                      ? `0 0 0 2px var(--color-surface), 0 0 0 4px ${p.accentLight}`
                      : "none",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
