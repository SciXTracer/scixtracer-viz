import { useState } from "react";
import logo from "../../assets/logo.png"

type SideBarProps = {
    open: (arg0: string)=>void
}


export default function SideBar(props: SideBarProps){
    const [homeColor, setHomeColor] = useState("#ffffff");
    const [exploreColor, setExploreColor] = useState("#018181");


    function openExplore(){
        setHomeColor("#018181");
        setExploreColor("#ffffff");
        props.open("explore");
    }

    function openHome(){
        setHomeColor("#ffffff");
        setExploreColor("#018181");
        props.open("home");
    }

    return (
        <>
            <div className="d-flex flex-sm-column flex-row flex-nowrap bg-dark align-items-center sticky-top">
                <a href="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                    <img src={logo} width="50px"/>
                </a>
                <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100 px-3 align-items-center">
                    <li>
                        <a onClick={openHome} className="nav-link py-3 px-1" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                            <i style={{color: homeColor}} className="bi-house fs-1"></i>
                        </a>
                    </li>
                    <li>
                        <a onClick={openExplore} className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                            <i style={{color: exploreColor}} className="bi-speedometer2 fs-1"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
