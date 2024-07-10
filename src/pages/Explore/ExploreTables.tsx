import DataTable from "../../components/DataTable"
import LocationTable from "../../components/LocationsTable"

type ExploreTablesProps = {
    data: any,
    locations: any,
    openLocation: (arg0: number)=>void,
    closeLocation: (arg0: number)=>void,
    openData: (arg0: number)=>void,
    closeData: (arg0: number)=>void,
}

export default function ExploreTables(props: ExploreTablesProps){

    return (
        <div className="row">
            <div className="col-4">
                <LocationTable table={props.locations} openLocation={props.openLocation} closeLocation={props.closeLocation} />
            </div>
            <div className="col-8">
                <DataTable table={props.data} openData={props.openData} closeData={props.closeData} />
            </div>
        </div>
    )
}