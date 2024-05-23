import React from 'react';

export default function About() {
  return (
    <div id="background-image" className="m-5 flex flex-col items-center justify-center text-center text-lg sm:text-xl md:text-2xl lg:text-3xl h-full sm:h-screen rounded-lg text-white">
      <div className="mb-4">
        <h2 className="border-solid text-2xl sm:text-3xl md:text-4xl">About me</h2>
      </div>
      <div className="border-solid p-4 max-w-prose">
        <p className="text-base sm:text-lg md:text-xl">
          I am Jamie, an enthusiastic and dynamic junior software engineer with
          a solid background working in dynamic operational teams in the
          fast-paced fintech sector. Transitioning from my role as an account
          executive to the world of software engineering, I bring a diverse
          skill set developed over several years of operational experience. I
          offer a unique blend of communication, organisational, and negotiation
          skills alongside technical proficiency in HTML, CSS, JavaScript,
          React, and Python. With a self-taught coding education supplemented by
          formal bootcamp training at General Assembly, I am ready to take the
          next step to further establish my software engineering skills and
          contribute to a forward-thinking, game-changing environment.
        </p>
      </div>
    </div>
  );
}
