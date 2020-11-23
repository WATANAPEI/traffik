import React, {useState, useEffect} from "react";
import { XYPlot, LineSeries, XAxis, YAxis, HorizontalGridLines, VerticalGridLines } from "react-vis";

// FIXME: modal style might affect react-vis style.
type SamplePropsTypes = {
    width: number
    height: number;
}

type DataTypes = {
    x: number
    y: number
}

const SampleLine = (props: SamplePropsTypes) => {

    const xDomain = [-1, 3];
    const yDomain = [-5, 15];
    const verticalTickValues = [];
    const horizontalTickValues = [0];

    const [data, setData] = useState<DataTypes[]>([]);
    const getData = () => {
        return [
            {x: -1, y: 10},
            {x: 0, y: 5},
            {x: 1, y: 3},
            {x: 2, y: -5},
            {x: 3, y: 15}
        ];
    }

    useEffect(() => {
        const fetchedData = getData();
        setData(fetchedData);
    }, []);

    return (
        <div>
            React Vis Test
            <XYPlot width={props.width} height={props.height} {...{xDomain, yDomain}}>
                <HorizontalGridLines />
                {!verticalTickValues || verticalTickValues.length ? (
                    <VerticalGridLines tickValues={verticalTickValues} />
                ) : null}
                {!horizontalTickValues || horizontalTickValues.length ? (
                    <HorizontalGridLines tickValues={horizontalTickValues} />
                ) : null}
                <LineSeries data={data}/>
                <XAxis title="X" />
                <YAxis title="Y" />
            </XYPlot>
        </div>
    );
}
export default SampleLine;