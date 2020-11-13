import React from "react";
import styled from "styled-components";
import Arrow from "./Arrow";
import Circle from "./Circle";

const SummaryContainer = styled.div`
    width: 800px;
    height: 600px;
    margin: 10px auto;
    background-color: #ccc;
    padding: 10px;
`;

const ArrowContainer = styled.div`
    position: static;
    left: 150px;
    top: 120px;
`;

const CircleContainer = styled.div`
    position: static;
    left: 30px;
    top: 50px;
`;


export default function Summary() {
    return (
        <SummaryContainer>
            <CircleContainer>
                <Circle />
            </CircleContainer>
            <ArrowContainer>
                <Arrow />
            </ArrowContainer>
        </SummaryContainer>
    );
}
