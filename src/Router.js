import { BrowserRouter, Routes, Route } from "react-router-dom";

// Imported pages
import Home from "./pages/home";
import Post from "./pages/post";
import PageNotFound from "./pages/PageNotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
