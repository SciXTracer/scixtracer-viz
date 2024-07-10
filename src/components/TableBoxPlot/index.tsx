import { useEffect, useState } from "react";
import {Table} from "../../models/models"
import Plot from "react-plotly.js";

type TableBoxPlotProps = {
    table: Table
    columns: string[]
    title: string
    xlabel: string
    ylabel: string
}

/**
 * @component Component to display a line chart
 * @param {TableBoxPlotProps} props props
 */
export default function TableBoxPlot(props: TableBoxPlotProps){
    const [data, setData] = useState(null);

    useEffect(()=> {
        if (props.table){
            var values = [];
            for(var i=0; i < props.columns.length ; i++){
                values.push({
                    y: Object.values(props.table[props.columns[i]]),
                    boxpoints: 'all',
                    jitter: 0.3,
                    pointpos: -1.8,
                    type: 'box',
                    name: props.columns[i]
                  })
            }
            setData(values);
        }
    }, [props.table])

    return (
        <Plot
        data={data}
        layout={{
          title: props.title,
          xaxis: {
            title: props.xlabel,
          },
          yaxis: {
            title: props.ylabel,
          },
        }}
      />
    )
}