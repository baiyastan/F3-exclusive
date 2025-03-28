import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import SignUp from "./pages/Register";
import LogIn from "./pages/Login";
import Menu from "./pages/Menu";

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "register",
                element: <SignUp/>
            },
            {
                path: "login",
                element: <LogIn/>
            },
            {
                path: "menu",
                element: <Menu/>
            }
        ]
    }
])