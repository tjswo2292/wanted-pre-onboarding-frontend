import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./component/auth/signUp/SignUp";
import SignIn from "./component/auth/signIn/SignIn";
import GlobalStyle from "./style/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
