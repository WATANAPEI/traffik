import React from "react";
import styled from "styled-components";
import Circle from "./Circle";
import Picture from "./Picture";
import Arrow from "./Arrow";

const SummaryContainer = styled.div`
    width: 800px;
    height: 600px;
    margin: 10px auto;
    background-color: #ccc;
    padding: 10px;
    position: relative;
`;

export default function Summary() {
    return (
        <SummaryContainer>
            <Circle x={50} y={50} text="国内" />
            <Circle x={250} y={230} text="ISP" />
            <Circle x={450} y={50} text="国外" />
            <Picture url="a1.png" x={50} y={450}/>
            <Picture url="a2.png" x={430} y={450}/>
            <Arrow x={100} y={120} deg={-45} dataType="B3"/>
            <Arrow x={300} y={200} deg={-135} dataType="B2"/>
            <Arrow x={110} y={400} deg={-135} dataType="A1"/>
            <Arrow x={310} y={310} deg={-46} dataType="A2"/>
            {/*
            <BidirectionalArrow x={150} y={130} degree={45} text="B3" />
            <BidirectionalArrow x={330} y={130} degree={-45} text="B2" />
            <BidirectionalArrow x={150} y={330} degree={-45} text="A1" />
            <BidirectionalArrow x={330} y={330} degree={45} text="A2" />
            */}

        </SummaryContainer>
    );
}
