import React, {useState} from "react";
import styled from "styled-components";
import Modal from "react-modal";

type parms = {
    x: number
    y: number
    degree: number
    text: string | null
}

const Arrow = styled.div<{degree: number}>`
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
        /*modify border and top property to change arrow head size*/
        position: absolute;
        content: "";
        width: 0;
        height:0;
        border:50px solid transparent;
        border-left: 50px solid #5bc0de; /*height of arrow head*/
        left:80px;
        top:-30px;
    }
    &:after {
        /*modify border and top property to change arrow head size*/
        position: absolute;
        content: "";
        width: 0;
        height:0;
        border:50px solid transparent;
        border-right: 50px solid #5bc0de; /*height of arrow head*/
        right:80px;
        top:-30px;
    }
`;

const BidirectionalArrowContainer = styled.div<{x: number, y:number}>`
    position: absolute;
    left: ${({x}) => x}px;
    top: ${({y}) => y}px;
    cursor: pointer;
`;

const TextContainer = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;

`;

Modal.setAppElement("#root");

export default function BidirectionalArrow({...parms}: parms) {
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
            <BidirectionalArrowContainer x={parms.x} y={parms.y} onClick={openModal}>
                <Arrow degree={parms.degree}>
                    <TextContainer>
                        {parms.text}
                    </TextContainer>
                </Arrow>
            </BidirectionalArrowContainer>
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
    )
}
