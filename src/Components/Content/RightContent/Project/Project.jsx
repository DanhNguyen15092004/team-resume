import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faGlobe, faProjectDiagram ,faMicrochip} from "@fortawesome/free-solid-svg-icons"; // Importing solid icons
import "./Project.css"; // Importing CSS file for styling

const Project = () => {
  return (
    <Col>
      <h3 className="project-title title">PROJECT</h3>
      <hr/>
      <div className="project-content">
        {/* Telegram UI project */}
        <h5 className="subtitle project-subtitle">TELEGRAM UI </h5>
        <div className="project-item">
          <FontAwesomeIcon icon={faProjectDiagram} className="custom-icon" /> {/* Icon for project description */}
          <p className="project-text">
            Description : Our project is a simplified clone of the Telegram
            messaging app, with a focus on replicating its core chat
            functionality. Designed to be lightweight and straightforward, our
            clone provides users with a basic yet functional messaging platform.
          </p>
        </div>
        <div className="project-item">
          <FontAwesomeIcon icon={faCalendarAlt} className="custom-icon" /> {/* Icon for project traction */}
          <p className="project-text">Traction : 3/2023 - 4/2023</p>
        </div>
        <div className="project-item">
          <FontAwesomeIcon icon={faMicrochip} className="custom-icon" /> {/* Icon for project technology */}
          <p className="project-text">Technology : Svelte</p>
        </div>
        <div className="project-item">
          <FontAwesomeIcon icon={faGlobe} className="custom-icon" /> {/* Icon for project URL */}
          <p className="project-text">Url : https://telegrammessage.pages.dev/</p>
        </div>
        {/* To do list project */}
        <h5 className="subtitle project-subtitle" >TO DO LIST </h5>
        <div className="project-item">
          <FontAwesomeIcon icon={faProjectDiagram} className="custom-icon" /> {/* Icon for project description */}
          <p className="project-text">
            Description : Our goal is to offer a no-frills to-do list app that
            caters to users looking for a simple and efficient way to manage
            their tasks. By focusing on essential functionality and a minimalist
            design, we aim to provide a hassle-free experience for organizing
            daily activities and increasing productivity.
          </p>
        </div>
        <div className="project-item">
          <FontAwesomeIcon icon={faCalendarAlt} className="custom-icon" /> {/* Icon for project traction */}
          <p className="project-text">Traction : 4/2023 - 5/2023</p>
        </div>
        <div className="project-item">
          <FontAwesomeIcon icon={faMicrochip} className="custom-icon" /> {/* Icon for project technology */}
          <p className="project-text">Technology : Svelte</p>
        </div>
        <div className="project-item">
          <FontAwesomeIcon icon={faGlobe} className="custom-icon" /> {/* Icon for project URL */}
          <p className="project-text">Url : https://first-svelte-project.pages.dev/</p>
        </div>
      </div>
    </Col>
  );
};

export default Project;
