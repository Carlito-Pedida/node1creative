import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";
import { div } from "framer-motion/client";

const Clients = () => {
  return (
    <>
      <div id="projects" className="py-20">
        <h1 className="heading">
          What <span className="text-purple">my clients</span> are saying...
        </h1>
        <div className="flex flex-col items-center max-lg:mt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10">
            {companies.map(({ id, name, img, nameImg }) => (
              <div key={id}>
                <img src={img} alt={name} className="md:w-10 w-5" />
                <img src={nameImg} alt={name} className="md:w-24 w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
