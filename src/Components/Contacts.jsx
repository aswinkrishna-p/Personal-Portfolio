import React from 'react';
import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";

function Contacts(props) {
    const onSubmit = async (event) => {
       
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", import.meta.env.VITE_CONTACT_FORM);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };


    return (
        <div id='contact' className="flex flex-col items-center justify-center mt-10 mb-10 ">
            <div className="pb-4 mb-5">
                <h1 className="my-8 text-4xl">Get in touch</h1>
            </div>

            {/* Flexbox container for left and right sections */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full max-w-6xl">
                {/* Left Section */}
                <div className=" flex-1">
                    <h1 className="font-bold mb-4 bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-5xl text-transparent">Let's talk</h1>
                    <p className="mb-6 max-w-lg text-lg tracking-tight">
                        I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <MdEmail className="text-xl text-gray-700" />
                            <p>aswinkrishna@33715@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <PiPhoneCallFill className="text-xl text-gray-700" />
                            <p>+91 8848468835</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaLocationDot className="text-xl text-gray-700" />
                            <p>India, Kerala, Calicut</p>
                        </div>
                    </div>
                </div>

                {/* Right Section (Form) */}
                <form onSubmit={onSubmit} className=" flex-1 flex flex-col gap-4">
                    <label htmlFor="name" className="font-medium">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="p-2 border-none  bg-[#32323c] placeholder:text-slate-400 rounded"
                    />
                    <label htmlFor="email" className="font-medium">Your Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="p-2 border-none  bg-[#32323c] placeholder:text-slate-400 rounded"
                    />
                    <label htmlFor="message" className="font-medium">Write your message here</label>
                    <textarea
                        name="message"
                        rows="8"
                        placeholder="Enter your message"
                        className="p-2 rounded border-none  bg-[#32323c] placeholder:text-slate-400"
                    ></textarea>
                    <button
                        type="submit"
                        className="py-2 px-4 text-white rounded-2xl text-lg bg-gradient-to-r from-pink-300 to-purple-500 cursor-pointer transition-transform"
                    >
                        Submit now
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;












































// import React from 'react';
// import { MdEmail } from "react-icons/md";
// import { PiPhoneCallFill } from "react-icons/pi";
// import { FaLocationDot } from "react-icons/fa6";

// function Contacts(props) {
//     return (
//         <div className='flex flex-col items-center justify-center gap-20 mt-10 mb-20'>
//             <div className='pb-4'>
//                 <h2 className='my-8 text-4xl'>Get in touch</h2>
//             </div>
//             <div className='flex gap-60'>
//                 <div className='flex flex-col gap-7'>
//                     <h1 className='bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent'>Let's talk</h1>
//                     <p className='  max-w-lg text-lg tracking-tight'> I'm currently available to take on new projects , so feel free to send me a message about anything that you want me to work on . You can contact anytime.  </p>
//                     <div className='flex flex-col gap-7 text-lg'>
//                         <div className='flex items-center gap-4'>
//                             <MdEmail/> <p className='text-slate-400'>aswinkrishna@33715@gmail.com</p>
//                         </div>
//                         <div className='flex items-center gap-4'>
//                             <PiPhoneCallFill/> <p className='text-slate-400'>+91 8848468835</p>
//                         </div>
//                         <div className='flex items-center  gap-4'>
//                             <FaLocationDot/>  <p className='text-slate-400'> India , kerala , calicut </p>
//                         </div>
//                     </div>
//                 </div>
//                 <form  className='flex flex-col items-start gap-6'>
//                     <label className='text-xl' htmlFor=""> Your Name</label>
//                     <input className='border-none w-[650px] h-16 pl-5 rounded-md bg-[#32323c] text-lg placeholder:text-slate-400' type="text" placeholder='Enter your name'  name='name'/>
//                     <label className='text-xl' htmlFor=""> Your Email</label>
//                     <input className='border-none w-[650px] h-16 pl-5 rounded-md bg-[#32323c] text-lg placeholder:text-slate-400' type="email" placeholder='Enter your email' name='email' />
//                     <label className='text-xl' htmlFor=""> Write your message here</label>
//                     <textarea className='border-none w-[650px] p-6 bg-[#32323c] placeholder:text-slate-400' name="message" rows="8" placeholder='Enter your message'></textarea>
//                     <button className='border-none text-white rounded-2xl p-4 text-lg bg-gradient-to-r from-pink-300 to-purple-500 cursor-pointer transition-transform duration-500  hover:scale-105' type='submit'>Submit now</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Contacts;