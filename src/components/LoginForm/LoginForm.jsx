import "./LoginForm.css";
import fundo from "../../assets/imagem-fundo-netflix.jpg";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext.jsx";
import { Navigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const { setIsLogged } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    document.body.style.background = `linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)), url(${fundo})`;
  }, []);

  const validate = () => {
    const newErrors = {};

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Informe um email válido.";
    }

    if (formData.password && formData.password.length < 4) {
      newErrors.password = "A senha deve ter entre 4 e 60 caracteres.";
    }
    return newErrors;
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const validationErrors = validate();
    setErrors(validationErrors);
  }, [formData]);

  const handleLogin = () => {
    setIsLogged(true);
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/perfil" />;
  }

  return (
    <div className="formContainer">
      <form>
        <h1>Entrar</h1>
        <input
          type="text"
          placeholder="Email ou número de celular"
          className={`inputForm ${errors.email ? "erro" : ""}`}
          id="email"
          name="email"
          onChange={handleChange}
        />
        {errors.email && (
          <p className="erro-email">
            <IoIosCloseCircleOutline className="erro-x" /> {errors.email}
          </p>
        )}
        <input
          type="password"
          placeholder="Senha"
          className={`inputForm ${errors.password ? "erro" : ""}`}
          onChange={handleChange}
          name="password"
          id="password"
        />
        {errors.password && (
          <p className="erro-senha">
            <IoIosCloseCircleOutline className="erro-x" /> {errors.password}
          </p>
        )}
        <button type="button" id="entrar" onClick={handleLogin}>
          Entrar
        </button>
        <label id="ou">OU</label>
        <button type="button" id="codigo">
          Usar um código de acesso
        </button>
        <a href="#" className="link">
          Esqueceu a senha?
        </a>
      </form>
      <div id="checkbox">
        <input type="checkbox" name="lembre-se" id="remember" />
        <label htmlFor="lembre-se" id="label-remember">
          Lembre-se de mim
        </label>
      </div>
      <p>
        Novo por aqui?{" "}
        <a href="#" className="link">
          Assine agora
        </a>
        .
      </p>
      <p id="saiba">
        Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.{" "}
        <a href="#">Saiba mais.</a>
      </p>
    </div>
  );
};

export default LoginForm;
