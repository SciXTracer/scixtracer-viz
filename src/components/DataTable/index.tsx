import { useState } from "react";

type DataTableItem = {
    data_id: number,
    location: number,
    format: string,
  } & {
    [key: string]: string | number | boolean;
  };

type DataTableProps = {
    table: DataTableItem[],
    openData: (arg0: number)=>void,
    closeData: (arg0: number)=>void
}

export default function DataTable(props: DataTableProps){

    function openData(data_id: number){
        props.openData(data_id)
    }

    function closeData(data_id: number){
        props.closeData(data_id)
    }

    function make_column(key: string, idx: number){
        if (key == "data_id"){
            return <th className="text-nowrap" key={idx}>ID</th>
        }
        else if (key == "location"){
            return <th className="text-nowrap" key={idx}>Location</th>
        }
        else if (key == "format"){
            return <th className="text-nowrap" key={idx}>Format</th>
        }
        else {
            return <th className="text-nowrap" key={idx}>{key}</th>
        }
    }

    return (
        <table className="table table-hover table-sm">
            <thead>
                <tr>
                    {props.table && Object.keys(props.table[0]).map((key, idx) => make_column(key, idx))}
                    <th className="text-center text-nowrap">Select</th>
                </tr>
            </thead>
            <tbody>    
                {props.table && props.table.map(item => <DataTableItemElt key={item.data_id} item={item} openData={openData} closeData={closeData} />)}
            </tbody>  
        </table> 
    )
}

type DataTableItemEltProps = {
    item: DataTableItem
    openData: (arg0: number)=>void
    closeData: (arg0: number)=>void
}

function DataTableItemElt(props: DataTableItemEltProps){
    const [checked, setChecked] = useState(false);

    function open(){
        if (!checked){
            props.openData(props.item.data_id);
        }
        else{
            props.closeData(props.item.data_id);
        }
        setChecked(!checked);
    }

    return (
        <tr>
            {Object.keys(props.item).map((key, idx) => <td className="text-nowrap" style={{fontSize: "12px"}} key={idx}>{props.item[key]}</td>)}
            <td className="text-center"><input className="form-check-input" type="checkbox" onClick={open} /></td>
        </tr>
    )
}