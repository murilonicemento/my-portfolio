import { MyEducation, Skills } from "./styled";
import building from "../../assets/images/building.svg";
import calendar from "../../assets/images/calendar.svg";

export function Education({
  course,
  modality,
  university,
  startDate,
  startYear,
  endDate,
  endYear = "atual",
  skills,
}) {
  return (
    <MyEducation>
      <div>
        <p>{course}</p>
        <p>{modality}</p>
      </div>
      <div>
        <div>
          <img src={building} alt="Building Icon" />
          <p>{university}</p>
        </div>
        <div>
          <img src={calendar} alt="Calendar Icon" />
          {`${startDate} ${startYear} - ${endDate} ${endYear}`}
        </div>
      </div>
      <Skills>
        <ul>
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </Skills>
      <div className="divider"></div>
    </MyEducation>
  );
}
