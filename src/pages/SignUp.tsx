import React, { useState } from "react";
import { ImageUrl } from "../utils/constants";
import { ButtonComponent } from "../components/ButtonComponent";
import { InputBoxComponent } from "../components/InputBoxComponent";
import { Link } from "react-router-dom";

interface InputBoxInterface {
  state?: any;
  passingText?: string;
  placeHolder?: string;
  DisplayValue?: string;
}

export const SignUpPage = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  const inputField: InputBoxInterface[] = [
    {
      state: setName,
      passingText: name,
      placeHolder: "Enter your username",
      DisplayValue: "Username",
    },
    {
      state: setPass,
      passingText: pass,
      placeHolder: "Enter your password",
      DisplayValue: "Password",
    },
    {
      state: setCountry,
      passingText: country,
      placeHolder: "Enter your country name",
      DisplayValue: "Country",
    },
    {
      state: setPhone,
      passingText: phone,
      placeHolder: "Enter your phone number",
      DisplayValue: "Phone",
    },
  ];
  return (
    <div className="relative w-full h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src={ImageUrl.SignUpScreen}
        alt="Background Image"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg max-w-md w-full mx-4">
          {inputField.map((inputValue, index) => {
            return (
              <div key={index}>
                <h1 className="text-2xl text-black pb-4 pt-8">
                  {inputValue.DisplayValue}
                </h1>
                <InputBoxComponent
                  stateValue={inputValue.state}
                  passedText={inputValue.passingText ?? ""}
                  placeholderText={inputValue.placeHolder ?? ""}
                  styleValue="border w-full h-12 border-black rounded-md px-4 py-1.5 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xl:text-xl"
                />
              </div>
            );
          })}

          <div className="flex justify-center pt-8">
            <Link to="/survey-welcome">
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
