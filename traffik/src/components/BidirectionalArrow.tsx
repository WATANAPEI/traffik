import React from "react";
import styled from "styled-components";

type parms = {
    x: number
    y: number
    degree: number
}

const Arrow = styled.div<{degree: number}>`
    & {
        display: inline-block;
        height: 40px;
        width:80px;
        background-color: #5bc0de;
        position: relative;
        top: 40px;
        transform: rotate(${({degree}) => degree}deg)
    }
    &:before {
        /*modify border and top property to change arrow head size*/
        position: absolute;
        content: "";
        width: 0;
        height:0;
        border:50px solid transparent;
        border-left: 50px solid #5bc0de; /*height of arrow head*/
        left:80px;
        top:-30px;
    }
    &:after {
        /*modify border and top property to change arrow head size*/
        position: absolute;
        content: "";
        width: 0;
        height:0;
        border:50px solid transparent;
        border-right: 50px solid #5bc0de; /*height of arrow head*/
        right:80px;
        top:-30px;
    }
`;

const BidirectionalArrowContainer = styled.div<{x: number, y:number}>`
    position: absolute;
    left: ${({x}) => x}px;
    top: ${({y}) => y}px;
`;

export default function BidirectionalArrow({...parms}): React.FC<parms> {
    return (
        <BidirectionalArrowContainer x={parms.x} y={parms.y}>
            <Arrow degree={parms.degree}></Arrow>
        </BidirectionalArrowContainer>

    )
}
