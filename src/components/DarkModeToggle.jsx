export default function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
      <button
        onClick={toggleDarkMode}
        className="toggle-btn"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

