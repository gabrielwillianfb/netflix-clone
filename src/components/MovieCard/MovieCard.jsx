/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";
const imageUrl = import.meta.env.VITE_IMG;

const Img = styled.img`
  box-sizing: border-box;
  /* max-width: 10rem; */
  width: 10rem;
  height: 14rem;
  border-radius: 2px;
  &:hover {
    box-shadow: 0 4px 10px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19);
  }
`;
const Div = styled.div`
  margin: 0 0.2rem 0 0.2rem;
`;

const MovieCard = ({ movie }) => {
  return (
    <Div>
      <Link to={`/movie/${movie.id}`}>
        <Img src={imageUrl + movie.poster_path} alt={movie.title} />
      </Link>
    </Div>
  );
};

export default MovieCard;
