import React, {useState, useEffect} from "react";
import { XYPlot, XAxis, YAxis, LineMarkSeries
, VerticalGridLines, HorizontalGridLines} from "react-vis";

// FIXME: modal style might affect react-vis style.
type GraphPropType = {
    width: number
    height: number
    dataType: string
    ioType: string
}

// type dataType = {
//     time: string[]
//     value: number[]
//     description?: string
// }

const GraphPanel = (props: GraphPropType) => {

    let yDomain = [0, 1000];


    const [data, setData] = useState<any>(null);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch("./data.json");
            const json = await res.json();
            const X: string[] = json[props.dataType][props.ioType]["time"];
            const Y: number[] = json[props.dataType][props.ioType]["value"];
            const description: string|null = json[props.dataType][props.ioType]["description"];
            let result: {x: string, y: number}[] = [];
            for(let i=0;i < X.length; i++) {
                result.push({x: X[i], y: Y[i]});
            }
            setData({result, description});
        }
        getData();
    }, []);

    return (
        <div>
            {data?.description}
            <XYPlot width={props.width} height={props.height} xType="ordinal" yDomain={yDomain}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis
                    title="X"
                    style={{fontSize: 10}}/>
                <YAxis title="Y" style={{fontSize: 10}}/>
                <LineMarkSeries data={data?.result} style={{fill: "none"}}/>
            </XYPlot>
        </div>
    );
}
export default GraphPanel;