import React from "react";
import styled from "styled-components";
import {ArrowHead} from "./ArrowHead";

type types = {
    x: number
    y: number
    deg: number
    text: string
}

//Load Svg files to render arrowbar with required text
const ArrowBarStyle = styled.svg<{text: string}>`
    position: absolute;
    left: 30px;
    top: 45px;
    background-image: url(./arrowbar_${({text}) => text}.svg);
    background-repeat: no-repeat;
`

const ArrowContainer = styled.div<{x: number, y: number, deg: number}>`
    position: absolute;
    left: ${({x}) => x}px;
    top: ${({y}) => y}px;
    transform: rotate(${({deg}) => deg}deg);
`

export default function Arrow({...types}: types) {

    return (
        <ArrowContainer x={types.x} y={types.y} deg={types.deg}>
            <ArrowHead headType="head" />
            <ArrowBarStyle text={types.text}/>
            <ArrowHead headType="tail"/>
        </ArrowContainer>
    );


}