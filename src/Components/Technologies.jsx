import React from 'react';
import { FaReact, FaNodeJs ,} from 'react-icons/fa';
import {SiMongodb } from 'react-icons/si'
import { TbBrandJavascript } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { animate, motion } from "motion/react"


function Technologies(props) {

    const iconVariants = (duration) =>({

        initial:{y:-10},
        animate:{
            y:[10 ,-10],
            transition:{
                duration:duration,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse"
            }
        }
    })


    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2
            whileInView={{opacity:1 ,y:0}}
             initial={{opacity:0 ,y:-100}}
             transition={{duration:1.5}}
            className='my-20 text-center text-4xl'>
                Technologies
            </motion.h2>
            <motion.div
            whileInView={{opacity:1 , x:0}}
            initial={{opacity:0 ,x:-100}}
            transition={{duration:1.5}}
             className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                 className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaReact className='text-7xl text-cyan-400'/>
                </motion.div>
                <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                 className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiSocketdotio className='text-7xl text-gray-400'/>
                </motion.div>
                <motion.div
               variants={iconVariants(5)}
               initial="initial"
               animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-7xl text-green-500'/>
                </motion.div>
                <motion.div
                 variants={iconVariants(2)}
                 initial="initial"
                 animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbBrandJavascript className='text-7xl text-yellow-400'/>
                </motion.div>
                <motion.div
                variants={iconVariants(6)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-7xl text-green-500'/>
                </motion.div>
                <motion.div
                 variants={iconVariants(2.5)}
                 initial="initial"
                 animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTypescript className='text-7xl text-sky-400'/>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Technologies;