import React from "react";
import styled from "styled-components";

type CircleType = "domestic" | "isp";

const SummaryContainer = styled.div`
    width: 800px;
    height: 600px;
    margin: 10px auto;
    background-color: #ccc;
    padding: 10px;
`;

const Circle = styled.circle<{type: CircleType}>`
    fill: ${
        ({type}) => type === "domestic" ?
            `rgba(100, 200, 140, 1)` :
            `rgba(200, 10, 100, 1)`
    };
    stroke: none;
`;


export default function Summary() {
    return (
        <SummaryContainer>
            <svg viewBox="0 0 800 600">
                <g fill="#c33" stroke="#822" stroke-width="2">
                    <Circle type="domestic" id="circle_domestic" cx="60" cy="60" r="50" />
                    <Circle type="isp" cx="200" cy="200" r="50" />
                </g>
            </svg>
        </SummaryContainer>
    );
}
