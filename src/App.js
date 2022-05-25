import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
// import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Blog from "./components/Blog/Blog";
// import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Statistics from "./components/Statistics/Statistics";
import MiniSection from "./components/MiniSection/MiniSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      {/* <Hero /> */}
      <Banner />
      <About />
      <Features />
      <Statistics />
      <Blog />
      <MiniSection />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;
