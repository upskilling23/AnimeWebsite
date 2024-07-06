import React from "react";
import { NavBar } from "../components/NavBar";
export interface loggedin {
  statusOption: string;
}
export const Header = (status: loggedin) => {
  return <NavBar statusOption={status.statusOption}></NavBar>;
};
