import React from "react";
import styled from "styled-components";
import BidirectionalArrow from "./BidirectionalArrow";
import Circle from "./Circle";
import Picture from "./Picture";

const SummaryContainer = styled.div`
    width: 800px;
    height: 600px;
    margin: 10px auto;
    background-color: #ccc;
    padding: 10px;
    position: relative;
`;

export default function Summary(): React.FC {
    return (
        <SummaryContainer>
            <Circle x={50} y={50} text="国内" />
            <Circle x={230} y={230} text="ISP" />
            <Circle x={400} y={50} text="国外" />
            <Picture url="a1.png" x={50} y={450}/>
            <Picture url="a2.png" x={400} y={450}/>
            <BidirectionalArrow x={150} y={130} degree={45} text="B3" />
            <BidirectionalArrow x={330} y={130} degree={-45} text="B2" />
            <BidirectionalArrow x={150} y={330} degree={-45} text="A1" />
            <BidirectionalArrow x={330} y={330} degree={45} text="A2" />
        </SummaryContainer>
    );
}
