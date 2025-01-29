import Hero from "../pages/Hero";
import About from "../pages/About";
import Works from "../pages/Works";
import Footer from "../pages/Footer";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Works />
      <Footer />
    </div>
  );
};

export default Home;
