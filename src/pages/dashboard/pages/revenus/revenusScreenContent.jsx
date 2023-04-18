import { useRef, useState } from "react"
import { RetraitTable } from "./retrailtTable"
import { RevenusTable } from "./revenusTable"
import { Stat } from "./stat"
import { Modal } from "../../../../components/modal/modal"

export const RevenusContent=()=>{
    const[
        activeView,
        setActiveView
    ]=useState({name:"Revenus",component:""})
    const[
        modalbody,
        setModalBody
    ]=useState("");

    const hideModal=useRef(null);
    return(
        <div>
            <Stat
                setModalBody={setModalBody}
                hideModal={hideModal}
            />
            <div className="d-flex overflowx mb-3">
                {
                    [
                        {
                            name:"Revenus",
                            component:<RevenusTable
                                setModalBody={setModalBody}
                                hideModal={hideModal}
                            />
                        },
                        {
                            name:"Retraits",
                            component:<RetraitTable
                                 setModalBody={setModalBody}
                                 hideModal={hideModal}
                            />
                        }
                    ].map((view,index)=>{
                        const{
                            name
                        }=view
                        return(
                            <div 
                                key={index}
                                className={`${activeView.name===name?"yellowbuttom":null} pb-2 me-3 pb-2 fs-8`}
                                onClick={()=>setActiveView(view)
                                }
                            >
                                {name}
                            </div>
                        )
                    })
                }
            </div>
            <div>
                {
                    activeView.component===""?(
                        <RevenusTable
                            setModalBody={setModalBody}
                            hideModal={hideModal}
                        />
                    ):activeView.component
                }
            </div>
            <Modal
                body={modalbody}
                hidemodal={hideModal}
                id="biblioBackdrop3"
            />
        </div>
    )
}