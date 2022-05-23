import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
// import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      {/* <Hero /> */}
      <Banner />
      <About />
      <Contact />
    </div>
  );
};

export default App;
