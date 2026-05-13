import { Link } from "react-router-dom";

export default function AgeDeclarationBirthCertificate() {
  return (
    <section className="page-content">
      <h1>Age Declaration / Birth Certificate</h1>
      <p>
        Upload your age declaration or birth certificate document here.
      </p>
      <Link className="secondary-btn" to="/">
        Back to Home
      </Link>
    </section>
  );
}
