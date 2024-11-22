"use client";

import { projects } from "@/data";
import { div } from "framer-motion/client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        Some of our <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-12 mt-10">
        {projects.map(
          ({ id, title, description, img, liveLink, techStack }) => (
            <div
              key={id}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <PinContainer href={liveLink}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[28vh] mb-10 ">
                  <div
                    className="flex justify-center absolute w-full h-full overflow-hidden lg:rounded-lg "
                    style={{
                      backgroundColor: "#13162D"
                    }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                    <img
                      src={img}
                      alt="cover"
                      className="z-10 absolute bottom-0 w-[95%]"
                    />
                  </div>
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>

                <p
                  className="lg:text-xl lg-font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0"
                  }}
                >
                  {description}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {techStack.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
