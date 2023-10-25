import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { RootLayout, AuthLayout } from "./layouts";
import HomePage from "@pages/Home";
import { Login, Register, ForgetPass, ResetPass } from "@pages/auth";
import { Course, Courses } from "@pages/courses";
import { Article, Articles } from "@pages/articles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "courses", element: <Courses /> },
      { path: "courses/:courseId", element: <Course /> },
      { path: "articles", element: <Articles /> },
      { path: "articles/:articleId", element: <Article /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forget-pass", element: <ForgetPass /> },
      { path: "rest-password", element: <ResetPass /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
