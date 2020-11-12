import React from "react";
import styled from "styled-components";

type CircleType = "domestic" | "isp" | "foreign"

const SummaryContainer = styled.div`
    width: 800px;
    height: 600px;
    margin: 10px auto;
    background-color: #ccc;
    padding: 10px;
`;

const Ellipse = styled.ellipse<{type: CircleType}>`
    fill: ${
        ({type}) => {
            if(type === "foreign") {
                return `rgba(200, 200, 40, 1)`;
            } else if (type === "isp") {
                return `rgba(220, 10, 100, 1)`;
            } else {
                return `rgba(200, 150, 40, 1)`;
            }
        }
    };
    stroke: none;
`;


export default function Summary() {
    return (
        <SummaryContainer>
            <svg viewBox="0 0 800 600">
                <g>
                    <g>
                        <Ellipse type="foreign" id="ellipse_foreign" cx="100" cy="100" rx="80" ry="70" />
                        <text x="100" y="100" text-anchor="middle">
                            aaaaaaaaaaaaaa
                        </text>
                    </g>
                    <Ellipse type="isp" id="ellipse_isp" cx="300" cy="300" rx="80" ry="70" />
                    <Ellipse type="domestic" id="ellipse_domestic" cx="500" cy="100" rx="80" ry="70" />
                </g>
            </svg>
        </SummaryContainer>
    );
}
