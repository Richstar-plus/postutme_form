import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="card">
      <h2>Home</h2>
      <p>
        Welcome to your PostUtme starter app with React Router and FontAwesome.
      </p>
      <Link to="/about">
        <button type="button">Go to About</button>
      </Link>
    </section>
  );
}

export default Home;
