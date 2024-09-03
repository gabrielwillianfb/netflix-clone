import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsStarFill,
} from "react-icons/bs";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 80%;
  padding: 4rem 0;
`;
const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;

  @media only screen and (max-width: 950px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
`;
const H2 = styled.h2`
  width: 100%;
  color: white;
  @media only screen and (max-width: 950px) {
    text-align: center;
  }
`;
const H3 = styled.h3`
  color: white;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  @media only screen and (max-width: 950px) {
    justify-content: center;
  }
`;
const P = styled.p`
  font-size: 1.2rem;
`;
const Img = styled.img`
  @media only screen and (max-width: 700px) {
    width: 25rem;
    height: auto;
  }
`;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR`;
    getMovie(movieUrl);
  }, []);

  return (
    <Container>
      {movie && (
        <>
          <H2>{movie.title}</H2>
          <MovieContainer>
            <div>
              <Img src={imageUrl + movie.poster_path} alt={movie.title} />
            </div>
            <div>
              <div>
                <H3>
                  <BsStarFill />
                  Avaliação:
                </H3>
                <P>{movie.vote_average}</P>
              </div>
              <div>
                <H3>
                  <BsWallet2 />
                  Orçamento:
                </H3>
                <P>
                  {movie.budget.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                </P>
              </div>
              <div>
                <H3>
                  <BsGraphUp />
                  Receita:
                </H3>
                <P>
                  {movie.revenue.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                </P>
              </div>
              <div>
                <H3>
                  <BsHourglassSplit />
                  Duração:
                </H3>
                <P>{movie.runtime} minutos</P>
              </div>
              <div>
                <H3>
                  <BsFillFileEarmarkTextFill />
                  Descrição:
                </H3>
                <P>{movie.overview}</P>
              </div>
            </div>
          </MovieContainer>
        </>
      )}
    </Container>
  );
};

export default Movie;
