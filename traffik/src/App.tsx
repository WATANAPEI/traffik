import React from "react";
import Header from "./components/Header"
import Summary from "./components/Summary";
import styled from "styled-components";
import Arrow from "./components/Arrow";

const AppContainer = styled.div`
  text-align: center;
  height: 800px;

`

export default function App(): JSX.Element {
  return (
    <AppContainer>
      <Header />
      <Arrow />
      <Summary />
    </AppContainer>
  );
}