'use client'

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import Grid from "../Grid";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "../../data/confetti.json"
import { MagicButton } from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
       "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  spareImg,
  imgClassName,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string
  spareImg?: string
  imgClassName?: string
  titleClassName?: string
}) => {

  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText("ari.zaredar11@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
        <div className={`${id === 6 && "flex justify-center"} h-full`}>
          <div className="w-full h-full absolute">
            {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 transition-all duration-300 ${
            id === 5 
            ? "w-full opacity-80 inset-0 z-0" 
            : "max-w-60 max-h-60 hover:scale-105"
          } `}
        >
          <div className={`${
             id === 5 
            ? " text-lg absolute top-2 left-2 px-3 py-1 text-white font-bold z-10"
            : "hidden"
          }`}>
            {'About Me'}
          </div>

          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={`object-cover object-center w-full h-full rounded-lg shadow-lg ${id === 5 ? "filter blur-sm" : "hover:shadow-2xl transition-shadow duration-300"}`}           
            />
          )}
        </div>

        {id === 5 ? (
          <div className=" mt-12 ml-4 pl-2 font-sans font-extralight text-sm lg:text-base text-[#C1C2D3] z-10 space-y-2">
            <div className="flex items-start space-x-2">
              <span className="text-purple mt-1">•</span>
              <span>Currently studying Software Engineering at Polytechnique Montreal</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-purple mt-1">•</span>
              <span>Working at Airbus Canada as an Information Management Specialist Intern</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-purple mt-1">•</span>
              <span>Experienced in developing, maintaining and updating AWS projects, documentation and applications tests</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-purple mt-1">•</span>
              <span>Experienced in Robotics and Micro-Processor programming</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-purple mt-1">•</span>
              <span>Passionated about Cloud Engineering and Artificial Intelligence</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-purple mt-1">•</span>
              <span>Experienced in sales and customer services</span>
            </div>
          </div>
        ) : (
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {}
          </div>
        )}

        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold"/> */}
          </BackgroundGradientAnimation>
        )}
        <div className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10")}>
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className="mt-2 mb-2 font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

        {id === 2 && <GlobeDemo/>}

        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fir
          absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-8">
              {['React.js', 'TypeScript', 'NextJs', 'Pyhton'].map((item)=>(
                <span key={item} className="py-2 lg:py4 lg:px-3 px-3 
                  text-xs lg:text-base opacity-50 
                  lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
              {['AWS', 'C++', 'Angular', 'Node.js'].map((item)=>(
                <span key={item} className="py-2 lg:py4 lg:px-3 px-3 
                  text-xs lg:text-base opacity-50 
                  lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
        {id === 6 && (
          <div className="mt-5 relative">
            <div className={`absolute -bottom-5 right-0`}>
              <Lottie options={{
                loop: copied,
                autoplay: copied,
                animationData,
                rendererSettings: { 
                  preserveAspectRatio: 'xMidYMid slice'
              }
              }}/>
            </div>
            <MagicButton
              title={copied ? "Copied!" : "Copy My Email"}
              icon={<IoCopyOutline/>}
              position="left"
              otherClasses="!bg-[#161a31]"
              handleClick={handleCopy}
            
            />
          </div>
        )}
    </div>
    </div>
    </div>
  );
}