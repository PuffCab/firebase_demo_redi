import { Link, useNavigate } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <h3>...ups..nothing to see here</h3>

      <Link to="/">go back to home</Link>
    </>
  );
}

export default ErrorPage;
