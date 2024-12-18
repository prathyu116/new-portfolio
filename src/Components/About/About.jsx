import React from "react";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import VectorFrame from "./../../assets/about_vector.png";
import AboutAnime from "./../../assets/about_anime.gif";
import Profilepic from "./../../assets/pk.png";
import Tilt from "react-parallax-tilt";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";

import "./About.css";
const About = () => {
  return (
    <div className="section-container">
      {/* <div className="first-about"> */}
      {/* <div className="left-about"> */}
      <Header
        heading="about me"
        details="Dynamic and results-oriented full-stack web developer with 2 years of experience in building scalable healthcare solutions from the ground up. Expertise in backend development using Node.js, microservices architecture, and AWS. Skilled in React.js, TypeScript, and delivering efficient, robust applications in fast-paced environments. "
      />
      <div className="home-btnn">
        <a
          href="https://drive.google.com/file/d/1PLI9AhYRznogvzhxAtuepvg9AqDyCur-/view?usp=sharing"
          target="_blank"
          className="btnn btn-white"
        >
          <span className="btn-txt">My Resume</span>
        </a>
      </div>
      {/* </div> */}
      <div className="right-about">
        <Tilt>
          <img src={Profilepic} alt="" srcset="" />
        </Tilt>
      </div>

      <div className="image containr">
        <img src="../../assets/pk.png" alt="" />
      </div>

      <div className="vector-frame">
        <img src={VectorFrame} className="about-vector" alt="VectorFrame" />
      </div>
      <Header heading="Education" />

      <div className="education">
        <VerticalTimeline>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(19, 42, 62)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(240, 244, 248)" }}
            date="July 2018 - June 2021"
            iconStyle={{ background: "rgb(38, 74, 103)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of science ( Computer science )
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Kannur University,Kerala ,
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(19, 42, 62)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(240, 244, 248)" }}
            date="July 2016 - June 201.8"
            iconStyle={{ background: "rgb(96, 28, 28)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">
              12th (Computer Science)
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Durgha HSS kanhangad,Kerala,{" "}
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <FooterLink link="My Skills!" content="go to " toaddress="/skills" />
    </div>
  );
};

export default About;
