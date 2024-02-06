// HeroSection.js
import Component from "../assets/img/Component.svg";
import Play from "../assets/img/Button-Play.png";
import Component2 from "../assets/img/Component-3.svg";
import Component4 from "../assets/img/Component-4.svg";
import Hero from "../assets/img/Component-2.svg";
import Cardslide from "./Cardslider.jsx";
const HeroSection = () => {
  const data = [
    { title: "Card 1", description: "Description 1" },
    { title: "Card 2", description: "Description 2" },
    { title: "Card 3", description: "Description 3" },
    { title: "Card 4", description: "Description 4" },
    { title: "Card 5", description: "Description 5" },
    { title: "Card 6", description: "Description 6" },
  ];
  return (
    <div className="hero-section text-black z-0 font-custom overflow-x-hidden justify-center items-center align-middle container mx-auto px-4 overflow-y-hidden">
      <h1 className="w-full text-neutral-900 text-3xl font-bold font-['Plus Jakarta Sans'] leading-10 lg:text-4xl w-full overflow-y-hidden">DISCOVER THE EASE OF LEARNING</h1>
      <p className="w-full text-2xl font-medium mt-3 lg:w-full lg:text-neutral-900 lg:text-3xl lg:font-semibold font-['Plus Jakarta Sans'] lg:tracking-[0.4rem]">
        ONLINE WITH
        <span className="text-indigo-600"> WOLU</span>
        <span className="text-yellow-500"> CLASSROOM</span>
      </p>

      <p className="w-[350px] text-neutral-900 text-lg font-normal font-['Plus Jakarta Sans'] mt-3 lg:w-full lg:mt-10">Simple. powerful. and fast—the key to a highly efficient online learning experience.</p>
      <div className="lg:flex mt-5 lg:gap-5">
        <button className="bg-indigo-600 text-white w-full py-4 text-sm font-medium font-['Plus Jakarta Sans'] mt-3 rounded-md hover:bg-indigo-700 transition-all lg:h-fit lg:mt-10 lg:w-56">
          <a>Get Started</a>
        </button>
        <button className="bg-white text-indigo-600 border-[0.5px] border-solid border-indigo-600 w-full py-4 text-sm font-medium font-['Plus Jakarta Sans'] mt-3 rounded-md hover:bg-indigo-600 hover:text-white transition-all lg:h-fit lg:mt-10 lg:w-56">
          <a href="#Learn">Learn More</a>
        </button>
      </div>
      <div className="float-right hidden lg:block -mt-[22.5rem] h-full z-40 absolute ml-[60rem]">
        <img src={Hero}></img>
      </div>
      <img id="Learn" className="mt-[4rem] mb-[32px] flex items-center align-middle justify-center container mx-auto lg:w-[88%] lg:mt-[15rem]" src={Component}></img>
      <a href="https://www.youtube.com/shorts/KaEnm860dHI" className="bg-white shadow-lg shadow-neutral-200 text-xs font-medium px-5 py-4 flex hover:shadow-none transition-all w-fit lg:px-8 lg:py-5 lg:text-sm lg:-mt-10 duration-500">
        <img className="w-3 h-3 mt-[1.7px] mr-4 lg:w-4 lg:h-4" src={Play}></img>Watch Video
      </a>
      <div className="flex items-center align-middle justify-center container mx-auto mt-20 gap-4 w-full lg:gap-54 lg:ml-20">
        <img src={Component2} className="w-36 -mt-10 lg:w-[65%] lg:float-start lg:mr-[10rem]"></img>
        <div>
          <h1 className="text-[11px] w-full font-semibold lg:text-3xl">
            WHAT IS <span className="text-indigo-600">WOLU</span> <span className="text-yellow-500">CLASSROOM</span> ?
          </h1>
          <p className="text-[9px] w-40 text-justify mt-4 lg:text-lg lg:w-[67%]">
            WOLU CLASSROOM represents a futuristic step in the world of online education, creating a learning experience that is not only advanced but also facilitates students and teachers in weaving the tapestry of the education world.
          </p>
          <button className="bg-white border-[0.2px] border-solid border-indigo-600 text-indigo-600 w-32 text-xs rounded-md py-3 mt-5 hover:bg-indigo-600 hover:text-white transition-all">Read More</button>
        </div>
      </div>
      <div className="mt-16 mb-10 lg:mt-44">
        <h1 className="font-semibold text-lg lg:text-2xl">Feature</h1>
        <div className=" border-b-4 border-solid border-indigo-500 w-10 lg:mt-5 lg:w-16 lg:border-b-8 lg:absolute lg:-ml-3"></div>
      </div>
      <Cardslide data={data} />
      <div className="lg:mt-56">
        <img className="flex items-center justify-center container mx-auto w-72 lg:float-end lg:w-[30%] lg:mr-32" src={Component4}></img>
        <div className="mt-[53px] flex items-center justify-center container mx-auto ml-2 lg:mt-28 lg:absolute lg:ml-24">
          <div className="items-center justify-center container mx-auto">
            <h1 className="text-lg font-semibold lg:text-2xl">
              VARIOUS TOOLS FOR <span className="text-indigo-600 lg:text-black">TEACHERS</span> AND <span className="text-yellow-500 lg:text-black">STUDENT</span> ONLINE
            </h1>
            <p className="text-sm mt-10 text-justify w-[21rem] lg:w-[37%]">
              Interactive learning platforms, digital learning resources, and collaborative features that enable more effective and engaging teaching and learning experiences, such as live classes, quizzes, forums, and other captivating
              features.
            </p>
          </div>
        </div>
        <a className="text-sm border-[0.5px] border-solid border-indigo-600 text-indigo-600 px-8 py-3 rounded-sm hover:bg-indigo-600 hover:text-white transition-all mt-7 absolute lg:mt-72 lg:ml-24">Read More</a>
      </div>
    </div>
  );
};

export default HeroSection;
