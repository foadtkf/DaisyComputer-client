import React from "react";
import { Rotate } from "react-reveal";
import "./BusinessSummary.css";
import { BiUserCircle } from "react-icons/bi";
import { FcCurrencyExchange, FcRegisteredTrademark } from "react-icons/fc";
import { FaTools } from "react-icons/fa";

const BusinessSummary = () => {
  return (
    <section className="bg-white text-black">
      <h2 className="text-center text-6xl font-bold">Summary</h2>

      <Rotate right>
        {" "}
        <div className="grid lg:grid-cols-4 grid-cols-1">
          <div className=" hover:shadow-lg hover:shadow-red-600 lg:p-5">
            <h2 className="number">100k+</h2>
            <span style={{ fontSize: "60px", color: "rgb(68, 11, 173)" }}>
              <BiUserCircle className="mx-auto"></BiUserCircle>{" "}
            </span>
            <span className="font-bold" style={{ fontSize: "30px" }}>
              Customer
            </span>
          </div>
          <div className=" hover:shadow-lg hover:shadow-red-600 lg:p-5">
            <h2 className="number">120M+</h2>
            <span style={{ fontSize: "60px", color: "rgb(68, 11, 173)" }}>
              <FcCurrencyExchange  className="mx-auto"></FcCurrencyExchange>
            </span>
            <span className="font-bold" style={{ fontSize: "30px" }}>
              Annual Revenue
            </span>
          </div>
          <div className=" hover:shadow-lg hover:shadow-red-600 lg:p-5">
            <h2 className="number">33k+</h2>
            <span style={{ fontSize: "60px", color: "rgb(68, 11, 173)" }}>
              <FcRegisteredTrademark  className="mx-auto"></FcRegisteredTrademark>
            </span>
            <span className="font-bold" style={{ fontSize: "30px" }}>
              Review
            </span>
          </div>
          <div className=" hover:shadow-lg hover:shadow-red-600 lg:p-5">
            <h2 className="number">50+</h2>
            <span style={{ fontSize: "60px", color: "rgb(68, 11, 173)" }}>
              <FaTools  className="mx-auto"></FaTools>
            </span>
            <span className="font-bold" style={{ fontSize: "30px" }}>
              Tools
            </span>
          </div>
        </div>
      </Rotate>
    </section>
  );
};

export default BusinessSummary;
