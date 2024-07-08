import { useEffect, useState } from "react";
import {Table} from "../../models/models"
import Plot from "react-plotly.js";

type TableLineChartProps = {
    table: Table
    columns: string[]
    index: string
}

/**
 * @component Component to display a line chart
 * @param {TableLineChartProps} props props
 * @param {Table} obj.table Table that contains the data to display
 * @param {string[]} obj.columns Name of the columns to display as line
 * @param {string} obj.index Name of the columns to use for x-axis
 */
export default function TableLineChart(props: TableLineChartProps){
    const [data, setData] = useState(null);

    useEffect(()=> {
        if (props.table){
            var values = [];
            for(var i=0; i<props.columns.length ; i++){
                console.log('DATA COL=', props.table[props.columns[i]])
                values.push({
                    x: Object.keys(props.table[props.columns[i]]),
                    y: Object.values(props.table[props.columns[i]]),
                    type: "scatter",
                })
            }
            console.log('DATA VIEWER=', values)
            setData(values);
        }
    }, [props.table])

    return (
        <Plot
        data={data}
        layout={{
          title: "Growth Rate in Boys",
          xaxis: {
            title: "Age (years)",
          },
          yaxis: {
            title: "Height (inches)",
          },
        }}
      />
    )
}