import { useState } from "react";

type LoacationItem = {
    location_id: number
  } & {
    [key: string]: string | number | boolean;
  };

type LocationTableProps = {
    table: LoacationItem[]
    openLocation: (arg0: number)=>void
    closeLocation: (arg0: number)=>void
}

export default function LocationTable(props: LocationTableProps){

    function openLocation(location_id: number){
        props.openLocation(location_id)
    }

    function closeLocation(location_id: number){
        props.closeLocation(location_id)
    }

    function make_column(key: string, idx: number){
        if (key == "location_id"){
            return <th className="text-nowrap" key={idx}>ID</th>
        }
        else {
            return <th className="text-nowrap" key={idx}>{key}</th>
        }
    }

    return (
        <table className="table table-hover table-sm">
            <thead>
                <tr className="text-nowrap">
                    {props.table && Object.keys(props.table[0]).map((key, idx) => make_column(key, idx))}
                    <th className="text-center text-nowrap">Select</th>
                </tr>
            </thead>
            <tbody>    
                {props.table && props.table.map(item => <LocationTableItem key={item.location_id} item={item} openLocation={openLocation} closeLocation={closeLocation} />)}
            </tbody>  
        </table> 
    )
}

type DatasetItemProps = {
    item: LoacationItem
    openLocation: (arg0: number)=>void
    closeLocation: (arg0: number)=>void
}

function LocationTableItem(props: DatasetItemProps){
    const [checked, setChecked] = useState(false);

    function open(){
        if (!checked){
            props.openLocation(props.item.location_id);
        }
        else{
            props.closeLocation(props.item.location_id);
        }
        setChecked(!checked);
    }

    return (
        <tr>
            {Object.keys(props.item).map((key, idx) => <td className="text-nowrap" style={{fontSize: "12px"}} key={idx}>{props.item[key]}</td>)}
            <td className="text-center text-nowrap"><input className="form-check-input" type="checkbox" onClick={open} /></td>
        </tr>
    )
}