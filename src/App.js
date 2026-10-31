import { useEffect } from "react";
import Home from "./pages/Home";
import "./App.css";

function App() {
  useEffect(() => {
    const handleBlur = () => {
      document.title = "Know More About Myself :(";
    };
    const handleFocus = () => {
      document.title = "Deepak Dutta";
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Home />
    </>
  );
}

export default App;
