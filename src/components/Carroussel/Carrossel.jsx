/* eslint-disable react/prop-types */
import ReactSimplyCarousel from "react-simply-carousel";
import { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Carrossel.css";

const Carrossel = ({ movies }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="carrossel">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={8}
        itemsToScroll={1}
        containerPadding={10}
        forwardBtnProps={{
          className: "navigate forwardBtnProps",
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          className: "navigate backwardBtnProps",
          children: <span>{`<`}</span>,
        }}
        speed={400}
        easing="linear"
      >
        {movies && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </ReactSimplyCarousel>
    </div>
  );
};

export default Carrossel;
