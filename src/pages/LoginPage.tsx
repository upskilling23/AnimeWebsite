import React, { useState } from "react";
import { ImageUrl } from "../utils/constants";
import { ButtonComponent } from "../components/ButtonComponent";
import { InputBoxComponent } from "../components/InputBoxComponent";
import { Link } from "react-router-dom";
export const LoginPage = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className="relative w-full h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src={ImageUrl.BgImageLogin}
        alt="Background Image"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg max-w-md w-full mx-4">
          <h1 className="text-2xl text-black pb-4 pt-2">Username</h1>
          <InputBoxComponent
            stateValue={setName}
            passedText={name}
            placeholderText="Enter your username"
            styleValue="border w-full h-12 border-black rounded-md px-4 py-1.5 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xl:text-xl"
          />
          <h1 className="text-2xl text-black pb-4 pt-8">Password</h1>
          <InputBoxComponent
            stateValue={setPass}
            passedText={pass}
            placeholderText="Enter your password"
            styleValue="border w-full h-12 border-black rounded-md px-4 py-1.5 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xl:text-xl"
          />
          <div className="flex justify-center pt-8">
            <Link to="/home">
              <ButtonComponent
                event={name + pass}
                content="Submit"
                styleValue="px-6 py-3 bg-gray-400 h-12 text-xl font-bold rounded-md"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
