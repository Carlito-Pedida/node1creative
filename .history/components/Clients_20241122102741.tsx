import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <>
      <div id="projects" className="py-20">
        <h1 className="heading">
          What my <span className="text-purple">clients</span> say...
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-12 mt-10">
          <div>
            <div className="">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
