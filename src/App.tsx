import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./pages/Header";
import { CenterSection } from "./pages/CenterSection";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { Home } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import { HomeCenterSection } from "./components/HomeCenterSection";
import { Survey } from "./pages/Survey";

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
            <Footer></Footer>
          </>
        ),
      },
      {
        path: "/survey",
        element: (
          <>
            <Header statusOption={"loggedIn"}></Header>
            <Survey></Survey>
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
            <HomeCenterSection></HomeCenterSection>
            <Footer></Footer>
          </>
        ),
      },
    ],
  },
]);
const b = ReactDOM.createRoot(document.getElementById("header"));
b.render(<RouterProvider router={appRouter}></RouterProvider>);
