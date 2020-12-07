import React from "react";
import { StyledPopup } from "./Popup";
import styled from "styled-components";

type props = {
    x: number
    y: number
    popupText?: string
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
        <StyledPopup
            trigger = {
                <HexagonContainer x={prop.x} y={prop.y}>
                    国内主要IX
                </HexagonContainer>
            }
            position={['top center', 'bottom right', 'bottom left']}
            arrow={false}
            offsetY={5}
            >
                {prop.popupText}
                </StyledPopup>
    );
}