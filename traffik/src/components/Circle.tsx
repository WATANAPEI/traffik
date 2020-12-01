import React from "react";
import styled from "styled-components";

type parms = {
    x: number
    y: number
    r?: number
    color?: string
    text?: string
}
const CircleDiv = styled.div<{r?: number, color?: string}>`
    width: ${({r}) => r ? r: 100}px;
    height: ${({r}) => r ? r: 100}px;
    border-radius: 50%;
    border: 2px solid black;
    background-color: ${({color})=> color ? color : `skyblue`};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CircleContainer = styled.div<{x: number, y: number}>`
    position: absolute;
    left: ${({x}) => x}px;
    top: ${({y}) => y}px;
`;


export default function Circle({...props}: parms) {
    return (
        <CircleContainer x={props.x} y={props.y}>
            <CircleDiv r={props?.r} color={props.color}>{props.text}</CircleDiv>
        </CircleContainer>
    )

}