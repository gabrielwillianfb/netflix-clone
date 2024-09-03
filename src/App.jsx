import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectRoutes/ProtectRoutes";
import HeaderInicial from "./components/HeaderInicial/HeaderInicial";
import Home from "./components/Home/Home";
import Perfis from "./components/Perfis/Perfis";
import Movie from "./components/Movie/Movie";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";
import FooterHome from "./components/FooterHome/FooterHome";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import UserContext from "./context/UserContext.jsx";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <UserContext.Provider value={{ isLogged, setIsLogged }}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route
                path="/"
                element={
                  <ProtectedRoute isLoggedIn={isLogged}>
                    <HeaderInicial />
                    <Home />
                    <FooterHome />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/perfil"
                element={
                  <ProtectedRoute isLoggedIn={isLogged}>
                    <Perfis />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/movie/:id"
                element={
                  <ProtectedRoute isLoggedIn={isLogged}>
                    <HeaderInicial />
                    <Movie />
                    <FooterHome />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/search"
                element={
                  <ProtectedRoute isLoggedIn={isLogged}>
                    <HeaderInicial />
                    <Search />
                    <FooterHome />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <>
                    <Header /> <LoginForm /> <Footer />
                  </>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
