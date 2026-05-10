import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { FormInput } from "./FormInput";
export function PersonalInfo() {
  return (
    <section className="card">
      <div className="form-container">
        <form action="">
          <h3>
            {" "}
            <FontAwesomeIcon icon={faPerson} /> Personal & Academic Info
          </h3>
          <div className="form-actions">
            <FormInput
              title="Full Name (As on JAMB Slip)"
              placeholder="Enter your name as on JAMB Slip"
              type="text"
              inputType="input"
            />
            <FormInput
              title="JAMB Score"
              placeholder="Enter your JAMB Score"
              type="number"
              inputType="input"
            />
            <FormInput
              title="First Choice Institution"
              placeholder="University"
              type="text"
            />
            <FormInput
              title="First Choice Course (As on JAMB Slip)"
              placeholder="Enter your Course of study on Jamb slip"
              type="text"
              inputType="input"
            />
            <FormInput
              title="NIN Number"
              placeholder="Enter your NIN number"
              type="text"
              inputType="input"
            />
            <FormInput title="Date of birth" type="date" inputType="dob" />
          </div>
        </form>
      </div>
    </section>
  );
}
