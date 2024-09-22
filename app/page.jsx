import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import Stats from "@/components/ui/Stats";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:mt-0 mt-9 xl:flex-row items-center justify-between xl:pt:8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Frontend Devloper</span>
            <h1 className="h1 mb-6">
              Hello I am <br />
              <span className="text-accent">Sumaira Zubair</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am skilled at designing stunning digital experiences I am
              proficient in various programming languages
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transiton-all duration-500"
                />
              </div>
            </div>
          </div>
          <div><Stats/></div>
        </div>
      </div>
      {/* <Stats/> */}
    </section>
  );
};

export default Home;
