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
      img: "https://i.imgur.com/60iPKgF.png",
      text: "For Project 1 of General Assembly SEB, I created a grid-based game modeled on Frogger, named Sharker, as a solo coding project. Players are tasked with navigating lava pits and moving sharks to reach safety at the other end of the grid.",
      readme:
        "https://github.com/jamessellman/SEB-Project-1/blob/main/readMe.md",
      deployed: "https://jamessellman.github.io/SEB-Project-1/",
    },
    {
      name: "Discover Disney",
      img: "https://i.imgur.com/uYIlj49.png",
      text: "For Project 2 in General Assembly SEB, we used pair programming to create a front end in React that utilizes an existing Disney API. This application allows users to display and search for numerous characters from the world of Disney. Users can click on their favorite characters to learn more information about them.",
      readme:
        "https://github.com/jamessellman/SEB-Project-2/blob/main/README.md",
      deployed: "https://seb-78project2.netlify.app/",
    },
    {
      name: "Gourmet E-shop",
      img: "https://i.imgur.com/M5WXDev.png",
      text: "For Project 3 in General Assembly SEB, our group of three developed a full-stack E-SHOP application. Sellers can showcase their delicious products for sale, and they have the ability to edit and delete their own products. Users can leave reviews for products and make mock purchases.",
      readme:
        "https://github.com/jamessellman/project-3-frontend/blob/main/README.md",
      deployed: "https://gourmet-e-shop-front.netlify.app",
    },
    {
      name: "5-A-Side Football",
      img: "https://i.imgur.com/iV2ptC8.png",
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
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
  return (
     <div className="">
        <div className="w-3/4 m-auto ">
          <h2 className="text-3xl text-center my-5 text-white">Projects</h2>
          <div className="">
            <Slider {...settings}>
              {data.map((d) => (
                // div for card the white bit. adding height here will determine how big the overall box will be (850-1166)
                <div className="bg-white text-black rounded-xl border-2 border-black text-center h-[750px] md:h-[700px] xl:h-[600px] relative">
                  <p className="text-xl font-semibold ">{d.name}</p>
                  <div className="h-80 rounded-t-xl bg-white flex justify-center items-center bg-no-repeat">
                    <img
                      src={d.img}
                      alt="Project image"
                      className="h-full w-full object-cover rounded-tl-lg rounded-tr-lg"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4 p-4">
                    {/* <p className="text-xl font-semibold">{d.name}</p> */}
                    <p>{d.text}</p>
                  </div>
                  {/* Div for buttons */}
                  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center gap-4">
                    <a href={d.readme} target="_blank">
                      <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl  h-16 transition-transform transform hover:scale-110">
                        Readme
                      </button>
                    </a>
                    <a href={d.deployed} target="_blank">
                      <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl  h-16 transition-transform transform hover:scale-110">
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
