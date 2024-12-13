import React from 'react';
import { HERO_CONTENT } from '../utils/Data';
import profilepic from '../assets/KevinRushProfile.png'
import { TbBrandLeetcode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "motion/react"

const container = (delay) =>({
    hidden: {x : -100 , opacity: 0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5, delay:delay},
    }
})

function Hero(props) {
    return (
      <div id="home" className="border-b border-neutral-800 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-light lg:mt-16 lg:text-6xl"
              >
                I'M Aswin krishna{" "}
              </motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
              >
                {" "}
                Full Stack Developer
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-normal text-2xl "
              >
                {HERO_CONTENT}
              </motion.p>
              <span className="flex gap-4 my-2 py-6 text-4xl">
                <a
                  href="https://github.com/aswinkrishna-p"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/aswin-krishna-342368278/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="fill-cyan-500" />
                </a>
                <a
                  href="https://leetcode.com/u/ASWIN_KRISHNA_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbBrandLeetcode />
                </a>
                <a
                  href="https://leetcode.com/u/ASWIN_KRISHNA_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className='bg-gradient-to-tr from-orange-400 via-red-500  to-pink-600 rounded-lg' />
                </a>
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-7">
            <div className="flex justify-center">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                src={profilepic}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero;