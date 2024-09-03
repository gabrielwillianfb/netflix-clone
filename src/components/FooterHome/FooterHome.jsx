import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Div = styled.footer`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 3rem 10rem;
  display: flex;
  flex-direction: column;
  background-color: #141414;
  color: white;
  @media only screen and (max-width: 800px) {
    padding: 3rem 5rem;
  }
`;
const DivIcones = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media only screen and (max-width: 800px) {
    align-self: center;
    padding-bottom: 1rem;
  }
`;
const DivLinkRodape = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;

  @media only screen and (max-width: 800px) {
    align-self: center;
  }
`;
const DivLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  gap: 1rem;
`;
const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 0.2rem;
  width: 8rem;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 2px;
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;

  @media only screen and (max-width: 800px) {
    align-self: center;
  }
`;
const Span = styled.span`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  padding-top: 1rem;
`;
const A = styled.a`
  color: rgba(255, 255, 255, 0.5);
`;
const DivBotao = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const FooterHome = () => {
  return (
    <Div>
      <DivIcones>
        <FaFacebookF style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer" }} />
        <FaInstagram style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer" }} />
        <FaTwitter style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer" }} />
        <FaYoutube style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer" }} />
      </DivIcones>
      <DivLinkRodape>
        <DivLinks>
          <A href="#">Audiodescrição</A>
          <A href="#">Relações com investidores</A>
          <A href="#">Avisos legais</A>
        </DivLinks>
        <DivLinks>
          <A href="#">Central de Ajuda</A>
          <A href="#">Carreiras</A>
          <A href="#">Preferências de cookies</A>
        </DivLinks>
        <DivLinks>
          <A href="#">Cartão pré-pago</A>
          <A href="#">Termos de Uso</A>
          <A href="#">Informações corporativas</A>
        </DivLinks>
        <DivLinks>
          <A href="#">Imprensa</A>
          <A href="#">Privacidade</A>
          <A href="#">Entre em contato</A>
        </DivLinks>
      </DivLinkRodape>
      <DivBotao>
        <Button>Código do serviço</Button>
        <Span>© 1997-2024 Netflix, Inc.&nbsp;&nbsp;&lrm;</Span>
      </DivBotao>
    </Div>
  );
};

export default FooterHome;
