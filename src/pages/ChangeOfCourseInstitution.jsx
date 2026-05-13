import { Link } from "react-router-dom";

export default function ChangeOfCourseInstitution() {
  return (
    <section className="page-content">
      <h1>Change of Course/Institution</h1>
      <p>
        Submit your request for a change of course or institution here.
      </p>
      <Link className="secondary-btn" to="/">
        Back to Home
      </Link>
    </section>
  );
}
