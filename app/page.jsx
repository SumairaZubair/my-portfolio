import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import Stats from "@/components/ui/Stats";
import { FiDownload } from "react-icons/fi";
// import Image from "next/image";
// import code from '../public/assets/pic/code.jpg'
 

const Home = () => {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full">
        <div className="flex  xl:mt-0 mt-8 xl:flex-row items-center justify-between xl:pt:8 xl:pb-24">
          {/* text */}
          <div className=" text-center xl:text-left">
            {/* <span className="text-xl">Frontend Devloper</span> */}
            <h1 className="h1 mt-12 mb-4">
            
              <span className="text-white ">Sumaira Zubair</span>
            </h1>
            <p className="max-w-[500px] mb-6 text-white/80">
            {"I'm a passionate "} <span className=" pb-1 border-b-accent border-b-2">Frontend Developer / Web Developer</span>
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button> */}
              <div className="mb-4 xl:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transiton-all duration-500"
                />
              </div>
          {/* <div><Stats/></div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <Stats/> */}
    </section>
  );
};

export default Home;
