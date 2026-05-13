import { Caution } from "../components/Caution";
import { FormButton } from "../components/FormButton";
import { FormInput } from "../components/FormInput";

export function WaecResultUpload() {
  return (
    <>
      <section className="card">
        <p className="card-title">Naija Campus Hub</p>
      </section>
      <section className="card">
        <h1 className="result-heading">O'Level Result Upload</h1>
        <Caution>
          <ul>
            <li>O'level result must be in picture format.</li>
            <li>If you await your O'level Result please indicate.</li>
            <li>
              If you are combining two (2) O'level Results, make sure you upload
              the two results.
            </li>
            <li>
              After upload, make payment and you will be contacted within an hour
            </li>
          </ul>
        </Caution>
        <div className="result">
          <form action="">
            <div className="form-actions">
              <FormInput
                title="JAMB Registration Number"
                inputType="input"
                placeholder="Enter you Jamb Registration Number"
              />
              <FormInput title='Full Name' inputType='input' placeholder='Enter your full name' />
              <FormInput title='Email Address' inputType='input' placeholder='Enter a working email address' />
              <FormInput title='Phone Number' inputType='input' placeholder='Enter your phone number or whatsApp' />
              <FormInput title='How many sitting?' />
              <FormInput title="WAEC (First Sitting)" type="file" />
              <FormInput title="NECO (Second Sitting)" type="file" />
            </div>
            <FormButton title="Next: Payment Page" type="submit" />
          </form>
        </div>
      </section>
    </>
  );
}
