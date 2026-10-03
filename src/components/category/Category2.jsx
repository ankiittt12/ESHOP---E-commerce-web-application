import React from "react";
import Button from "./Button";

import Image1 from "../../assets/vr.png";
import Image2 from "../../assets/speaker.png";
import Image3 from "../../assets/gaming.png";

function Category2() {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first cols */}
          <div
            className=" md:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-300/90 to-gray-100 
          text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl font-bold opacity-40 mb-2">Console</p>
                <Button
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[250px] absolute top-15 -translate-y-1/
            2 -right-0"
            />
          </div>
          {/* second cols */}
          <div
            className="col-span-1 py-10 pl-5 bg-gradient-to-br from-brandgreen to-brandgreen
          text-white rounded-3xl relative h-[320px] flex items-start"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-600">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl font-bold opacity-20 mb-2">Oculus</p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandgreen"
                />
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[200px] absolute right-0 bottom-0"
            />
          </div>
          {/* third cols */}
          <div
            className="col-span-1 py-10 pl-5 bg-gradient-to-br from-brandblue to-brandblue/90 
          text-white rounded-3xl relative h-[320px] flex items-start"
          >
            <div>
              <div className="relative mb-4">
                <p className="mb-[2px] text-gray-300">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl font-bold opacity-40 mb-2">Speakers</p>
                <div className="absolute top-27">
                  <Button
                    text="Browse"
                    bgColor="bg-white"
                    textColor="text-brandblue"
                  />
                </div>
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[200px] absolute bottom-0 right-2 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category2;
