import React from "react";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const data = [
    {
      name: "Sharker",
      img: "https://raw.githubusercontent.com/jamessellman/SEB-Project-1/main/Screenshot%202024-03-28%20at%2014.48.11.png",
      text: "For project 1 of General Assembly SEB 78, I was tasked with creating a functioning grid-based game. Introducing Sharker, an underwater adaptation of the popular game Frogger. In this game, the objective is to guide your scuba diver from the vast open ocean to safety on the beach. However, beware! Hungry sharks patrol the waters, and falling into a volcano spells disaster, sending your scuba diver back to the starting point. Players are given three lives to navigate to safety, or it's game over!",
      readme:
        "https://github.com/jamessellman/SEB-Project-1/blob/main/readMe.md",
      deployed: "https://jamessellman.github.io/SEB-Project-1/",
    },
    {
      name: "Discover Disney",
      img: "https://raw.githubusercontent.com/jamessellman/SEB-Project-2/main/Screenshot%202024-03-11%20at%2008.40.02%20(2).png",
      text: "For the second project in General Assembly SEB I was tasked with a partner to create an online interactive, multipage website that m an API. We were given a lot of scope to choose whichever API we liked and use that API anyway we seemed fit. Myself and my partner decided to use a Disney API which contained data on over 7000 Disney characters as well any extra information about each character such as which films they appeared in as well as an image for the character. We decided to use react to display characters through cards on the screen, to which the user could click on an individual character, at which they would be diverted to a new page for that character with extra informaiton. As our strech goal we wanted to have a form of filtering/searching for a character.",
      readme:
        "https://github.com/jamessellman/SEB-Project-2/blob/main/README.md",
      deployed: "https://seb-78project2.netlify.app/",
    },
    {
      name: "Gourmet E-shop",
      img: "https://raw.githubusercontent.com/jamessellman/project-3-frontend/main/Screenshot%202024-03-28%20at%2016.55.14.png",
      text: "We have developed an E-SHOP where sellers can showcase their delicious products for sale. Sellers have the ability to edit and delete their products if they are the ones who added the product to our database. Users can visit our website to explore the wide range of products available and make purchases as desired. Additionally, users have the option to leave reviews for products they have experienced. Upon a successful purchase, the number of units sold for the respective product will increase, while also aggregating the total sales across all products for that particular seller.",
      readme:
        "https://github.com/jamessellman/project-3-frontend/blob/main/README.md",
      deployed: "https://gourmet-e-shop-front.netlify.app",
    },
    {
      name: "5-A-Side Football",
      img: "https://raw.githubusercontent.com/jamessellman/project-4-frontend/main/Screenshot%202024-05-08%20at%2011.27.08.png",
      text: "5-A-Side Football API is a website in which users can visit to add, edit and discuss current Premier League football players. Users have the ability to build their own dream 5-A-side football teams as well as play a game to choose their favourite between randomised players from the database.",
      readme:
        "https://github.com/jamessellman/project-4-frontend/blob/main/README.md",
      deployed: "https://fiveasidedatabase.netlify.app/",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScoll: 4,
  };
  return (
    <div
      className="m-5 bg-orange-300 h-full sm:h-screen rounded-xl"
      id="background-image">
      <div className="w-3/4 m-auto ">
        <h2 className="text-3xl text-center p-14">Projects</h2>
        <div className="">
          <Slider {...settings}>
            {data.map((d) => (
              // div for card
              <div className="bg-white h-[750px] text-black rounded-xl border-2 border-black ">
                <div className="h-80 rounded-t-xl bg-white flex justify-center items-center bg-no-repeat">
                  <img
                    src={d.img}
                    alt="Project image"
                    className="h-full w-full object-cover rounded-tl-lg rounded-tr-lg"
                  />
                </div>
                <div className="flex flex-col  items-center gap-4 p-4  h-80">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p>{d.text}</p>
                </div>
                {/* Div for buttons */}
                <div className=" flex justify-center items-center">
                  <a href={d.readme} target="_blank">
                    <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl m-1 transition-transform transform hover:scale-110">
                      Readme
                    </button>
                  </a>
                  <a href={d.deployed} target="_blank">
                    <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl m-1 transition-transform transform hover:scale-110">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
