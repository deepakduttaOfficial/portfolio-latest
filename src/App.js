import "./App.css";
import Router from "./Router";

function App() {
  window.addEventListener("blur", () => {
    document.title = "Know More About Myself :(";
  });
  window.addEventListener("focus", () => {
    document.title = "Deepak Dutta";
  });
  return <Router/>;
}

export default App;
