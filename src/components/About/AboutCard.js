import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanjeev Sabari </span>
             from <span className="purple"> Coimbatore, India.</span>
            <br />
            
           
            I am going to graduate with a Bachelor of Information Technology in 2027.
            
            <br />
            I am passionate about learning and exploring new technologies to further my understanding of the field.
            <br />
            <br />
            Apart from coder, am a
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Stock Market Trader
            </li>
            <li className="about-activity">
              <ImPointRight /> Founder At Z
            </li>
            <li className="about-activity">
              <ImPointRight /> Visual Content Creator
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " Make every day count! "{" "}
          </p>
          <footer className="blockquote-footer">Sanjeev Sabari S</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
