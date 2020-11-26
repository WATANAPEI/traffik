import React, {useState, useEffect} from "react";
import { XYPlot, LineSeries, XAxis, YAxis, HorizontalGridLines, VerticalGridLines } from "react-vis";

// FIXME: modal style might affect react-vis style.
type SamplePropsTypes = {
    width: number
    height: number;
}

type DataTypes = {
    x: string
    y: number
}

const SampleLine = (props: SamplePropsTypes) => {

    const xDomain = [-1, 3];
    const yDomain = [-5, 15];
    const verticalTickValues = [];
    const horizontalTickValues = [0];

    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            // return [
            //     {x: -1, y: 10},
            //     {x: 0, y: 5},
            //     {x: 1, y: 3},
            //     {x: 2, y: -5},
            //     {x: 3, y: 15}
            // ];
            const res = await fetch("./data.json");
            // console.log(res);
            // console.log(await res.json());
            const json = await res.json();
            const X_A1 = json["A1"]["in"]["time"];
            const Y_A1 = json["A1"]["in"]["value"];
            let result;
            for(let time of X_A1) {
                for(let value of Y_A1) {
                    result.push({x: time, y: value});
                }
            }

            setData(result);
        }
        getData();
    }, []);

    return (
        <div>
            React Vis Test
            <XYPlot width={props.width} height={props.height} xType="ordinal" {...{xDomain, yDomain}}>
                <LineSeries data={data} style={{fill: "none"}}/>
                <XAxis title="X" />
                <YAxis title="Y" />
            </XYPlot>
        </div>
    );
}
export default SampleLine;