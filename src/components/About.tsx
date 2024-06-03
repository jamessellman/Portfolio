import React from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function About() {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();


  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="m-5 text-white" ref={containerRef}>
      <motion.h2
        className="text-center my-5 text-4xl mt-36"
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        About me:
      </motion.h2>
      <motion.p
        className="text-center md:text-lg"
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        I am Jamie, an enthusiastic and dynamic junior software engineer with a
        solid background working in dynamic operational teams in the fast-paced
        fintech sector. Transitioning from my role as an account executive to
        the world of software engineering, I bring a diverse skill set developed
        over several years of operational experience. I offer a unique blend of
        communication, organisational, and negotiation skills alongside
        technical proficiency in HTML, CSS, JavaScript, React, and Python. With
        a self-taught coding education supplemented by formal bootcamp training
        at General Assembly, I am ready to take the next step to further
        establish my software engineering skills and contribute to a
        forward-thinking, game-changing environment.
      </motion.p>
      <motion.h3
        className="text-center my-5 text-4xl"
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        Interests:
      </motion.h3>
      <motion.p
        className="text-center md:text-lg"
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1.5, delay: 2 }}
      >
        I am a huge sports fan, mainly focusing on football and the team I
        support Liverpool. I am a big outdoors person, often taken hikes or running through the
        Surrey Hills at weekends.
      </motion.p>
    </div>
  );
}
