//  projects 2,3,4
 {/* PROJECT 2 */}
        <Slide index={1}>
          <div className="bg-gray-400 h-screen">
            <h3 className="text-center text-3xl m-5">Discover Disney</h3>
            <img
              className="object-contain w-2/4 border-solid border-8 border-white shadow-2xl transition-transform transform hover:scale-110"
              src={discover_disney}
              alt="discover disney homepage"
            />
            <p>
              For the second project in General Assembly SEB I was tasked with a
              partner to create an online interactive, multipage website that
              took data from an API. We were given a lot of scope to choose
              whichever API we liked and use that API anyway we seemed fit.
              Myself and my partner decided to use a Disney API which contained
              data on over 7000 Disney characters as well any extra information
              about each character such as which films they appeared in as well
              as an image for the character. We decided to use react to display
              characters through cards on the screen, to which the user could
              click on an individual character, at which they would be diverted
              to a new page for that character with extra informaiton. As our
              strech goal we wanted to have a form of filtering/searching for a
              character.
            </p>
            <a
              href="https://github.com/jamessellman/SEB-Project-2/blob/main/README.md"
              target="_blank">
              <button>Readme</button>
            </a>
          </div>
        </Slide>
        {/* PROJECT 3 */}
        <Slide index={2}>
          <div className="bg-gray-400 h-screen">
            <h3 className="text-center text-3xl m-5">Gourmet E-Shop</h3>
            <img
              className="object-contain w-2/4 border-solid border-8 border-white shadow-2xl transition-transform transform hover:scale-110"
              src={e_shop}
              alt="discover disney homepage"
            />
            <p>
              We have developed an E-SHOP where sellers can showcase their
              delicious products for sale. Sellers have the ability to edit and
              delete their products if they are the ones who added the product
              to our database. Users can visit our website to explore the wide
              range of products available and make purchases as desired.
              Additionally, users have the option to leave reviews for products
              they have experienced. Upon a successful purchase, the number of
              units sold for the respective product will increase, while also
              aggregating the total sales across all products for that
              particular seller.
            </p>
            <a
              href="https://github.com/jamessellman/project-3-frontend/blob/main/README.md"
              target="_blank">
              <button>Readme</button>
            </a>
          </div>
        </Slide>
        {/* PROJECT 4 */}
        <Slide index={3}>
          <div className="bg-gray-400 h-screen">
            <h3 className="text-center text-3xl m-5">5-A-Side API</h3>
            <img
              className="object-contain w-2/4 border-solid border-8 border-white shadow-2xl transition-transform transform hover:scale-110"
              src={five_a_side}
              alt="discover disney homepage"
            />
            <p>
              5-A-Side Football API is a website in which users can visit to
              add, edit and discuss current Premier League football players.
              Users have the ability to build their own dream 5-A-side football
              teams as well as play a game to choose their favourite between
              randomised players from the database.
            </p>
            <a
              href="https://github.com/jamessellman/project-4-frontend/blob/main/README.md"
              target="_blank" className="col-span-12">
              <button>Readme</button>
            </a>
          </div>
        </Slide>


// full code

import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import project1 from "../assets/project1.png";

const Carousel = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center m-5 rounded-lg">
      <h1 className="text-center text-3xl text-gray-800 mb-8">Projects</h1>
      <CarouselProvider
        className="w-full max-w-screen-lg"
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={4}
      >
        <Slider>
          {/* PROJECT 1 */}
          <Slide index={0}>
            <div className="border border-gray-400 rounded-lg p-5 flex flex-col items-center gap-4">
              <h3 className="text-center text-xl md:text-3xl mb-4">Sharker</h3>
              <img
                className="object-contain border border-white rounded-lg shadow-lg"
                src={project1}
                alt="Sharker project"
              />
              <p className="text-sm md:text-base text-center mt-4">
                For project 1 of General Assembly SEB 78, I was tasked with
                creating a functioning grid-based game. Introducing "Sharker,"
                an underwater adaptation of the popular game Frogger. In this
                game, the objective is to guide your scuba diver from the vast
                open ocean to safety on the beach. However, beware! Hungry
                sharks patrol the waters, and falling into a volcano spells
                disaster, sending your scuba diver back to the starting point.
                Players are given three lives to navigate to safety, or it's
                game over!
              </p>
              <div className="mt-4">
                <a
                  href="https://github.com/jamessellman/SEB-Project-1/blob/main/readMe.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg rounded-lg text-sm md:text-base px-4 md:px-5 py-2 md:py-2.5">
                    Readme
                  </button>
                </a>
              </div>
            </div>
          </Slide>
        </Slider>
        <div className="flex justify-evenly mt-4 md:mt-10 w-full">
          <ButtonBack className="text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg rounded-lg text-sm md:text-base px-4 md:px-5 py-2 md:py-2.5">
            Previous Project
          </ButtonBack>
          <ButtonNext className="text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg rounded-lg text-sm md:text-base px-4 md:px-5 py-2 md:py-2.5">
            Next Project
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default Carousel;
