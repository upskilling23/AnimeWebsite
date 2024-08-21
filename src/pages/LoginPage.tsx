import React, { useState } from "react";
import { ImageUrl, InputBoxInterface, Stylings } from "../utils/constants";
import { ButtonComponent } from "../components/ButtonComponent";
import { InputBoxComponent } from "../components/InputBoxComponent";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [fullName, setFullName] = useState("");
  const [login, setLogin] = useState();
  const navigate = useNavigate();

  const inputField: InputBoxInterface[] = [
    {
      state: setFullName,
      passingText: fullName,
      placeHolder: "Enter your Full Name",
      DisplayValue: "Full Name",
    },
    {
      state: setName,
      passingText: name,
      placeHolder: "Enter your username",
      DisplayValue: "Username",
      isLogin: true,
    },
    {
      state: setPass,
      passingText: pass,
      placeHolder: "Enter your password",
      DisplayValue: "Password",
      isLogin: true,
    },
    {
      state: setPass,
      passingText: pass,
      placeHolder: "Confirm your password",
      DisplayValue: "Re-enter your Password",
    },
  ];

  const [input, setInput] = useState(
    inputField.filter((value) => value.isLogin),
  );
  const handleClick = () => {
    if (!login) {
      setLogin(!login);
      setInput(inputField);
    } else {
      setInput(inputField.filter((value) => value.isLogin));
      setLogin(null);
    }
  };

  return (
    <section className="relative w-full h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src={ImageUrl.BgImageLogin}
        alt=""
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-20 p-10 rounded-lg shadow-lg max-w-md w-full mx-4">
          {input &&
            input.map((inputValue, index) => {
              return (
                <div key={index} className="pt-[3%]">
                  <label
                    htmlFor={`${inputValue.DisplayValue}`}
                    className={`${Stylings.TextWidth} text-black pb-1 lg:pb-4`}
                  >
                    {inputValue.DisplayValue}
                  </label>
                  <InputBoxComponent
                    id={inputValue.passingText}
                    stateValue={inputValue.state}
                    passedText={inputValue.passingText ?? ""}
                    placeholderText={inputValue.placeHolder ?? ""}
                    styleValue={`border w-full  ${Stylings.StyleInputBox} border-black rounded-md px-4 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xl:text-xl mt-[3%]`}
                  />
                </div>
              );
            })}

          <div className="flex justify-center pt-8">
            <ButtonComponent
              event={name + pass}
              content={login ? "Register" : "Login"}
              styleValue={`w-4/12 bg-gray-400 ${Stylings.StyleInputBox} ${Stylings.TextWidth} font-bold rounded-md`}
            />
          </div>
          <div className="pt-[1%]">
            <h1 className={`${Stylings.TextWidth} text-black pb-4 pt-8`}>
              <span className={`${Stylings.TextWidth}`}>
                {" "}
                {login ? "Not a member? " : "Already a member? "}
              </span>
              <button
                onClick={() => handleClick()}
                className={`cursor-pointer ${Stylings.TextWidth} text-black font-bold`}
              >
                {login ? "Click to Sign up" : "Click to Login"}
              </button>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
