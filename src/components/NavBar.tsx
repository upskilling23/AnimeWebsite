import React, { useState, useEffect } from "react";
import { ImageUrl } from "../utils/constants";
import { ButtonComponent } from "./ButtonComponent";
import { Link } from "react-router-dom";
import { loggedin } from "../pages/Header";

export const NavBar = (status: loggedin) => {
  const [statusValue, setStatusValue] = useState(false);
  useEffect(() => {
    if (status.statusOption === "loggedIn") {
      setStatusValue(true);
    } else {
      setStatusValue(false);
    }
  }, [status.statusOption]);
  return (
    <div className="static bg-orange-100 box-border border-spacing-1 border-y-4">
      <div className="comp flex justify-between">
        <div>
          <img className="w-36 h-36" src={ImageUrl.Logo}></img>
        </div>
        {statusValue ? (
          <h1
            className="text-8xl px-20 my-1
        ?"
          >
            Hi {""}
          </h1>
        ) : (
          <div className="py-9 my-auto">
            <Link to="/login">
              {" "}
              <ButtonComponent
                content={"Login"}
                styleValue={"px-3 mx-6 bg-gray-400 h-12 text-4xl font-bold"}
              ></ButtonComponent>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
