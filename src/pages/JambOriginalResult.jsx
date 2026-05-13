import { Link } from "react-router-dom";

export default function JambOriginalResult() {
  return (
    <section className="page-content">
      <h1>JAMB Original Result</h1>
      <p>Upload or verify your original JAMB result on this page.</p>
      <Link className="secondary-btn" to="/">
        Back to Home
      </Link>
    </section>
  );
}
