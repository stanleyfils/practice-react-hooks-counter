import React from "react";
import CountButton from "./Components/CountButton";
import "./App.css";
import styled from "styled-components";

const Heading = styled.h1`
  margin: 10%;
  margin-bottom: 0;
`;

function App() {
  return (
    <div>
      <Heading>Check out my clicker!</Heading>
      <CountButton />
    </div>
  );
}

export default App;
