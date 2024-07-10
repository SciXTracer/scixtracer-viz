import { useState, useEffect } from "react"
import MainLayout from "../../layouts/MainLayout"
import ExploreTables from "./ExploreTables"

import {viewData, getLocations} from "../../api/data"


type ExploreProps = {
    dataset_uri: string,
}

export default function Explore(props: ExploreProps){
    const [data, setData] = useState(null);
    const [locations, setLocations] = useState(null);
    const [selectedData, setSelectedData] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);

    useEffect( () => {
        getLocations(props.dataset_uri).then(x => {
            console.log("Get the response locations Explore=");
            console.log(x);
            setLocations(x);
            });
    }, [props.dataset_uri])

    useEffect( () => {        
        viewData(props.dataset_uri, selectedLocations).then(x => {
            console.log("Get the response data in Demo=");
            console.log(x);
            setData(x);
            });
      }, [selectedLocations])

    function openData(id: number){
        setSelectedData([...selectedData, id]);
    }
    function closeData(id: number){
        setSelectedData(selectedData.filter(e => e !== id));
    }
    function openLocation(id: number){
        setSelectedLocations([...selectedLocations, id]);
    }
    function closeLocation(id: number){
        setSelectedLocations(selectedLocations.filter(e => e !== id));
    }

    return(
        <MainLayout>
            <ExploreTables 
                data={data} 
                locations={locations} 
                openData={openData} 
                closeData={closeData} 
                openLocation={openLocation} 
                closeLocation={closeLocation} 
            />

        </MainLayout>
    )
}