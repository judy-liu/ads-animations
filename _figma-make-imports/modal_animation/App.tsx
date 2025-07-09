import { useState } from "react";
import AnimatedModal from "./components/AnimatedModal";
import "./styles/globals.css";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="flex items-center justify-center" style={{ padding: 'var(--space-800)' }}>
        <div 
          className="rounded-lg shadow-lg max-w-4xl w-full"
          style={{ 
            backgroundColor: 'var(--color-surface-overlay)',
            borderRadius: 'var(--radius-200)',
            padding: 'var(--space-600)',
            boxShadow: 'var(--shadow-surface-overlay)'
          }}
        >
          <div className="flex items-center justify-between" style={{ marginBottom: 'var(--space-400)' }}>
            <div>
              <h1 style={{ marginBottom: 'var(--space-100)' }}>Smart Animation Demo</h1>
              <p style={{ color: 'var(--color-text-subtle)' }}>
                Watch the modal interaction animation - hover, select, and interact with the modal elements.
              </p>
            </div>
            <button
              onClick={toggleDarkMode}
              className="btn-secondary btn-sm"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--color-icon)' }}>
                  <path
                    d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--color-icon)' }}>
                  <path
                    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {isDarkMode ? 'Light' : 'Dark'}
            </button>
          </div>
          
          <div 
            className="border rounded-lg"
            style={{ 
              borderWidth: 'var(--border-width-025)',
              borderColor: 'var(--color-border)',
              borderRadius: 'var(--radius-200)',
              padding: 'var(--space-250)',
              backgroundColor: 'var(--color-surface-raised)'
            }}
          >
            <AnimatedModal />
          </div>
          
          <div style={{ marginTop: 'var(--space-300)', color: 'var(--color-text-subtle)' }}>
            <p>Animation sequence: Hover → Select → Modal slides in → Button interaction → Loading state</p>
          </div>
        </div>
      </div>
    </div>
  );
}