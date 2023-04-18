import { useState } from "react";
import { Modal } from "../../../components/modal/modal"
import { Header } from "./header"
import { SideNav } from "./sideNav"
import { MobileNav } from "./mobileNav";
import { useRef } from "react";

export const Dashboardlayout=({
    BoardChildren,
    activeRoute
})=>{
    const [
        modal,
        setModal
    ]=useState({
        size:null,
        body:null
    });
    const sideNav= useRef(null);
    return(
        <>
            <div className="row dashboardLayout dashboardSide no-wrap">
                <div className="col-md-2 w-230">
                    <SideNav
                        activeRoute={activeRoute}
                        setModal={setModal}
                        sideNav={sideNav}
                    />
                    <Modal
                        body={modal.body}
                        small={modal.size==="small"?true:false}
                        large={modal.size==="large"?true:false}
                        xlarge={modal.size==="xlarge"?true:false}
                    />
                </div>
                <div 
                    className="col-md-10 dashboardSide"
                    
                >
                    <div>
                        <MobileNav
                            sideNav={sideNav}
                            activeRoute={activeRoute}
                        />
                        <Header
                            activeRoute={activeRoute}
                        />
                        <div className="pdx-4">
                            {BoardChildren}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}