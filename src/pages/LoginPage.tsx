import React, { useState } from "react";
import { ImageUrl } from "../utils/constants";
import { ButtonComponent } from "../components/ButtonComponent";
import { InputBoxComponent } from "../components/InputBoxComponent";
import { Link } from "react-router-dom";
export const LoginPage = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className="">
      <img
        className="bg-fixed fixed w-full h-full opacity-[0.7]"
        src={ImageUrl.BgImageLogin}
      ></img>
      <div className="">
        <div className="absolute align-middle right-[1150px] bottom-[900px]">
          <div className="">
            <h1 className="text-6xl  text-black pb-[50px] pt-[30px]">
              UserName
            </h1>
            <InputBoxComponent
              stateValue={setName}
              passedText={name}
              placeholderText="Enter your username"
              styleValue="border w-[800px] h-[100px] border-black rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  xl:text-5xl xl:leading-10"
            />
            <h1 className="text-6xl  text-black pb-[50px] pt-[30px]">
              Password
            </h1>

            <InputBoxComponent
              stateValue={setPass}
              passedText={pass}
              placeholderText="Enter your password"
              styleValue="block w-[800px] h-[100px]  border-black rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  xl:text-5xl xl:leading-10"
            />
            <div className="pl-[180px] pt-[100px]">
              <Link to="/home">
                <ButtonComponent
                  event={name + pass}
                  content={"Submit"}
                  styleValue={
                    "px-3 my-10 mx-6 bg-gray-400 h-[90px] text-7xl font-bold"
                  }
                ></ButtonComponent>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className ='w-6/12'>
        <img className='justify-end w-[125%] h-[100%]'src={ImageUrl.LoginImage}></img>
      </div> */}
    </div>
  );
};
