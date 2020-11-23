import React, {useState} from "react";
import {ReactComponent as Head} from "../svg/arrowhead.svg";
import styled from "styled-components";
import Modal from "react-modal";
import SampleLine from "./TestGraph";
//import ReactTooltip from "react-tooltip";

// const StyledTooltip = styled(ReactTooltip)`
//     max-width: 100px;
//     white-space: normal;
// `

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

    // const Tooltip = ({ ...props }) => (
    //     <ReactTooltip effect="solid" place="top" {...props} />
    // )

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
                <h2>Hello</h2>
                <SampleLine width={300} height={300}></SampleLine>
                <button onClick={closeModal}>close</button>
            </Modal>
        </div>
    );


}