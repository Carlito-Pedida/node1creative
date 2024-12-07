import { socialMedia } from "@/data";
import Link from "next/link";
import { AnimatedContactModal } from "./AnimatedContactModal";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[55vw]">
          Need a <span className="text-purple ">digital platform</span> for your
          business?
          <br />
        </h1>
        <h1 className="heading lg:max-w-[55vw] mt-2">We can help...</h1>
        <h4 className="text-white-200 md:mt-10 my-5 text-center text-lg">
          Reach out and schedule a call today, you&apos;ll be glad you did.
        </h4>

        <AnimatedContactModal />
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Node <span className="text-purple">①</span> Creative
        </p>

        <div className="flex items-center mt-5 md:mt-0  md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link
              href={info.link}
              target="_blank"
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
