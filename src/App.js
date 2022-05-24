import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
// import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Statistics from "./components/Statistics/Statistics";

const App = () => {
  return (
    <div>
      <NavBar />
      {/* <Hero /> */}
      <Banner />
      <About />
      <Features />
      <Statistics />
      <Contact />
    </div>
  );
};

export default App;
