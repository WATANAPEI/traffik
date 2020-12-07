import React from "react";
import Header from "./components/Header"
import styled from "styled-components";
import SummaryByCss from "./components/SummaryByCss";

const AppContainer = styled.div`
  height: 800px;

`
const HeaderDescription = styled.p`
    text-align: center;
    margin: 0;
    font-size: 1.3em;
    text-decoration: underline;
`;

export default function App(): JSX.Element {
  return (
    <AppContainer id="app">
      <Header />
      <HeaderDescription>
      1. 集計したトラヒックの種類
      </HeaderDescription>
      <SummaryByCss />
    </AppContainer>
  );
}