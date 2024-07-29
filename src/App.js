import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Members from "./Components/Members";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Service />
      </div>
      <div id="members">
        <Members />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
