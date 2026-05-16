import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import TimeLine from "../Pages/TimeLine";
import State from "../Pages/State";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: "/timeline",
                Component: TimeLine
            },
            {
                path: "/state",
                Component: State
            },
            {
                path: "/vercel",
                element: <div>check vercel deploy</div>
            }


        ],
        errorElement: <ErrorPage />
    },

]);