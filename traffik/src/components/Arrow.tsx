import React, {useState} from "react";
import {ReactComponent as ArrowBar} from "../svg/arrowbar.svg";
import {ReactComponent as ArrowHead} from "../svg/arrowhead.svg";
import {ReactComponent as ArrowTail} from "../svg/arrowhead.svg";
import styled from "styled-components";
import Modal from "react-modal";

type types = {
    x: number
    y: number
    deg: number
}

const ArrowHeadStyle = styled(ArrowHead)`
    cursor: pointer;
`

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
    cursor: pointer;
`

const ArrowContainer = styled.div<types>`
    position: absolute;
    left: ${({x}) => x}px;
    top: ${({y}) => y}px;
    transform: rotate(${({deg}) => deg}deg);
`

Modal.setAppElement("#root");

export default function Arrow({...types}): React.FC<types> {
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
            <ArrowContainer x={types.x} y={types.y} deg={types.degree}>
                <ArrowHeadStyle onClick={openModal}/>
                <ArrowBarStyle />
                <ArrowTailStyle onClick={openModal}/>
            </ArrowContainer>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <h2>Hello</h2>
                <button onClick={closeModal}>close</button>
            </Modal>
        </div>
    );

}