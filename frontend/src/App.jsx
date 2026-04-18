// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Careers from "./components/Careers";
import BlogDetails from "./components/BlogDetails";
import Testimonials from "./components/Testimonials"; // 👈 import Testimonials
import { Toaster } from "sonner";

import "slick-carousel/slick/slick.css"; // 👈 slick-carousel styles
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
          <Route path="/testimonials" element={<Testimonials />} /> {/* 👈 optional route if you want a dedicated page */}
        </Routes>
      </Router>

      <Toaster
        position="top-center"
        richColors
        expand
        toastOptions={{
          classNames: {
            toast: "rounded-xl shadow-lg",
          },
        }}
      />
    </>
  );
}

export default App;
