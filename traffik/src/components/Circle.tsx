import React from "react";
import styled from "styled-components";

const CircleDiv = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export default function Circle({text}): React.FC<string|null> {
    return (
        <CircleDiv>{text}</CircleDiv>
    )

}