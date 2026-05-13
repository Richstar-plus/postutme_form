import { Link } from "react-router-dom";

export default function LocalGovernmentIdentificationLetter() {
  return (
    <section className="page-content">
      <h1>Local Government Identification Letter</h1>
      <p>
        Upload or review your local government identification letter information.
      </p>
      <Link className="secondary-btn" to="/">
        Back to Home
      </Link>
    </section>
  );
}
