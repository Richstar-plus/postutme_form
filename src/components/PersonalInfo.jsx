import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { FormInput } from "./FormInput";
export function PersonalInfo() {
  return (
    <section className="card">
      <div className="form-container">
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
          <FormInput title="Gender" select="gender" />
          <FormInput
            title="JAMB Score"
            placeholder="Enter your JAMB Score"
            type="number"
            inputType="input"
          />
          <FormInput
            title="First Choice Institution (As on JAMB Slip)"
            placeholder="University"
            type="text"
            select="institution"
          />
          <FormInput
            title="First Choice Course of Study (As on JAMB Slip)"
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
          <FormInput
            title="Email Address"
            placeholder="Enter your Email Address"
            type="email"
            inputType="input"
          />
          <FormInput
            title="Phone Number"
            placeholder="Enter your Phone Number"
            type="number"
            inputType="input"
          />
          <FormInput
            title="Are you using two O'level Results?"
            select="sitting"
          />
          <FormInput
            title="O'Level"
            placeholder="Enter your Qualification"
            type="text"
            select="olevel"
          />
          <FormInput
            title="State of Origin"
            placeholder="Enter your State of Origin"
            type="text"
          />
          <FormInput title="L.G.A" placeholder="Enter your L.G.A" type="text" />
          <FormInput
            title="House Address"
            placeholder="Enter your House Address"
            type="text"
            inputType="input"
          />
          <FormInput title="Marital Status" />
          <FormInput
            title="Place of Birth"
            placeholder="Enter your Place of Birth"
            type="text"
            inputType="input"
          />
        </div>
      </div>
    </section>
  );
}
