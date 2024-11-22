import { workExperience } from "@/data";
import React from "react";

const Experience = () => {
  return (
    <div id="testimonials" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">technical</span> experience...
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-1">
        {workExperience.map((card) => (
          <Button></Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
