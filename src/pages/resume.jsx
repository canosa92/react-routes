import { studies, experiences } from "../data/resume";
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <>
      <div className="containerResume">
        <h3>Studies</h3>
        <ul>
          {studies.map((study) => (
            <li key={study.id}>
              {study.title} - {study.institution} ({study.date})
            </li>
          ))}
        </ul>

        <h3>Experiences</h3>
        <ul>
          {experiences.map((experience) => (
            <li key={experience.id}>
              {experience.title} - {experience.company} ({experience.date})
            </li>
          ))}
        </ul>
      </div>
      <div className="divLink">
            <Link to="/">Return to Home</Link>
            <br/>
            <Link to="/resume">Go to Resume</Link>
        </div>
    </>
  );
}

export default Resume;