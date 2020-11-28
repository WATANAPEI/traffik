import React, {useState, useEffect} from "react";
import { XYPlot, XAxis, YAxis, LineMarkSeries
, VerticalGridLines, HorizontalGridLines} from "react-vis";

// FIXME: modal style might affect react-vis style.
type SamplePropsTypes = {
    width: number
    height: number;
}

const SampleLine = (props: SamplePropsTypes) => {

    let yDomain = [0, 1000];


    const [data, setData] = useState<any[]>();
    useEffect(() => {
        const getData = async () => {
            const res = await fetch("./data.json");
            const json = await res.json();
            const X_A1: string[] = json["A1"]["in"]["time"];
            const Y_A1: number[] = json["A1"]["in"]["value"];
            let result: {x: string, y: number}[] = [];
            for(let i=0;i < X_A1.length; i++) {
                result.push({x: X_A1[i], y: Y_A1[i]});
            }
            setData(result);
        }
        getData();
    }, []);

    return (
        <div>
            React Vis Test
            <XYPlot width={props.width} height={props.height} xType="ordinal" yDomain={yDomain}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis
                    title="X"
                    style={{fontSize: 10}}/>
                <YAxis title="Y" style={{fontSize: 10}}/>
                <LineMarkSeries data={data} style={{fill: "none"}}/>
            </XYPlot>
        </div>
    );
}
export default SampleLine;