import React from "react";
import styled from "styled-components";

type props = {
    x: number
    y: number
}

const Line = styled.hr<{x: number, y: number}>`
    position: absolute;
    height: 1px;
    background-color: black;
    border: 1px black solid;
    left: ${({x}) => x}px;
    top: ${({y}) => y }px;
    width: 100%;
`;

export default function Border({...prop}: props) {
    return (
        <Line x={prop.x} y={prop.y}></Line>
    );
}