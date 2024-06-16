import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Samarjeet Mohite</strong>. I am currently a Final Year Student at IIIT Gwalior. My journey into the world of technology began upon entering college, where I developed a passion for creating applications using various JavaScript frameworks over the past three years.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            Midway through my academic career, I developed a deep interest in blockchain technology and have since built several web3 applications using Solidity and other blockchain frameworks. This newfound passion for blockchain led me to intern at Sarvatech Labs as a Blockchain Developer, where I gained valuable hands-on experience
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            In addition to my blockchain work, I also served as an SDE intern (Full Stack Developer) at Inovocare Healthsoft Solutions. These roles have allowed me to hone my skills in both leadership and teamwork. I am confident in my ability to work effectively within a team.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Recently, my interest has shifted towards understanding the underlying mechanisms of blockchains, including core systems and protocols. This deeper dive into blockchain fundamentals has fueled my eagerness for opportunities related to this area of study and
              I am open to work  about any opportunity that allows me to explore and contribute to this field .

              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
