import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full flex flex-col justify-center">
      <div className="container mx-auto h-full px-6 sm:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-16 lg:py-24">
          
          {/* Left Section - Text Content */}
          <div className="text-center md:text-left w-full md:w-1/2 space-y-6">
            <span className="text-lg md:text-xl font-semibold text-gray-300">
              Software Developer
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hello, I'm <br />
              <span className="text-cyan-400">Shiyam KS</span>
            </h1>
            <p className="text-white/80 max-w-md mx-auto md:mx-0">
              I excel at crafting scalable web applications and optimizing backend performance.
            </p>

            {/* Buttons & Social Icons */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <a
                href="/Shiyam_KS_resume.pdf"
                download="Shiyam_KS_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              {/* Social Icons */}
              <div className="mt-4 md:mt-0">
                <Social containerStyles="flex gap-4 md:gap-6" 
                        iconStyles="w-10 h-10 border border-cyan-400 rounded-full flex justify-center items-center text-cyan-400 text-base hover:bg-cyan-400 hover:text-primary transition-all duration-300" 
                />
              </div>
            </div>
          </div>

          {/* Right Section - Photo */}
          <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      
      <Stats />
    </section>
  );
};

export default Home;
