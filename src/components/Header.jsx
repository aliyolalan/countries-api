import { useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("Dark Theme");
  const onThemeChangeHandler = () => {
    const newThemeSetting = theme === "Dark Theme" ? "Light Theme" : "Dark Theme"
    setTheme(newThemeSetting)
  }

  return (
    <div className="bg-[#2B3743] h-20 text-white mb-[49px]">
      <div className="container h-20 mx-auto flex justify-between items-center">
        <h2 className="text-2xl">
          Where in the world?
        </h2>
        <div className="cursor-pointer" onClick={onThemeChangeHandler}>
          {theme}
        </div>
      </div>
    </div>
  );
}
