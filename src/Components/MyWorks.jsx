import React from "react";
import mywork_data from "../assets/mywork_data";
import { motion } from "motion/react"


function MyWorks() {
  return (
    <div id="work" className="flex flex-col w-full items-center justify-center gap-7 border-b border-neutral-800 pb-24">
      <motion.h2 
       whileInView={{opacity:1 ,y:0}}
       initial={{opacity:0 ,y:-100}}
       transition={{duration:1.5}}
      className="text-4xl my-14">My Latest Works
      </motion.h2>
      <motion.div
       whileInView={{opacity:1 ,y:0}}
       initial={{opacity:0 ,y:-100}}
       transition={{duration:1.5}} 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {mywork_data.map((data, index) => (
          <div key={index} className="bg-white p-3 rounded-lg cursor-pointer hover:scale-105 transition-transform ">
            <img src={data.w_img} alt='' className="w-72 h-48 object-fill rounded-lg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default MyWorks;
