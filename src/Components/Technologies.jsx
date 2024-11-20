import React from 'react';
import { FaReact, FaNodeJs ,} from 'react-icons/fa';
import {SiMongodb } from 'react-icons/si'
import { TbBrandJavascript } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";

function Technologies(props) {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h2 className='my-20 text-center text-4xl'>
                Technologies
            </h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaReact className='text-7xl text-cyan-400'/>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiSocketdotio className='text-7xl text-gray-400'/>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-7xl text-green-500'/>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbBrandJavascript className='text-7xl text-yellow-400'/>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-7xl text-green-500'/>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTypescript className='text-7xl text-sky-400'/>
                </div>
            </div>
        </div>
    );
}

export default Technologies;