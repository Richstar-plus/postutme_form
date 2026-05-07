import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Hero } from "../components/Hero";

function HomePage() {
  return (
    <>
      <section className="card">
        <p className="card-title">Naija Campus Hub</p>
        <h2 className="card-heading">
          Secure Your Academic Future with Naija Campus Hub - Your Ultimate
          Post-UTME/Screening Companion!
        </h2>
      </section>
      <section className="card">
        <p className="card-description">
          Applications are now open for the 2025/2026 Academic session! Don't
          miss out on this opportunity to secure your spot in your dream
          university.
        </p>
      </section>
      <section className="card">
        <div className="main-button">
          <Button title="Start Application" className="primary-btn">
            <FontAwesomeIcon icon={faArrowRight} className="button-icon" />
          </Button>
          <Button title="Check Status" className="secondary-btn" />
        </div>
      </section>
      <section className="card">
        <Hero />
      </section>
    </>
  );
}

export default HomePage;
