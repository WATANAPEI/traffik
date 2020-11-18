import React from "react";
import styled from "styled-components";

type parms = {
    url: string
    x: number
    y: number
}

const PictureContainer = styled.div<{url: string, x: number, y: number}>`
    background-image: url("${({url}) => url}");
    background-size: contain;
    background-repeat: no-repeat;
    border: 2px solid #222;
    position: absolute;
    width: 150px;
    height: 120px;
    top: ${({y}) => y}px;
    left: ${({x}) => x}px;
`

export default function Picture({...props}): React.FC<parms> {
    return (
            <PictureContainer url={props.url} x={props.x} y={props.y}/>
    );

}