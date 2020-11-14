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

const CircleContainer = styled.div`
    position: absolute;
    left:30px;
    top: 20px;
`;

const BidirectionalArrowContainer = styled.div`
    position: absolute;
    left: 150px;
    top: 130px;
`;


export default function Summary(): React.FC {
    return (
        <SummaryContainer>
            <CircleContainer>
                <Circle />
            </CircleContainer>
            <BidirectionalArrowContainer>
                <BidirectionalArrow degree={-135} />
            </BidirectionalArrowContainer>
        </SummaryContainer>
    );
}
