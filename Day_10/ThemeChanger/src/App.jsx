import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/UserContext";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMOde] = useState("light");

  const darkTheme = () => {
    setThemeMOde("dark");
  };
  const lightTheme = () => {
    setThemeMOde("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          <ThemeBtn />
          <div className="w-full max-w-sm mx-auto"></div>
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
