import { DatasetsItemInfo, DatasetsInfo } from "../../models/models"

type DatasetProps = {
    datasets: DatasetsInfo
    openDataset: (arg0: string)=>void
}

export default function Datasets(props: DatasetProps){

    function openDataset(uri: string){
        props.openDataset(uri)
    }

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
        <tbody>    
            {props.datasets.map(item => <DatasetItem key={item.uri} item={item} openDataset={openDataset} />)}
        </tbody>  
      </table> 
    )
}

type DatasetItemProps = {
    item: DatasetsItemInfo
    openDataset: (arg0: string)=>void
}

function DatasetItem(props: DatasetItemProps){

    function open(){
        props.openDataset(props.item.uri)
    }

    return (
        <tr>
            <td><button className="btn btn-primary btn-sm" onClick={open} >Open</button></td>
            <td>{props.item.name}</td>
            <td>{props.item.description}</td>
        </tr>
    )
}