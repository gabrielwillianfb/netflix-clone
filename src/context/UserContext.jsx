import { createContext } from "react";

const UserContext = createContext({});

export default UserContext;

// import React, { createContext, useState } from 'react';

// // Criação do contexto
// const Context = createContext({});

// function AuthProvider({ children }) {
//     const [authenticated, setAuthenticated] = useState(false)

//     return (
//         <Context.Provider value={{ authenticated, setAuthenticated }}>
//             {children}
//         </Context.Provider>
//     );
// };

// export { Context, AuthProvider };
