"use client";

import { useSyncExternalStore, type ReactNode } from "react";

const THEME_KEY = "dixor-theme";
const THEME_CHANGE_EVENT = "dixor-theme-change";

function subscribeToTheme(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(THEME_CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(THEME_CHANGE_EVENT, onChange);
  };
}

function getThemeSnapshot() {
  const saved = localStorage.getItem(THEME_KEY);
  return saved ? saved === "dark" : true;
}

function getServerThemeSnapshot() {
  return true;
}

export default function PageShell({ children }: { children: ReactNode }) {
  const dark = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  function toggleTheme() {
    const nextDark = !dark;
    localStorage.setItem(THEME_KEY, nextDark ? "dark" : "light");
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  return (
    <div className={`dixor-page${dark ? " theme-dark" : " theme-light"}`}>
      {children}
      <div className="theme-switcher" aria-label="Appearance settings">
        <span className="setting-dot" aria-hidden="true">⚙</span>
        <button
          className="theme-toggle"
          aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
          onClick={toggleTheme}
        >
          {dark ? "☀" : "☾"}
        </button>
      </div>
      <button
        className="back-to-top"
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span aria-hidden="true">↑</span>
      </button>
    </div>
  );
}