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


const GraphPanel = (props: GraphPropType) => {

    const [data, setData] = useState<any>(null);
    useEffect(() => {
        console.log("useEffect invoked.");
        const getData = async () => {
            const res = await fetch("./data.json");
            const json = await res.json();
            const X: string[] = json[props.dataType][props.ioType]["time"];
            const Y: number[] = json[props.dataType][props.ioType]["value"];
            const title: string|null = json[props.dataType][props.ioType]["title"];
            let result: {x: string, y: number}[] = [];
            for(let i=0;i < X.length; i++) {
                result.push({x: X[i], y: Y[i]});
            }
            setData({result, title});
        }
        getData();
    }, []);

    const maxY = (dataList?: {x: string, y: number}[]) => {
        let max: number = 1000;
        if(dataList === undefined||null) {
            return 1000;
        }
        for(let e of dataList) {
            if(e.y > max) {
                max = e.y;
            }
        }
        return max;
    }

    return (
        <div>
            {data?.title}
            <XYPlot
                width={props.width}
                height={props.height}
                xType="ordinal"
                yDomain={[0, maxY(data?.result)]}
            >
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
export default GraphPanel