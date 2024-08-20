import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./pages/Header";
import { CenterSection } from "./pages/CenterSection";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useParams,
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { Home } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import { HomeCenterSection } from "./components/HomeCenterSection";
import { Survey } from "./pages/Survey";
import { WatchList } from "./pages/WatchList";
import { Provider } from "react-redux";
import { appStore, persistor } from "./utils/appStore";
import { SurveyWelcome } from "./pages/SurveyWelcome";
import { PersistGate } from "redux-persist/integration/react";
import { CardInfo } from "./pages/CardInfo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Applayout = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={appStore} children={undefined}>
        <PersistGate persistor={persistor}>
          <div id="app-comp">
            <Outlet></Outlet>
          </div>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
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
            <CenterSection></CenterSection>
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
        path: "/home/:id",
        element: (
          <>
            <Header statusOption={"loggedIn"}></Header>
            <CardInfo></CardInfo>
            <Footer></Footer>
          </>
        ),
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
