import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <>
      <div id="projects" className="py-20">
        <h1 className="heading">
          What my <span className="text-purple">clients</span> are saying...
        </h1>
        <div className="flex flex-col items-center">
          <div className="h-[5-vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
