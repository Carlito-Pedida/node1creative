"use client";
import { FaLocationArrow } from "react-icons/fa6";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger
} from "./ui/AnimatedModal";
import ContactForm from "./ui/ContactForm";
import MagicButton from "./ui/MagicButton";

export function AnimatedContactModal() {
  return (
    <div
      className="py-40  flex items-center justify-center w-[50%] "
      style={{ backgroundImage: `url("/grid.svg")`, backgroundSize: "fit" }}
    >
      <Modal>
        <ModalTrigger className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10">
          <span className="absolute text-white  inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
            Let's get in touch
            <FaLocationArrow />
          </div>

          {/* <MagicButton
            buttonName="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          /> */}
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-200 font-bold text-center mb-8">
              Schedule a{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border-gray-200">
                Business
              </span>{" "}
              call today! ☎️
            </h4>

            <ContactForm />
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Send
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
