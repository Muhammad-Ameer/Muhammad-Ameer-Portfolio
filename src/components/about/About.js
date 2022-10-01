import React from "react";
import "./about.css";
import ME from "../../assets/Ameer-4.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About My Pic" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years Learning</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>12+ Completed</small>
            </article>
          </div>
          <p>
            I am Full Stack Developer. I am very excited to bring my experties
            into profession obtained from U.E.T, Lahore. Currently, I am working
            on a project "Web Content Accessibility Assistive Tool". It's
            purpose is to make websites "Voice First" and provide enhanced
            usability and UI/UX to the people with disabilities.
            <br />I have worked on different MERN Stack Projects. I have strong
            skills in Html, CSS, JavaScript, Vue, BootStrap, Tailwind CSS, MUI,
            PhP, Laravel, MySQL Databases, Flutter Mobile Applications. I have
            also worked on different Console Based Projects. I have developed
            Web and Desktop Applications like PayRoll Management system, Remote
            Smart HealthCare System and other softwares as term Projects. I have
            adequate knowledge of Programming (C, C++, C#, Python, PhP,
            JavaScript), OOP, Data Structures, Game Development in Unity, UI/UX
            Design, Machine Learning, Data Science, WordPress. <br />I am keen
            desirous and passionate about learning new skills during my free
            time. Currently, I am diving into the field of Artificial
            Intelligence, Deep Learning and Natural Languages Processing. I will
            be happy to join a best software company to whom I can bring strong
            efforts, dedications and productivity.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
