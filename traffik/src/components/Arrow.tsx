import React from "react";
import {ReactComponent as ArrowBar} from "../svg/arrowbar.svg";
import {ReactComponent as ArrowHead} from "../svg/arrowhead.svg";
import {ReactComponent as ArrowTail} from "../svg/arrowhead.svg";
import styled from "styled-components";

type types = {
    x: number
    y: number
    deg: number
}

const ArrowBarStyle = styled(ArrowBar)`
    position: absolute;
    left: 30px;
    top: 45px;
`

const ArrowTailStyle = styled(ArrowTail)`
    position: absolute;
    transform: rotate(180deg);
    left: -2px;
    top: ${100+30}px;
`

const ArrowContainer = styled.div<types>`
    position: absolute;
    left: ${({x}) => x}px;
    top: ${({y}) => y}px;
    cursor: pointer;
    transform: rotate(${({deg}) => deg}deg);
`

export default function Arrow({...types}): React.FC<types> {
    return (
        <div>
            <ArrowContainer x={types.x} y={types.y} deg={types.degree}>
                <ArrowHead />
                <ArrowBarStyle />
                <ArrowTailStyle />
            </ArrowContainer>
        </div>
    );

}