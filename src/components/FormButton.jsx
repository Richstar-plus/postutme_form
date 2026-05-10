import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function FormButton({title}) {
  return (
    <section className="card">
      <div className="form-button">
        <Button title={title} className="form-main-btn">
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>  
      </div>
    </section>
  );
}
