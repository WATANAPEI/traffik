import React from "react";
import styled from "styled-components";
import BidirectionalArrow from "./BidirectionalArrow";
import Circle from "./Circle";

const SummaryContainer = styled.div`
    width: 800px;
    height: 600px;
    margin: 10px auto;
    background-color: #ccc;
    padding: 10px;
    position: relative;
`;

const CircleContainer = styled.div<{x: number, y: number}>`
    position: absolute;
    left: ${({x}) => x}px;
    top: ${({y}) => y}px;
`;

export default function Summary(): React.FC {
    return (
        <SummaryContainer>
            <Circle x={100} y={30} text="国内" />
            <BidirectionalArrow x={120} y={300} degree={-135} />
        </SummaryContainer>
    );
}
