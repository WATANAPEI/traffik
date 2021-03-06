import React from "react";
import { StyledPopup } from "./Popup";
import styled from "styled-components";

type parms = {
    x: number
    y: number
    r?: number
    color?: string
    circleText?: string
    popupText?: string
}

const CircleDiv = styled.div<{
    x: number,
    y: number,
    r?: number,
    color?: string
}>`
    position: absolute;
    left: ${({x}) => x}px;
    top: ${({y}) => y}px;
    width: ${({r}) => r ? r: 100}px;
    height: ${({r}) => r ? r: 100}px;
    border-radius: 50%;
    border: 2px solid black;
    background-color: ${({color})=> color ? color : `skyblue`};
    display: flex;
    justify-content: center;
    align-items: center;
`;


export default function Circle({...props}: parms) {
    return (
        <StyledPopup
            trigger= {
                <CircleDiv x={props.x} y={props.y} r={props?.r} color={props.color}>{props.circleText}</CircleDiv>
            }
            position={['top center', 'bottom right', 'bottom left']}
            arrow={false}
            offsetY={5}
            on={["hover", "focus"]}
            >
                {props.popupText}
            </StyledPopup>
    )

}