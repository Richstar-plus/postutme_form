import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
export function Caution() {
  return (
    <section className="card">
      <div className="caution">
        <h3>
          <FontAwesomeIcon icon={faCircleExclamation} /> Important Notice
        </h3>
        <ul>
          <li>Ensure your name matches JAMB records exactly.</li>
          <li>Minimun UTME Score of 150 is required for University.</li>
          <li>O'level result must be in picture format.</li>
          <li>If you await your O'level Result please indicate.</li>
          <li>If you are combining two (2) O'level Results, make sure you select two sitting.</li>
        </ul>
      </div>
    </section>
  );
}
