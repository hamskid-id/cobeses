import { useState } from "react";
import { Modal } from "../../../components/modal/modal"
import { Header } from "./header"
import { SideNav } from "./sideNav"

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
    return(
        <>
            <div className="row dashboardLayout dashboardSide">
                <div className="col-md-2">
                    <SideNav
                        activeRoute={activeRoute}
                        setModal={setModal}
                    />
                    <Modal
                        body={modal.body}
                        small={modal.size==="small"?true:false}
                        large={modal.size==="large"?true:false}
                        xlarge={modal.size==="xlarge"?true:false}
                    />
                </div>
                <div className="col-md-10 border dashboardSide">
                    <div>
                        <Header/>
                        <div className="px-4">
                            {BoardChildren}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}