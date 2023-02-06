import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./component/auth/signUp/SignUp";
import SignIn from "./component/auth/signIn/SignIn";
import Todo from "./component/todo/Todo";
import GlobalStyle from "./style/globalStyle";
import { Redirect } from "./component/Redirect";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#888",
      }}
    >
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Redirect />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
