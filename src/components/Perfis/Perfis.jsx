import Imgperfil1 from "../../assets/img-perfil-1.png";
import Imgperfil2 from "../../assets/img-perfil-2.png";
import Imgperfil3 from "../../assets/img-perfil-3.png";
import Imgperfil4 from "../../assets/img-perfil-4.png";
import Imgperfil5 from "../../assets/img-perfil-5.png";
import "./Perfis.css";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Perfis = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    document.body.style.background = `#141414`;
  }, []);

  function handlePerfil(string) {
    localStorage.setItem("perfil", string);
    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div id="perfis">
      <h1>Quem está assistindo?</h1>
      <div id="cards">
        <div className="cards" onClick={() => handlePerfil(3)}>
          <img src={Imgperfil3} className="cardsImg" />
          <p>Usuário 1</p>
        </div>
        <div className="cards" onClick={() => handlePerfil(5)}>
          <img src={Imgperfil5} className="cardsImg" />
          <p>Usuário 2</p>
        </div>
        <div className="cards" onClick={() => handlePerfil(1)}>
          <img src={Imgperfil1} className="cardsImg" />
          <p>Usuário 3</p>
        </div>
        <div className="cards" onClick={() => handlePerfil(2)}>
          <img src={Imgperfil2} className="cardsImg" />
          <p>Usuário 4</p>
        </div>
        <div className="cards" onClick={() => handlePerfil(4)}>
          <img src={Imgperfil4} className="cardsImg" />
          <p>Usuário 5</p>
        </div>
      </div>
      <button type="button" id="gerenciarPerfis">
        Gerenciar perfis
      </button>
    </div>
  );
};

export default Perfis;
