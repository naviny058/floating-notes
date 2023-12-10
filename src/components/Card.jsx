import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}){
    return (
        
        <motion.div drag dragConstraints={reference} className="relative m-6 overflow-hidden w-60 text-white h-72 rounded-[45px] px-8 py-10 bg-zinc-900/90 p-5">
        <FaRegFileAlt />
         <p className="text-sm mt-5 font-semibold">{data.desc}</p>
         <div className="footer absolute bottom-0 w-full left-0">
            <div className="flex px-8 justify-between items-center mb-5">
                <h5>{data.filesize}</h5>
                <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center ">
                    {data.close ? <IoClose />:   <LuDownload size='.7em' color="#fff" />}
                </span>
            </div>
            {data.tag.isOpen && (
            <div className={`tag w-full py-4 bg-green-600 flex items-center justify-center`}>
                <h3 className="text-sm font-semibold">Download Now</h3>
            </div>
                )}
         </div>
        </motion.div>
    )
}
export default Card