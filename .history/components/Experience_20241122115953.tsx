import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";

const Experience = () => {
  return (
    <div id="testimonials" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">technical</span> experience...
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button>
            <div>
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
