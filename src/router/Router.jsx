import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import EventDetails from "../pages/EventDetails/EventDetails";
import Register from "../pages/Register/Register";
import MyReviews from "../pages/Review/MyReviews";
import Profile from "../pages/Profile/Profile";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import ProtectedRoute from "./ProtectedRoute";
import LoadingSpinner from "../components/LoadingSpinner";
import Tos from "../pages/Tos/Tos";
import Privacy from "../pages/Privacy-Policy/Privacy";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <LoadingSpinner />,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "forget-password",
        Component: ForgetPassword,
      },
      {
        path: "tos",
        Component: Tos,
      },
      {
        path: "privacy-policy",
        Component: Privacy,
      },
      {
        path: "my-reviews",
        loader: () => fetch("/myreviews.json"),
        hydrateFallbackElement: <LoadingSpinner />,
        element: (
          <ProtectedRoute>
            <MyReviews />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "events/:id",
        hydrateFallbackElement: <LoadingSpinner />,
        loader: () => fetch("/data.json"),
        element: (
          <ProtectedRoute>
            <EventDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);
