import { useEffect, useState } from "react"
import MainLayout from "../../layouts/MainLayout"
import Datasets from "../../components/Datasets"
import { getDatasets } from "../../api/datasets";

export default function Home({}){

    const [datasets, setDatasets] = useState([{uri: "toto", name: "titi", description:"Hello"}])

    useEffect( () => {
      getDatasets().then(x => {
          setDatasets(x);
          });
    }, [])

    function openDataset(uri: string){
        console.log("Datasets page hask to open:" + uri);
    }

    return(
        
        <MainLayout>
            <div className="container">
                <Datasets datasets={datasets} openDataset={openDataset}></Datasets>    
            </div>        
        </MainLayout>
    )
}