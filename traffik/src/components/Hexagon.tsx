import React from "react";
import styled from "styled-components";

type props = {
    x: number
    y: number
}

const HexagonContainer = styled.svg<{x: number, y: number}>`
    position: absolute;
    background-image: url(./hexagon.svg);
    background-repeat: no-repeat;
    left: ${({x}) => x}px;
    top: ${({y}) => y }px;
`;


export default function Hexagon({...prop}: props) {
    return (
        <HexagonContainer x={prop.x} y={prop.y}>
            国内主要IX
        </HexagonContainer>
    );
}