"use client";

import { motion } from "framer-motion"
import Image from "next/image";
const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="w-[298px] h-[298px] xl:w-[398px] xl:h-[498px]">
        {/* <img
      src="/assets/
      photo.png"  // Path to the image in the public folder
      alt="Programming Image"
      style={{ width: '600px', height: '400px' }}  // Set dimensions
    /> */}


        </div>
      </motion.div>
    </div>
  )
}

export default Photo