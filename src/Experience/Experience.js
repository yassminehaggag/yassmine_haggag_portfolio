import React from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline } from "react-vertical-timeline-component";

import { SectionWrapper } from "../hoc";
import { experiences } from "../data";
import ExperienceCard from "./ExperienceCard";
import "./Experience.scss";

const Experience = () => {
  return (
    <div>
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <motion.div className="home-text content">
        <h1 className="done">What have I done so far?</h1>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
