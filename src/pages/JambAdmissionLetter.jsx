import { Link } from "react-router-dom";

export default function JambAdmissionLetter() {
  return (
    <section className="page-content">
      <h1>JAMB Admission Letter</h1>
      <p>
        Access and download your JAMB admission letter from this page.
      </p>
      <Link className="secondary-btn" to="/">
        Back to Home
      </Link>
    </section>
  );
}
