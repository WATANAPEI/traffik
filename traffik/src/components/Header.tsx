import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    border-bottom: 2px solid black;
    padding: 10px;
    margin: 10px;
`;

const HeaderLogo = styled.header`
    font-size: 2em;
`;

const HeaderMenu = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
`;

const HeaderMenuItem = styled.li`
    font-size: 1.5em;
    padding: 0 1em;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo>Traffik</HeaderLogo>
            <HeaderMenu>
                <HeaderMenuItem>About</HeaderMenuItem>
            </HeaderMenu>
        </HeaderContainer>
    )
}