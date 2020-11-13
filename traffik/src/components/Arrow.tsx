import React from "react";
import styled from "styled-components";

const ArrowContainer = styled.div<{degree: number}>`
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
        position: absolute;
        content: "";
        width: 0;
        height:0;
        border:60px solid transparent;
        border-left: 60px solid #5bc0de;
        left:80px;
        top:-37px;
    }
`;

export default function Arrow() {
    return (
        <ArrowContainer degree={-135}></ArrowContainer>

    )
}
