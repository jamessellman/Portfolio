import { forwardRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"],
  });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="grid grid-cols-1 mt-14" ref={containerRef}>
      <motion.div
        className="min-h-[100px] text-white m-5 h-auto rounded-lg "
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1 }}>
        <h2 className="text-center text-3xl m-5">Contact me</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-evenly m-10">
          <a
            href="https://github.com/jamessellman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-transform transform hover:scale-110">
            <FaGithub className="w-12 h-12 sm:w-24 sm:h-24 mb-5" />
          </a>
          <a href="mailto:james.sellman12@gmail.com">
            <MdEmail className="w-12 h-12  mb-5 sm:w-24 sm:h-24 text-white transition-transform transform hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/jamessellman/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-transform transform hover:scale-110">
            <FaLinkedin className="w-12 h-12 sm:w-24 sm:h-24" />
          </a>
        </div>
        <div className="text-center">
          <p>James Sellman: 2024</p>
        </div>
      </motion.div>
    </div>
  );
}

export default forwardRef(Contact);
