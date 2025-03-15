import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Components/AppRoutes";
import ToggleTheme from "./Components/ToggleTheme";
import "./Styles/App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="app">
        <ToggleTheme darkMode={darkMode} setDarkMode={setDarkMode} />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
