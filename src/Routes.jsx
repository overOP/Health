import { createBrowserRouter } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ProfilePage from "./Pages/ProfilePage";
import Ai from "./Pages/Ai";
import Blogs from "./Pages/Blogs";
import Readmore from "./Pages/Readmore";
import Quiz from "./Pages/Quiz";
import ResultPage from "./Pages/ResultPage";
import { Therapists } from "./Pages/Therapists";
import Createablog from "./Pages/Createablog";
import Userview from "./Pages/Userview";
import UserProfile from "./Pages/UserProfile";

export const router = createBrowserRouter([
    {
       path: "/",
       element: <MainLayout/>,
       children: [
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/signup",
            element: <Signup/>
        },
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/profilepage/:id",
            element: <ProfilePage />
        },
        {
            path: "/ai",
            element: <Ai/>
        },
        {
            path: "/blogs",
            element: <Blogs/>
        },
        {
            path: "/createablog",
            element: <Createablog/>
        },
        {
            path: "/readmore/:id",
            element: <Readmore/>
        },
        {
            path: "/quiz",
            element: <Quiz/>
        },
        {
            path: "/resultpage",
            element: <ResultPage/>
        },
        {
            path: "/therapists",
            element: <Therapists/>
        },
        {
            path: "/userview/:id",
            element: <Userview/>
        },
        {
            path: "/userprofile/:id",
            element: <UserProfile />
        }
       ] 
    }
])