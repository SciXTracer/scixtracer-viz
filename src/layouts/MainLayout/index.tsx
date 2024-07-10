import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import SideBar from "./SideBar";


type LayoutProps = {
    children: ReactNode
  }

export default function MainLayout(props: LayoutProps) {
    const navigate = useNavigate();

    function Open(item: string){
        navigate("/"+item);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-auto bg-dark sticky-top">
                    <SideBar open={Open}></SideBar>
                </div>

                <div className="col-sm p-3 min-vh-100">
                    {props.children}        
                </div>
            </div>
        </div>    
    )
}