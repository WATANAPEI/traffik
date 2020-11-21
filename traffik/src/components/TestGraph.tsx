import React from "react";
import { XYPlot, LineSeries, XAxis, YAxis } from "react-vis";

type SamplePropsTypes = {
    width: number
    height: number;
}

type DataTypes = {
    x: number
    y: number
}

const SampleLine = (props: SamplePropsTypes) => {
    const data: DataTypes[] = [
        {x:0, y:18},
        {x:1, y:19},
        {x:2, y:20}
    ];

    return (
        <div>
            React Vis Test
            <XYPlot width={props.width} height={props.height}>
                <LineSeries data={data} />
                <XAxis />
                <YAxis />
            </XYPlot>
        </div>
    );
}
export default SampleLine;