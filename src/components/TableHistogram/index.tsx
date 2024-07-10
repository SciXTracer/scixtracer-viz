import { useEffect, useState } from "react";
import {Table} from "../../models/models"
import Plot from "react-plotly.js";

type TableHistogramProps = {
    table: Table
    columns: string[]
    title: string
    xlabel: string
    ylabel: string
}

/**
 * @component Component to display a line chart
 * @param {TableHistogramProps} props props
 */
export default function TableHistogram(props: TableHistogramProps){
    const [data, setData] = useState(null);

    useEffect(()=> {
        if (props.table){
            var values = [];
            for(var i=0; i<props.columns.length ; i++){
                values.push({
                    x: Object.values(props.table[props.columns[i]]),
                    type: "histogram",
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