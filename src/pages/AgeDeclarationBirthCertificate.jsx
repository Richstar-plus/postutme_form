import { Caution } from "../components/Caution";
import { FormButton } from "../components/FormButton";
import { FormInput } from "../components/FormInput";

export function AgeDeclarationBirthCertificate() {
  return (
    <>
      <section className="card">
        <p className="card-title">Naija Campus Hub</p>
      </section>
      <section className="card">
        <h1 className="result-heading">Age Declaration/Birth Certificate.</h1>
        <Caution>
          <ul>
            <li>Fill all your details correctly.</li>
            <li>
              Make sure you check the date of birth very well before submitting.
            </li>
            <li>
              If you are using either of your parents, the information
              is correct and belongs to them.
            </li>
            <li>
              After you fill your details, Make payment and you will be
              contacted within an hour.
            </li>
          </ul>
        </Caution>
        <div className="result">
          <form action="">
            <div className="form-actions">
              <FormInput title="Which of your parents information do you want to provide?" />
              <FormInput
                title="Mother/Father First Name"
                inputType="input"
                placeholder="Enter your mother or father's First name"
              />
              <FormInput
                title="Mother/Father Middle Name"
                inputType="input"
                placeholder="Enter your mother or father's middle name"
              />
              <FormInput
                title="Mother/Father Last Name"
                inputType="input"
                placeholder="Enter your mother or father's Last name"
              />
              <FormInput title="Religion" />
              <FormInput
                title="Mother/Father occupation"
                inputType="input"
                placeholder="Enter your mother or father's occupation"
              />
              <FormInput
                title="House Address"
                inputType="input"
                placeholder="eg. #No. 23 GRA Street"
              />

              <FormInput
                title="City"
                inputType="input"
                placeholder="eg. Port Harcourt"
              />
              <FormInput title="State of Origin" />
              <FormInput title="LGA" />
              <FormInput
                title="Mother/Father passport Photograph"
                type="file"
              />

              <FormInput
                title="Full Name"
                inputType="input"
                placeholder="Enter your full name"
              />
              <FormInput
                title="Place of Birth"
                inputType="input"
                placeholder="eg. Port Harcourt"
              />
              <FormInput title="Date of Birth" inputType="dob" />
              <FormInput
                title="State of Birth"
                placeholder="Enter your state of birth"
              />
              <FormInput
                title="LGA of birth"
                placeholder="Enter your LGA of birth"
              />
              <FormInput title="Gender" />
              <FormInput title="Your passport Photograph" type="file" />
            </div>
            <FormButton title="Next: Payment Page" type="submit" />
          </form>
        </div>
      </section>
    </>
  );
}
