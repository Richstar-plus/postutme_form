import { Link } from "react-router-dom";

export default function PostUtmeRegistration() {
  return (
    <section className="page-content">
      <h1>Post UTME Registration</h1>
      <p>
        This page contains information and the registration form for the
        Post-UTME application process.
      </p>
      <Link className="secondary-btn" to="/">
        Back to Home
      </Link>
    </section>
  );
}
