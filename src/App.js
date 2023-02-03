import Home from "./pages/Home";
import "./App.css";

function App() {
  window.addEventListener("blur", () => {
    document.title = "Know More About Myself :(";
  });
  window.addEventListener("focus", () => {
    document.title = "Deepak Dutta";
  });
  return <Home />;
}

export default App;
