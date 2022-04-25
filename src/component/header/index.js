import React from "react";
//  logo is a company name
import logo from "../images/innoloftLogo.svg";
import { useSelector } from "react-redux";

export default function Header() {
  const configuration = useSelector((state) => state?.reducer?.configuration);

  return (
    <>
      <div
        style={{
          background: `${configuration?.mainColor && configuration?.mainColor}`,
        }}
        className={`${!configuration?.mainColor && "bg-blue-900"} h-20 flex`}
      >
        <div className="flex items-center gap-7 ml-6">
          <img
            className="w-52 h-14"
            src={configuration?.logo ? configuration?.logo : logo}
            alt="Logo"
          />
        </div>
      </div>
    </>
  );
}
