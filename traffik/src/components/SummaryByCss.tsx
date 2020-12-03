import React from "react";
import styled from "styled-components";
import Circle from "./Circle";
import Picture from "./Picture";
import Arrow from "./Arrow";
import Hexagon from "./Hexagon";

const SummaryContainer = styled.div`
    width: 800px;
    height: 600px;
    margin: 10px auto;
    background-color: #ccc;
    padding: 10px;
    position: relative;
`;

export default function Summary() {
    const descDomestic = `B3: 国外で交換されるトラヒック
     - プライベート・ピアリング
     - トランジット
     - 国外IXにおけるパブリック・ピアリングなどにより交換されるトラヒック`;
    const descISP = `協力ISP9社
     - (株)インターネットイニシアチブ
     - NTTコミュニケーションズ(株)
     - (株)NTTぷらら
     - (株)オプテージ
     - KDDI(株)
     - (株)ジュピターテレコム
     - ソフトバンク(株)
     - ニフティ(株)
     - ビッグローブ(株)`;
    return (
        <SummaryContainer>
            <Circle x={50} y={50} r={100} circleText="国内" color="#FFFF88"
            popupText={descDomestic} />
            <Circle x={230} y={220} r={140} circleText="ISP" color="#CCCCFF"
            popupText={descISP}/>
            <Circle x={450} y={50} r={100} circleText="国外" color="#FFAD90"/>
            <Picture url="a1.png" x={50} y={450}/>
            <Picture url="a2.png" x={430} y={450}/>
            <Arrow x={190} y={215} deg={135} dataType="B3"/>
            <Arrow x={300} y={210} deg={-135} dataType="B2"/>
            <Arrow x={200} y={310} deg={45} dataType="A1"/>
            <Arrow x={310} y={310} deg={-46} dataType="A2"/>
            <Arrow x={380} y={250} deg={-90} dataType="B1"/>
            <Hexagon x={590} y={200}/>

        </SummaryContainer>
    );
}
