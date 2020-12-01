import React from "react";
import styled from "styled-components";

const HexagonContainer = styled.svg`
    position: absolute;
    background-image: url(./hexagon.svg);
    background-repeat: no-repeat;
    left: 550px;
    top: 210px;
`;


export default function Hexagon() {
    return (
        <HexagonContainer>

        </HexagonContainer>
    );
}