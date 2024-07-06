import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./pages/Header";
import { CenterSection } from "./pages/CenterSection";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { Home } from "./pages/HomePage";

export const Applayout = () => {
  return (
    <div id="app-comp">
      <Outlet></Outlet>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout></Applayout>,
    children: [
      {
        path: "/",
        element: (
          <>
            <Header statusOption={"logged"}></Header>
            <CenterSection></CenterSection>
          </>
        ),
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/home",
        element: (
          <>
            <Header statusOption={"loggedIn"}></Header>
            <Home></Home>
          </>
        ),
      },
    ],
  },
]);
const b = ReactDOM.createRoot(document.getElementById("header"));
b.render(<RouterProvider router={appRouter}></RouterProvider>);
