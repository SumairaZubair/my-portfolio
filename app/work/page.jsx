// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { BsArrowUpRight, BsGithub } from "react-icons/bs";

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@radix-ui/react-tooltip";
// import Link from "next/link";
// import Image from "next/image";
// import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

// const projects = [
//   {
//     num: "01",
//     category: "frontend",
//     title: "project 1",
//     description:
//       "I created a TikTok clone  where users can scroll through videos like on them just like the TikTok app.",
//     stack: [{ name: "html 5" }, { name: "Css 3" }, { name: "Javascript" }],
//     image: "/assets/pic/c4.png",
//     live: "http://tiktok-lite.vercel.app/",
//     github: "",
//   },
//   {
//     num: "02",
//     category: "frontend",
//     title: "project 2",
//     description:
//       "I built a trading platform UI using Next.js, focused on providing a clean and intuitive user experience for traders.",
//     stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
//     image: "/assets/pic/c1.png",
//     live: "http://global-fx.vercel.app/",
//     github: "",
//   },
//   {
//     num: "03",
//     category: "frontend",
//     title: "project 3",
//     description:
//       "I created a food delivery website called Cottage using React for the frontend, Firebase for the backend, and Ant Design (AntD) for the UI components.",
//     stack: [{ name: "React.js" }, { name: "Css 3" }, { name: "Ant Design " }],
//     image: "/assets/pic/c3.png",
//     live: "http://figmaproject2-kohl.vercel.app/",
//     github: "",
//   },
//   {
//     num: "04",
//     category: "frontend",
//     title: "project 4",
//     description:
//       "I created a simple UI project using React to practice building interactive user interfaces.",
//     stack: [{ name: "React.js" }, { name: "Saas" }, { name: "Mui" }],
//     image: "/assets/pic/c2.png",
//     live: "http://metaproject-alpha.vercel.app/",
//     github: "",
//   },
// ];

// const Work = () => {
//   const [project, setProject] = useState(projects[0]);

//   const handleSlideChange = (swiper) => {
//     const currentIndex = swiper.activeIndex;
//     setProject(projects[currentIndex]);
//   };
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
//       }}
//       className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row xl:gap-[30px]">
//           <div className="w-full xl:w-50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
//             <div className="flex flex-col gap-[30px] h-[50%]">
//               <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
//                 {project.num}
//               </div>
//               <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
//                 {project.category} project
//               </h2>
//               <p className="text-white/60">{project.description}</p>
//               <ul className="flex gap-4">
//                 {project.stack.map((item, index) => {
//                   return (
//                     <li className="text-xl text-accent" key={index}>
//                       {item.name}
//                       {index !== project.stack.length - 1 && ","}
//                     </li>
//                   );
//                 })}
//               </ul>
//               <div className="border border-white/20"></div>
//               {/* live project button */}
//               <div className="flex items-center mt-2 gap-4">
//                 <Link
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <TooltipProvider delayDuration={100}>
//                     <Tooltip>
//                       <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
//                         <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
//                       </TooltipTrigger>
//                       <TooltipContent>
//                         <p className="bg-white text-black px-2 rounded-2xl">
//                           live project
//                         </p>
//                       </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 </Link>

//                 {/* github project */}
//                 <Link href={project.github}>
//                   <TooltipProvider delayDuration={100}>
//                     <Tooltip>
//                       <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
//                         <BsGithub className="text-white text-3xl group-hover:text-accent " />
//                       </TooltipTrigger>
//                       <TooltipContent>
//                         <p className="bg-white text-black px-2 rounded-2xl">
//                           Github repository
//                         </p>
//                       </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="w-full xl:w-[50%]">
//             <Swiper
//               spaceBetween={30}
//               slidesPerView={1}
//               className="xl:h-[520px] mb-12 "
//               onSlideChange={handleSlideChange}
//             >
//               {projects.map((project, index) => {
//                 return (
//                   <SwiperSlide key={index} className="w-full">
//                     <div className="h-[420px] relative group flex justify-center items-center">
//                       <div></div>
//                       <div className="relative w-full h-full aspect-[16/9]">
//                         <Image

//                           src={project.image}
//                           fill
//                           className="object-contain"
//                           alt=""
//                           unoptimized 
//                         />
//                       </div>
//                     </div>
//                        <div >
//                 <WorkSliderBtns/>
//               </div>
//                   </SwiperSlide>
//                 );
//               })}
             
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Work;






"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "I created a TikTok clone where users can scroll through videos like on the TikTok app.",
    stack: [{ name: "html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    live: "http://tiktok-lite.vercel.app/",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description:
      "I built a trading platform UI using Next.js, focused on providing a clean and intuitive user experience for traders.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    live: "http://global-fx.vercel.app/",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "I created a food delivery website called Cottage using React for the frontend, Firebase for the backend, and Ant Design (AntD) for the UI components.",
    stack: [{ name: "React.js" }, { name: "Css 3" }, { name: "Ant Design " }],
    live: "http://figmaproject2-kohl.vercel.app/",
    github: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description:
      "I created a simple UI project using React to practice building interactive user interfaces.",
    stack: [{ name: "React.js" }, { name: "Saas" }, { name: "Mui" }],
    live: "http://metaproject-alpha.vercel.app/",
    github: "",
  },
];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-[#302e2e85] rounded-xl shadow-lg">
              <div className="text-8xl font-extrabold text-transparent text-outline mb-4">
                {project.num}
              </div>
              <h2 className="text-2xl font-bold leading-none text-white capitalize mb-2">
                {project.category} project
              </h2>
              <p className="text-white/60 mb-4">{project.description}</p>
              <ul className="flex gap-2 mb-4">
                {project.stack.map((item, index) => (
                  <li className="text-lg text-accent" key={index}>
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="bg-white text-black px-2 rounded-2xl">
                          Live Project
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="bg-white text-black px-2 rounded-2xl">
                          Github Repository
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

