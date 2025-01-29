import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import ProjectPage from "./pages/ProjectPage";
import Works from "./pages/Works";
import About from "./pages/About";
import Error from "./pages/Error";
import { AnimatePresence } from "framer-motion";
export default function App() {
  return (
    <>
      <Router>
        <Header />

        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/works/:id" element={<ProjectPage />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
}
