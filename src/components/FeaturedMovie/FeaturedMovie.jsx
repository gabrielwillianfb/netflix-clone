import { useEffect, useState } from "react";
import "./FeaturedMovie.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import AddIcon from "@mui/icons-material/Add";
import Tmdb from "../../Tmdb";

function FeaturedMovie() {
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    const loadFeaturedMovie = async () => {
      // Obtém a lista de "Originais Netflix"
      const lista = await Tmdb.getHomeList();
      const originaisNetflix = lista.find((item) => item.slug === "originals");

      if (originaisNetflix) {
        // Seleciona aleatoriamente um filme/série da lista de "Originais Netflix"
        const randomIndex = Math.floor(Math.random() * originaisNetflix.filmes.results.length);
        const filmeSelecionado = originaisNetflix.filmes.results[randomIndex];
        const detalhesDoFilme = await Tmdb.getInformacaoDoFilme(filmeSelecionado.id, "serie");
        setFilme(detalhesDoFilme);
      }
    };

    loadFeaturedMovie();
  }, []);

  if (!filme) {
    return <div>Carregando...</div>;
  }

  const primeiraData = new Date(filme.first_air_date || filme.release_date);
  const generos = filme.genres.map((genre) => genre.name);
  let sinopse = filme.overview;

  if (sinopse.length > 260) {
    sinopse = `${sinopse.substring(0, 260)}...`;
  }
  if (sinopse.length <= 0) {
    sinopse = "Filme ou série sem sinopse.";
  }
  const relevancia = filme.vote_average;

  return (
    <section
      className="filmePrincipal"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${filme.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="filmePrincipal--transparenciaVertical">
        <div className="filmePrincipal--transparenciaHorizontal">
          <div className="filmePrincipal--nome">{filme.title || filme.original_name}</div>
          <div className="filmePrincipal--informacao">
            <div className="filmePrincipal--relevancia">{relevancia * 10}% relevante</div>
            <div className="filmePrincipal--anoDeEstreia">{primeiraData.getFullYear()}</div>
            {filme.number_of_seasons && (
              <div className="filmePrincipal--temporadas">
                {filme.number_of_seasons} Temporada
                {filme.number_of_seasons !== 1 ? "s" : ""}
              </div>
            )}
          </div>
          <div className="filmePrincipal--sinopse">{sinopse}</div>
          <div className="filmePrincipal--botoes">
            <a href="/" className="filmePrincipal--botaoAssistir">
              ▶ Assistir
            </a>
            <a href="/" className="filmePrincipal--botaoLista">
              <AddIcon style={{ fontSize: 20 }} />
            </a>
            <a href="/" className="filmePrincipal--botaoGostei">
              <ThumbUpIcon style={{ fontSize: 20 }} />
            </a>
            <a href="/" className="filmePrincipal--botaoNaoGostei">
              <ThumbDownIcon style={{ fontSize: 20 }} />
            </a>
          </div>
          <div className="filmePrincipal--generos">
            <strong>Gêneros: </strong>
            {generos.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovie;
