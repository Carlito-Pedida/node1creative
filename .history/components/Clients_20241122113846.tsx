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

          <div>
            {companies.map(({ id, name, img, nameImg }) => (
              <div key={id}>
                <img src={img} alt={name} />
                <img src={nameImg} alt={name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
