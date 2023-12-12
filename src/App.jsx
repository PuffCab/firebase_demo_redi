import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/Errorpage";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import MyNavbar from "./components/MyNavbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Characters from "./pages/Characters";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="characters" element={<Characters />} />

        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );

  return (
    <>
      <h1>Demo Firebase</h1>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}

const Root = () => {
  return (
    <>
      <MyNavbar />
      <Outlet />
    </>
  );
};

export default App;
