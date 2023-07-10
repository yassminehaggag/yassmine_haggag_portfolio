import { HashRouter as Router, Routes, Route } from "react-router-dom";

import {
  VrData,
  GameProjectsData,
  WebProjectsData,
  cvData,
  mlData,
} from "./Projects/ProjectsData";
import { cards, certificates } from "./data";
import Carousel from "./Carousel/Carousel";
import HomePage from "./HomePage/HomePage";
import Projects from "./Projects/Projects";

import "./App.css";
import Navbar from "./Navbar/Navbar";
import Experience from "./Experience/Experience";
// import Contact from "./Contact/Contact";
import AboutMe from "./AboutMe/AboutMe";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
        <Routes>
          <Route
            path="/projects"
            element={<Carousel type="cards" items={cards} />}
          />
        </Routes>
        <Routes>
          <Route
            path="/experience"
            element={<Experience />}
          />
        </Routes>
        <Routes>
          <Route
            path="/certificates"
            element={<Carousel type="certificates" items={certificates} />}
          />
        </Routes>
        {/* <Routes>
          <Route path="/contact-me" element={<Contact />} />
        </Routes> */}
        <Routes>
          <Route path="/vr" element={<Projects data={VrData} large={false} />} />
        </Routes>
        <Routes>
          <Route path="/game" element={<Projects data={GameProjectsData} large={false} />} />
        </Routes>
        <Routes>
          <Route path="/web" element={<Projects data={WebProjectsData} large={false} />} />
        </Routes>
        <Routes>
          <Route path="/cv" element={<Projects data={cvData} large={true} />} />
        </Routes>
        <Routes>
          <Route path="/ml" element={<Projects data={mlData} large={true} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
