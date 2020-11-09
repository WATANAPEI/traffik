import React from "react";
import styled from "styled-components";

const SummaryContainer = styled.div`
    width: 800px;
    height: 600px;
    margin: 10px auto;
    background-color: #ccc;
    padding: 10px;
`;

export default function Summary() {
    return (
        <SummaryContainer>
            <svg viewBox="0 0 800 600">
                <g fill="#c33" stroke="#822" stroke-width="2">
                    <circle cx="60" cy="60" r="50" />
                    <circle cx="200" cy="200" r="50" />
                </g>
            </svg>
        </SummaryContainer>
    );
}
