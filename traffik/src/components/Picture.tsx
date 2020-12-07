import React from "react";
import { StyledPopup } from "./Popup";
import styled from "styled-components";

type parms = {
    url: string
    x: number
    y: number
    popupText?: string
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

export default function Picture({...props}: parms) {
    return (
        <StyledPopup
            trigger = {
                <PictureContainer url={props.url} x={props.x} y={props.y}/>
            }
            position={['top center', 'bottom right', 'bottom left']}
            arrow={false}
            offsetY={5}
            >
                {props.popupText}
            </StyledPopup>

    );

}