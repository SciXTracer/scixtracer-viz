import { useEffect, useState } from "react";
import {Table} from "../../models/models"
import Plot from "react-plotly.js";

type TableBarChartProps = {
    table: Table
    columns: string[]
    line_idx: number
    title: string
    ylabel: string
}

/**
 * @component Component to display a line chart
 * @param {TableBarChartProps} props props
 */
export default function TableBarChart(props: TableBarChartProps){
    const [data, setData] = useState(null);

    useEffect(()=> {
        if (props.table){
            var y_values = []
            for (var i = 0 ; i < props.columns.length ; i++){
                y_values.push(Object.values(props.table[props.columns[i]])[0])
            }
            var values = [{
                    x: props.columns,
                    y: y_values,
                    type: 'bar'
                }]
            setData(values);
        }
    }, [props.table])

    return (
        <Plot
        data={data}
        layout={{
          title: props.title,
          yaxis: {
            title: props.ylabel,
          },
        }}
      />
    )
}