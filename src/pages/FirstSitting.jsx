import { Caution } from "../components/Caution";
import { FormButton } from "../components/FormButton";
import { FormInput } from "../components/FormInput";
import { FormProgress } from "../components/FormProgress";

export function FirstSitting() {
  return (
    <>
      <section className="card">
        <p className="card-title">Naija Campus Hub</p>
      </section>
      <FormProgress currentStep={2} />
      <section className="card">
        <h1 className="result-heading">O'Level Details</h1>
        <Caution>
          <ul>
            <li>O'level result must be in picture format.</li>
            <li>If you await your O'level Result please indicate.</li>
            <li>
              If you are combining two (2) O'level Results, make sure you upload
              the two results.
            </li>
          </ul>
        </Caution>
        <div className="result">
          <form action="">
            <div className="form-actions">
              <FormInput title="WAEC (First Sitting)" type="file" />
              <FormInput title="NECO (Second Sitting)" type="file" />
            </div>
            <FormButton title="Previous Page" action="previous" />
            <FormButton title="Next: Payment Page" />
          </form>
        </div>
      </section>
    </>
  );
}
