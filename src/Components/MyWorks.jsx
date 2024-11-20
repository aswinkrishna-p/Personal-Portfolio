import React from "react";
import mywork_data from "../assets/mywork_data";

function MyWorks() {
  return (
    <div id="work" className="flex flex-col w-full items-center justify-center gap-7 border-b border-neutral-800 pb-24">
      <h2 className="text-4xl my-14">My Latest Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {mywork_data.map((data, index) => (
          <div key={index} className="bg-white p-4 rounded-lg cursor-pointer hover:scale-105 transition-transform ">
            <img src={data.w_img} alt='' className="w-full h-48 object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWorks;
