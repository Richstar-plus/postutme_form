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
        </ul>
      </div>
    </section>
  );
}
