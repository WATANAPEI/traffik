import React from "react";
import styled from "styled-components";

type parms = {
    x: number
    y: number
    text: string | null
}
const CircleDiv = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: skyblue;
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
            <CircleDiv>{props.text}</CircleDiv>
        </CircleContainer>
    )

}