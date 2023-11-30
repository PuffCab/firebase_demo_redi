import { useContext } from "react";
import { app } from "../config/firebaseConfig";
import { AuthContext } from "../context/AuthContext";

function Home() {
  // Subscribe Home to the context
  const { user } = useContext(AuthContext);

  console.log(app);
  return (
    <>
      <h1>Welcome {user ? user.email : "misterious user"}to my App</h1>
    </>
  );
}

export default Home;
