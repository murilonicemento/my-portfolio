import { Experience, WorkData, AssignmentsWork } from "./styled";
import building from "../../assets/images/building.svg";
import location from "../../assets/images/location.svg";
import calendar from "../../assets/images/calendar.svg";

export function WorkExperience({
  title,
  jobType,
  company,
  city,
  startDate,
  startYear,
  endDate,
  endYear = "",
  assignments,
}) {
  return (
    <Experience>
      <div>
        <p>{title}</p>
        <p>{jobType}</p>
      </div>
      <WorkData>
        <span>
          <p>
            <img src={building} alt="Building Icon" />
            {company}
          </p>
          <p>
            <img src={location} alt="Location Icon" />
            {city}
          </p>
        </span>
        <div>
          <img src={calendar} alt="Calendar Icon" />
          <p>{`${startDate} ${startYear} - ${endDate} ${endYear}`}</p>
        </div>
      </WorkData>
      <AssignmentsWork>
        <ul>
          {assignments.map((assignment, index) => {
            return <li key={index}>{assignment}</li>;
          })}
        </ul>
      </AssignmentsWork>
      <div className="divider"></div>
    </Experience>
  );
}
