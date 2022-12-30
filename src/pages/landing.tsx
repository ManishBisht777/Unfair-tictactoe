import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      landing
      <p>this is landing page</p>
      <Link to="/classroom">Enter ClassRomm</Link>
    </div>
  );
}

export default Landing;
