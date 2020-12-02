import React, {useState} from "react";
import {ReactComponent as Head} from "../svg/arrowhead.svg";
import styled from "styled-components";
import Modal from "react-modal";
import GraphPanel from "./TrafficGraph";

const ArrowHeadStyle = styled(Head)`
    cursor: pointer;
`

const ArrowTailStyle = styled(Head)`
    cursor: pointer;
    position: absolute;
    transform: rotate(180deg);
    left: -2px;
    top: ${100+30}px;
`

type HeadType = "head"|"tail";

type types = {
    headType: HeadType
    dataType: string
    ioType: string
};

Modal.setAppElement("#root");

export function ArrowHead(prop: types) {
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
            {prop.headType === "head"
                ? <ArrowHeadStyle onClick={openModal} data-for="test"/>
                : <ArrowTailStyle onClick={openModal} />}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <GraphPanel width={1200} height={500} dataType={prop.dataType} ioType={prop.ioType}></GraphPanel>
                <button onClick={closeModal}>close</button>
            </Modal>
        </div>
    );


}