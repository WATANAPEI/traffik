import React, {useState} from "react";
import {ReactComponent as ArrowHead} from "../svg/arrowhead.svg";
import {ReactComponent as ArrowTail} from "../svg/arrowhead.svg";
import styled from "styled-components";
import Modal from "react-modal";
import SampleLine from "./TestGraph";

type types = {
    x: number
    y: number
    deg: number
    text: string
}

const ArrowHeadStyle = styled(ArrowHead)`
    cursor: pointer;
`

//Load Svg files to render arrowbar with required text
const ArrowBarStyle = styled.svg<{text: string}>`
    position: absolute;
    left: 30px;
    top: 45px;
    background-image: url(./arrowbar_${({text}) => text}.svg);
    background-repeat: no-repeat;
`

const ArrowTailStyle = styled(ArrowTail)`
    position: absolute;
    transform: rotate(180deg);
    left: -2px;
    top: ${100+30}px;
    cursor: pointer;
`

const ArrowContainer = styled.div<{x: number, y: number, deg: number}>`
    position: absolute;
    left: ${({x}) => x}px;
    top: ${({y}) => y}px;
    transform: rotate(${({deg}) => deg}deg);
`

Modal.setAppElement("#root");

export default function Arrow({...types}: types) {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        console.log("opened modal.");
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <ArrowContainer x={types.x} y={types.y} deg={types.deg}>
                <ArrowHeadStyle onClick={openModal}/>
                <ArrowBarStyle text={types.text}/>
                <ArrowTailStyle onClick={openModal}/>
            </ArrowContainer>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <h2>Hello</h2>
                <SampleLine width={300} height={300}></SampleLine>
                <button onClick={closeModal}>close</button>
            </Modal>
        </div>
    );


}