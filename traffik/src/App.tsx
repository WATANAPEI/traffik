import React from "react";
import Header from "./components/Header"
import styled from "styled-components";
import SummaryByCss from "./components/SummaryByCss";

const AppContainer = styled.div`
  height: 800px;

`

export default function App(): JSX.Element {
  return (
    <AppContainer id="app">
      <Header />
      <SummaryByCss />
    </AppContainer>
  );
}