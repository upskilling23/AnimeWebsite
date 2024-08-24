import React, { useState } from "react";
import { ImageUrl, InputBoxInterface, Stylings } from "../utils/constants";
import { ButtonComponent } from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { validateContent } from "../utils/validateContent";

export const LoginPage = () => {
  // State for login form
  const [loginName, setLoginName] = useState("");
  const [loginPass, setLoginPass] = useState("");

  // State for registration form
  const [regName, setRegName] = useState("");
  const [regPass, setRegPass] = useState("");
  const [regFullName, setRegFullName] = useState("");
  const [regConfirmPass, setRegConfirmPass] = useState("");

  const [login, setLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loginInputFields: InputBoxInterface[] = [
    {
      state: setLoginName,
      passingText: loginName,
      placeHolder: "Enter your username",
      type: 'text',
      DisplayValue: "Username",
    },
    {
      state: setLoginPass,
      passingText: loginPass,
      placeHolder: "Enter your password",
      DisplayValue: "Password",
      type: 'password',
      isVisible: true,
    },
  ];

  const registerInputFields: InputBoxInterface[] = [
    {
      state: setRegFullName,
      passingText: regFullName,
      placeHolder: "Enter your Full Name",
      DisplayValue: "Full Name",
      type: 'text'
    },
    {
      state: setRegName,
      passingText: regName,
      placeHolder: "Enter your username",
      DisplayValue: "Username",
      type: 'text'
    },
    {
      state: setRegPass,
      passingText: regPass,
      type: 'password',
      placeHolder: "Enter your password",
      DisplayValue: "Password",
      isVisible: true,
    },
    {
      state: setRegConfirmPass,
      passingText: regConfirmPass,
      type: 'password',
      placeHolder: "Confirm your password",
      DisplayValue: "Re-enter your Password",
      isVisible: true,
    },
  ];

  const handleClick = () => {
    setLogin(!login);
    setError(null);  // Clear error message when switching forms
  };

  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (isLogin: boolean) => {
    const message = isLogin
      ? validateContent(login, loginName, loginPass)
      : validateContent(login, undefined,undefined,regName, regPass,regConfirmPass, regFullName);

    if (message) {
      setError(message);
    } else {
      setError(null);
      // Proceed with the login or registration process here
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
          {(login ? loginInputFields : registerInputFields).map((inputValue, index) => (
            <div key={index} className="pt-[3%]">
              <label
                htmlFor={`${inputValue.DisplayValue}`}
                className={`${Stylings.TextWidth} text-black pb-1 lg:pb-4`}
              >
                {inputValue.DisplayValue}
              </label>
              <input
                placeholder={inputValue.placeHolder ?? ""}
                value={inputValue.passingText}
                type={inputValue.isVisible && showPassword ? "text" : inputValue.type}
                onChange={(e) => inputValue.state(e.target.value)}
                className={`border w-full  ${Stylings.StyleInputBox} border-black rounded-md px-4 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xl:text-xl mt-[3%]`}
              />
              {inputValue.isVisible && (
                <span
                  onClick={handleShow}
                  className='cursor-pointer text-xl flex justify-end font-bold'
                >
                  {showPassword ? 'Hide' : 'Show'}
                </span>
              )}
            </div>
          ))}

          {error && <span className='text-xl text-red-600 bg-yellow-300 font-extrabold text-wrap '>{error}</span>}
          
          <div className="flex justify-center pt-8">
            <button
              onClick={() => handleLogin(login)}
              className={`w-4/12 bg-gray-400 ${Stylings.StyleInputBox} ${Stylings.TextWidth} font-bold rounded-md`}
            >
              {login ? 'Login' : 'Register'}
            </button>
          </div>
          <div className="pt-[1%]">
            <h1 className={`${Stylings.TextWidth} text-black pb-4 pt-8`}>
              <span className={`${Stylings.TextWidth}`}>
                {login ? "Not a member? " : "Already a member? "}
              </span>
              <button
                onClick={handleClick}
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
