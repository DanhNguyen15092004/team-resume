import React from "react";
import './SoftSkills.css'; // Adjust the path if necessary
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faPencilAlt, faUsers, faHandshake, faBrain, faLightbulb, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const SoftSkills = () => {
  return (
    <div className="softskills-container">
      <div className="softskills-content">
        <h3 className="softskills-title title">SOFT SKILLS</h3>
        <hr />
        <div className="softskills-section">
          <h5 className="subtitle">Communication Skills</h5>
          <div className="softskills-item">
            <FontAwesomeIcon icon={faComments} className='custom-icon' />
            <p>Verbal Communication: Effectively articulate ideas, requirements, and solutions in team meetings and with stakeholders.</p>
          </div>
          <div className="softskills-item">
            <FontAwesomeIcon icon={faPencilAlt} className='custom-icon' />
            <p>Written Communication: Write clear and concise documentation, email.</p>
          </div>
        </div>
        <div className="softskills-section">
          <h5 className="subtitle">Teamwork and Collaboration</h5>
          <div className="softskills-item">
            <FontAwesomeIcon icon={faUsers} className='custom-icon' />
            <p>Collaboration: Work well within a team, sharing knowledge and code, and supporting others.</p>
          </div>
          <div className="softskills-item">
            <FontAwesomeIcon icon={faHandshake} className='custom-icon' />
            <p>Conflict Resolution: Manage and resolve conflicts in a constructive manner, ensuring the team stays focused on goals.</p>
          </div>
        </div>
        <div className="softskills-section">
          <h5 className="subtitle">Problem-Solving Skills</h5>
          <div className="softskills-item">
            <FontAwesomeIcon icon={faBrain} className='custom-icon' />
            <p>Critical Thinking: Analyze problems deeply, identify their root causes, and think logically about possible solutions.</p>
          </div>
          <div className="softskills-item">
            <FontAwesomeIcon icon={faLightbulb} className='custom-icon' />
            <p>Creativity: Think outside the box to come up with innovative solutions to complex problems.</p>
          </div>
          <div className="softskills-item">
            <FontAwesomeIcon icon={faThumbsUp} className='custom-icon' />
            <p>Persistence: Stay determined and keep working through challenging problems without giving up easily.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
