import React, { useState } from "react";
import Container from "../components/Container";
import Subtitle from "../components/ui/Subtitle";
import Title from "../components/ui/Title";
import EducationTab from "./EducationTab";
import ProfessonalTab from "./ProfessonalTab";

const Resume = () => {
  const [education, setEducation] = useState(true);
  const [professional, setProfessional] = useState(false);
  const [experience, setExperience] = useState(false);
  const [interview, setInterview] = useState(false);

  const handleEducation = () => {
    setEducation(true);
    setProfessional(false);
    setExperience(false);
    setInterview(false);
  };
  const handleProfession = () => {
    setEducation(false);
    setProfessional(true);
    setExperience(false);
    setInterview(false);
  };
  const handleExperience = () => {
    setEducation(false);
    setProfessional(false);
    setExperience(true);
    setInterview(false);
  };

  return (
    <section name="resume" className="px-4">
      <Container className="border-b border-black flex flex-col items-center  gap-7">
        <Subtitle title="7+ YEARS OF EXPERIENCE" />
        <Title title="My Resume" />
        <div className="w-full">
          <ul className="flex items-center justify-between ">
            <li
              onClick={handleEducation}
              className={`resumeTab ${education && "text-designColor"}`}
            >
              Education
            </li>
            <li
              onClick={handleProfession}
              className={`resumeTab ${professional && "text-designColor"}`}
            >
              Professional Skills
            </li>
            <li
              onClick={handleExperience}
              className={`resumeTab ${experience && "text-designColor"}`}
            >
              Experience
            </li>
            <li
              onClick={() => {
                setEducation(false);
                setProfessional(false);
                setExperience(false);
                setInterview(true);
              }}
              className={`resumeTab ${interview && "text-designColor"}`}
            >
              Interview
            </li>
          </ul>
          <div className="py-10 px-4 text-xl text-center font-bold">
            {education && <EducationTab />}
            {professional && <ProfessonalTab />}
            {experience && <div>experience part</div>}
            {interview && <div>interview part</div>}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Resume;
