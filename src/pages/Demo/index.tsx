import { useEffect, useRef, useState } from "react";
import MainLayout from "../../layouts/MainLayout"
import TableLineChart from "../../components/TableLineChart"
import { getData } from "../../api/data";

export default function Demo({}){
    const [table, setTable] = useState(null);

    useEffect( () => {
        getData("demo_spots_call", "/demo_spots_call/data/table/000000001.csv").then(x => {
            console.log("Get the response in Demo=");
            console.log(x);
            setTable(x);
            });
      }, [])

   

    return(
        <MainLayout>
            <TableLineChart table={table} columns={["variable 1", "variable 2", "variable 3"]} index={""}/>
        </MainLayout>
    )
}