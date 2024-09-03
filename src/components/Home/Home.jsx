import { useState, useEffect } from "react";
import styled from "styled-components";
import "./Home.css";
// import { FaPlay } from "react-icons/fa";
// import { IoIosInformationCircleOutline } from "react-icons/io";
// import beyblade from "../../assets/beyblade.png";
// import destaque from "../../assets/fundo-pagina-inicial.jpg";
// import MovieCard from "../MovieCard/MovieCard";
import Carrossel from "../Carroussel/Carrossel";
import FeaturedMovie from "../FeaturedMovie/FeaturedMovie";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

/*
const Destaque = styled.div`
  max-width: 100%;
  position: static;
  padding-top: 10rem;
  padding-bottom: 10rem;
  background-repeat: no-repeat;
  background: linear-gradient(90deg, rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0) 70%),
    url(${destaque}) no-repeat;
  background-size: 100%;
  padding-left: 3rem;
  background-size: cover;
  @media only screen and (max-width: 1200px) {
    padding-top: 5rem;
    padding-left: 2rem;
    padding-bottom: 5rem;
  }
  @media only screen and (max-width: 950px) {
    padding-top: 5rem;
    padding-left: 2rem;
    padding-bottom: 5rem;
  }
  @media only screen and (max-width: 600px) {
    padding-top: 3rem;
    padding-left: 1rem;
    padding-bottom: 3rem;
  }
`;
const ImgDestaque = styled.img`
  width: 30rem;
  height: auto;
  @media only screen and (max-width: 950px) {
    width: 18rem;
  }
  @media only screen and (max-width: 700px) {
    width: 10rem;
  }
`;
const H2 = styled.h2`
  color: white;
  width: 50%;
  font-size: 1.2rem;
  font-weight: 600;
  @media only screen and (max-width: 950px) {
    font-size: 0.9rem;
  }
  @media only screen and (max-width: 700px) {
    font-size: 0.8rem;
  }
`;
const DivDestaque = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 30%;
  gap: 0.8rem;
`;
const ButtonAssistir = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: white;
  border: none;
  border-radius: 5px;
  width: 30%;
  @media only screen and (max-width: 950px) {
    font-size: 0.9rem;
    width: 20rem;
  }
  @media only screen and (max-width: 700px) {
    font-size: 0.7rem;
  }
`;
const ButtonMaisInformacoes = styled.button`
  color: white;
  background-color: rgba(94, 93, 93, 0.5);
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  width: 60%;
  @media only screen and (max-width: 950px) {
    font-size: 0.9rem;
    width: 40rem;
  }
  @media only screen and (max-width: 700px) {
    font-size: 0.7rem;
    width: 30rem;
  }
`;
*/

const H3 = styled.h3`
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  margin-left: 6rem;
  @media only screen and (max-width: 700px) {
    text-align: center;
    margin-left: 0;
  }
`;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [nowMovies, setNowMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [adventureMovies, setAdventuryMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);

  const getMovies = async (
    topurl,
    nowurl,
    popurl,
    upurl,
    actionurl,
    adventureurl,
    comedyurl,
    animationurl,
  ) => {
    const topres = await fetch(topurl);
    const topdata = await topres.json();
    setTopMovies(topdata.results);

    const nowres = await fetch(nowurl);
    const nowdata = await nowres.json();
    setNowMovies(nowdata.results);

    const popres = await fetch(popurl);
    const popdata = await popres.json();
    setPopularMovies(popdata.results);

    const upres = await fetch(upurl);
    const updata = await upres.json();
    setUpcomingMovies(updata.results);

    const actionres = await fetch(actionurl);
    const actiondata = await actionres.json();
    setActionMovies(actiondata.results);

    const adventureres = await fetch(adventureurl);
    const adventuredata = await adventureres.json();
    setAdventuryMovies(adventuredata.results);

    const comedyres = await fetch(comedyurl);
    const comedydata = await comedyres.json();
    setComedyMovies(comedydata.results);

    const animationres = await fetch(animationurl);
    const animationdata = await animationres.json();
    setAnimationMovies(animationdata.results);
  };

  useEffect(() => {
    document.body.style.background = `#141414`;

    const topRatedurl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;
    const nowPlayingurl = `${moviesURL}now_playing?${apiKey}&language=pt-BR`;
    const popularurl = `${moviesURL}popular?${apiKey}&language=pt-BR`;
    const upComingurl = `${moviesURL}upcoming?${apiKey}&language=pt-BR`;
    const actionurl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=28&${apiKey}`;
    const adventureurl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=12&${apiKey}`;
    const comedyurl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=35&${apiKey}`;
    const animationurl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=16&${apiKey}`;

    getMovies(
      topRatedurl,
      nowPlayingurl,
      popularurl,
      upComingurl,
      actionurl,
      adventureurl,
      comedyurl,
      animationurl,
    );
  }, []);

  return (
    <Container id="home">
      {/* <Destaque id="destaque">
        <ImgDestaque src={beyblade}></ImgDestaque>
        <H2>
          Dois irmãos treinam para se tornar lendas do Beyblade e começam uma revolução capaz de
          derrubar a elite do esporte.
        </H2>
        <DivDestaque>
          <ButtonAssistir>
            <FaPlay className="play" />
            <strong>Assistir</strong>
          </ButtonAssistir>
          <ButtonMaisInformacoes>
            <IoIosInformationCircleOutline className="info" />
            <strong>Mais Informações</strong>
          </ButtonMaisInformacoes>
        </DivDestaque>
      </Destaque> */}
      <FeaturedMovie />
      <H3>Melhores Avaliados</H3>
      <Carrossel movies={topMovies} />
      <H3>Em Cartaz</H3>
      <Carrossel movies={nowMovies} />
      <H3>Mais populares</H3>
      <Carrossel movies={popularMovies} />
      <H3>Proximos Lançamentos</H3>
      <Carrossel movies={upcomingMovies} />
      <H3>Filmes de Ação</H3>
      <Carrossel movies={actionMovies} />
      <H3>Filmes de Aventura</H3>
      <Carrossel movies={adventureMovies} />
      <H3>Filmes de Comedia</H3>
      <Carrossel movies={comedyMovies} />
      <H3>Filmes de Animação</H3>
      <Carrossel movies={animationMovies} />
    </Container>
  );
};

// MOVIE
// Action          28
// Adventure       12
// Animation       16
// Comedy          35
// Crime           80
// Documentary     99
// Drama           18
// Family          10751
// Fantasy         14
// History         36
// Horror          27
// Music           10402
// Mystery         9648
// Romance         10749
// Science Fiction 878
// TV Movie        10770
// Thriller        53
// War             10752
// Western         37

export default Home;
