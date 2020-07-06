import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const DarkMode = ({ title, children }) =>
  <div className="toggler">
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
      <label className="tog" htmlFor="dark-mode">
        <input
          id="dark-mode"
          type="checkbox"
          onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
          checked={theme === "dark"}
          className="tog-checkbox"
        />
        {theme === "dark"
          ? (<div className="tog-text">Hell</div>)
          : (<div className="tog-text">Dunkel</div>)
        }
      </label>
    )}
    </ThemeToggler>
  </div>

export default DarkMode
