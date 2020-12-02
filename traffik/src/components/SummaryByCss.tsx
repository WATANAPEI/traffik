import React from "react";
import styled from "styled-components";
import Circle from "./Circle";
import Picture from "./Picture";
import Arrow from "./Arrow";
import Hexagon from "./Hexagon";

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
            <Circle x={50} y={50} r={100} text="国内" color="#FFFF88"/>
            <Circle x={230} y={220} r={140} text="ISP" color="#CCCCFF"/>
            <Circle x={450} y={50} r={100} text="国外" color="#FFAD90"/>
            <Picture url="a1.png" x={50} y={450}/>
            <Picture url="a2.png" x={430} y={450}/>
            <Arrow x={190} y={215} deg={135} dataType="B3"/>
            <Arrow x={300} y={210} deg={-135} dataType="B2"/>
            <Arrow x={200} y={310} deg={45} dataType="A1"/>
            <Arrow x={310} y={310} deg={-46} dataType="A2"/>
            <Arrow x={500} y={250} deg={90} dataType="B3"/>
            <Hexagon x={590} y={200}/>

        </SummaryContainer>
    );
}
