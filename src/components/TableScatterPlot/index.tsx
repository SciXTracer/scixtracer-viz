import { useEffect, useState } from "react";
import {Table} from "../../models/models"
import Plot from "react-plotly.js";

type TableScatterPlotProps = {
    table: Table
    xcolumn: string
    ycolumn: string
    title: string
}

/**
 * @component Component to display a line chart
 * @param {TableScatterPlotProps} props props
 */
export default function TableScatterPlot(props: TableScatterPlotProps){
    const [data, setData] = useState(null);

    useEffect(()=> {
        if (props.table){
            var values = [{
                    x: Object.values(props.table[props.xcolumn]),
                    y: Object.values(props.table[props.ycolumn]),
                    mode: 'markers',
                    type: "scatter"
                }]
            setData(values);
        }
    }, [props.table])

    return (
        <Plot
        data={data}
        layout={{
          title: props.title,
          xaxis: {
            title: props.xcolumn,
          },
          yaxis: {
            title: props.ycolumn,
          },
        }}
      />
    )
}