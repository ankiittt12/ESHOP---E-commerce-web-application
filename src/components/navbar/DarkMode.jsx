import React from "react";
import LightButton from "../../assets/light-mode-button.png";
import DarkButton from "../../assets/dark-mode-button.png";

function DarkMode() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light",
  );
  const element = document.documentElement;
  console.log(element);
  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={theme === "dark" ? DarkButton : LightButton}
        alt="theme toggle"
        className="w-12 cursor-pointer transition-all duration-300"
      />
    </div>
  );
}

export default DarkMode;
