import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import LocationTable from "../../components/LocationsTable"
import TableLineChart from "../../components/TableLineChart";
import TableScatterPlot from "../../components/TableScatterPlot";
import TableBoxPlot from "../../components/TableBoxPlot";
import TableBarChart from "../../components/TableBarChart";
import TableHistogram from "../../components/TableHistogram";
import DataTable from "../../components/DataTable"
import { getData, getLocations, viewData } from "../../api/data";

export default function Demo({}){
    const [table, setTable] = useState(null);
    const [locations, setLocations] = useState(null);
    const [dataList, setDataList] = useState(null);

    useEffect( () => {
        getData("demo_spots_call", "/demo_spots_call/data/table/000000001.csv").then(x => {
            console.log("Get the response in Demo=");
            console.log(x);
            setTable(x);
            });
        
        getLocations("demo_spots").then(x => {
            console.log("Get the response location in Demo=");
            console.log(x);
            setLocations(x);
            });
        
        viewData("demo_spots_call", [1]).then(x => {
            console.log("Get the response data in Demo=");
            console.log(x);
            setDataList(x);
            });
      }, [])

    function openLocation(id: number){
        console.log('Demo clicked open location:', id);
    }

    function closeLocation(id: number){
        console.log('Demo clicked close location:', id);
    }

    function openData(id: number){
        console.log('Demo clicked open data:', id);
    }

    function closeData(id: number){
        console.log('Demo clicked close data:', id);
    }

    return(
        <MainLayout>
            <DataTable table={dataList} openData={openData} closeData={closeData} />
            <LocationTable table={locations} openLocation={openLocation} closeLocation={closeLocation} />
            <TableLineChart table={table} columns={["variable 1", "variable 2", "variable 3"]} index={""} title="Demo line chart" xlabel="Title x" ylabel="Title y"/>
            <TableScatterPlot table={table} xcolumn={"variable 1"} ycolumn={"variable 1"} title="Demo scatter plot"/>
            <TableBoxPlot table={table} columns={["variable 1", "variable 2", "variable 3"]} title="Demo Box plot" xlabel="Title x" ylabel="Title y"/>
            <TableBarChart table={table} columns={["variable 1", "variable 2", "variable 3"]} line_idx={1} title="Demo Box plot" ylabel="Random value"/>
            <TableHistogram table={table} columns={["variable 1", "variable 2", "variable 3"]} title="Demo histogram" xlabel="Title x" ylabel="Title y"/>
        </MainLayout>
    )
}