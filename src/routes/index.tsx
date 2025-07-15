import Login from "@/app/auth/login";
import Register from "@/app/auth/register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { element: <Login />, path: "/" },
  { element: <Register />, path: "/cadastro" },
]);
export default router;
