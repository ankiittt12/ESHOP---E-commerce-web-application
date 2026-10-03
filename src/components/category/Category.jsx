import React from "react";
import Button from "./Button";

import Image1 from "../../assets/earphone.png";
import Image2 from "../../assets/watch.png";
import Image3 from "../../assets/macbook.png";


function Category() {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first cols */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 
          text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl font-bold opacity-20 mb-2">Earphone</p>
                <Button
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </div>
            </div>
            <img src={Image1} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* second cols */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandyellow to-brandyellow/90 
          text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl font-bold opacity-40 mb-2">Watch</p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandyellow"
                />
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[320px] absolute -right-4 lg:top-[40px] sm:absolute top-0"
            />
          </div>
          {/* third cols */}
          <div
            className=" sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 
          text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl font-bold opacity-40 mb-2">Laptop</p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-primary"
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
        </div>
      </div>
    </div>
  );
}

export default Category;
