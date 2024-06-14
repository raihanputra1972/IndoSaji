import React from "react";
import LightButton from "../../assets/website/light-mode-button.png"; // Sesuaikan jalur impor
import DarkButton from "../../assets/website/dark-mode-button.png"; // Sesuaikan jalur impor

const darkmode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement; // access to html element

  // set theme to localstorage and html element
  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightButton}
        alt="Light Mode"
        className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'} transition-all duration-300`}
      />
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={DarkButton}
        alt="Dark Mode"
        className="w-12 cursor-pointer"
      />
    </div>
  );
};

export default darkmode;
