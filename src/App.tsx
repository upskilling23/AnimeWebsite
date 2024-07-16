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
import { WatchList } from "./pages/WatchList";
import { Provider } from "react-redux";
import { appStore, persistor } from "./utils/appStore";
import { StrictMode } from "react";
import { SurveyWelcome } from "./pages/SurveyWelcome";
import { PersistGate } from "redux-persist/integration/react";
import { SignUpPage } from "./pages/SignUp";

export const Applayout = () => {
  return (
    <Provider store={appStore} children={undefined}>
      <PersistGate persistor={persistor}>
        <div id="app-comp">
          <Outlet></Outlet>
        </div>
      </PersistGate>
    </Provider>
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
            <StrictMode>
              <Header statusOption={"loggedIn"}></Header>
              <Survey></Survey>
            </StrictMode>
          </>
        ),
      },
      {
        path: "/sign-up",
        element: <SignUpPage></SignUpPage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/survey-welcome",
        element: <SurveyWelcome></SurveyWelcome>,
      },
      {
        path: "/watch-list",
        element: (
          <>
            <Header statusOption={"loggedIn"}></Header>
            <WatchList></WatchList>
            <Footer></Footer>
          </>
        ),
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
