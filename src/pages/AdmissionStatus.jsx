import { Link } from "react-router-dom";

export default function AdmissionStatus() {
  return (
    <section className="page-content">
      <h1>Admission Status</h1>
      <p>
        Check the status of your admission application on this page.
      </p>
      <Link className="secondary-btn" to="/">
        Back to Home
      </Link>
    </section>
  );
}
