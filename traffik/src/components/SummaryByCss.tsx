import React from "react";
import styled from "styled-components";
import Circle from "./Circle";
import Picture from "./Picture";
import Arrow from "./Arrow";
import Hexagon from "./Hexagon";
import Border from "./Border";

const SummaryContainer = styled.div`
    width: 800px;
    height: 600px;
    margin: 10px auto;
    padding: 10px;
    position: relative;
`;



export default function Summary() {
    const descDomestic = `B3: 国外で交換されるトラヒック
     - プライベート・ピアリング
     - トランジット
     - 国外IXにおけるパブリック・ピアリングなど
    により交換されるトラヒック`;
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
    const descAbroad = `B2: 国内で交換されるトラヒック
     - プライベート・ピアリング
     - トランジット
     - 屋内主要IX以外の国内IXにおけるパブリックピアリングなど
    により交換されるトラヒック`;
    const descPeople = `A1: 固定系ブロードバンドサービス契約者(FTTH, DSL, CATV, FWA)のトラヒック
    *A1は、次のトラヒックを含む。
     - 一部ISPの公衆無線LANサービスのトラヒックの一部
     - 一部移動通信事業者のフェムトセルサービスのトラヒックの一部`;
    const descCompany = `A2: その他専用線などの契約者のトラヒック
    *A2は、次のトラヒックを含む。
     - 協力ISPのデータセンター、CDNキャッシュ、その他内部トラヒックを含む`;
    const descIX = `C: 国内主要IXにおけるトラヒック
    インターネットマルチフィード（株）
    エクイニクス・ジャパン（株）
    日本インターネットエクスチェンジ（株）
    BBIX（株）
    WINDEProject
    がそれぞれ運営するIX`;
    return (
        <SummaryContainer>
            <Border x={0} y={0} />
            <Border x={0} y={400} />
            <Circle x={50} y={50} r={100} circleText="国外" color="#FFFF88"
            popupText={descDomestic} />
            <Circle x={230} y={220} r={140} circleText="ISP" color="#CCCCFF"
            popupText={descISP}/>
            <Circle x={450} y={50} r={100} circleText="国内" color="#FFAD90"
            popupText={descAbroad} />
            <Picture url="a1.png" x={50} y={450} popupText={descPeople}/>
            <Picture url="a2.png" x={430} y={450} popupText={descCompany}/>
            <Arrow x={190} y={215} deg={135} dataType="B3"/>
            <Arrow x={300} y={210} deg={-135} dataType="B2"/>
            <Arrow x={200} y={310} deg={45} dataType="A1"/>
            <Arrow x={310} y={310} deg={-46} dataType="A2"/>
            <Arrow x={380} y={250} deg={-90} dataType="B1"/>
            <Hexagon x={590} y={200} popupText={descIX}/>

        </SummaryContainer>
    );
}
