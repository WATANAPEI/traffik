import React from "react";
import styled from "styled-components";

type propType = {
    x: number
    y: number
    text: string
}

const _Text = styled.div<{x: number, y: number}>`
    position: absolute;
    left: ${({x}) => x}px;
    top: ${({y}) => y}px;
    text-decoration: underline;
    font-weight: bold;
    font-size: 1.3em;
`

export default function({...props}: propType) {
    return (
        <_Text x={props.x} y={props.y}>{props.text}</_Text>
    )

}