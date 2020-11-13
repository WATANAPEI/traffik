import React from "react";
import styled from "styled-components";

const CircleDiv = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: skyblue;
`;


export default function Circle() {
    return (
        <CircleDiv></CircleDiv>
    )

}