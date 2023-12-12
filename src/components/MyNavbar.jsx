import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function MyNavbar() {
  const { logout } = useContext(AuthContext);
  //   console.log("user :>> ", user);
  const user = true;
  const logoutUser = () => {
    logout();
  };
  return (
    <nav>
      <Link to="/" className="yellow">
        Home
      </Link>{" "}
      |
      <Link to="/characters" className="yellow">
        Characters
      </Link>{" "}
      | <Link to="register">Register</Link> | <Link to="login">Login</Link> |{" "}
      {user ? (
        <Button variant="danger" onClick={logoutUser}>
          Logout
        </Button>
      ) : (
        <Button variant="info">Login</Button>
      )}
    </nav>
  );
}

export default MyNavbar;
