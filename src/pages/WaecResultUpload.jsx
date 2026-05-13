import { Link } from "react-router-dom";

export default function WaecResultUpload() {
  return (
    <section className="page-content">
      <h1>WAEC Result Upload</h1>
      <p>
        Upload your WAEC result here so it can be processed as part of your
        Post-UTME application.
      </p>
      <Link className="secondary-btn" to="/">
        Back to Home
      </Link>
    </section>
  );
}
