import { useRef, useState } from "react"
import { SupportHome } from "./supportHome"
import { Messages } from "./messages"
import { Modal } from "../../../../components/modal/modal"

export const SupportContent=()=>{
    const[
        activeView,
        setActiveView
    ]=useState({name:"Support Home",component:""})

    const[
        modalbody,
        setModalBody
    ]=useState("");

    const hideModal=useRef(null);

    return(
        <div>
            <div className="d-flex overflowx mb-3">
                {
                    [
                        {
                            name:"Support Home",
                            component:<SupportHome
                                setModalBody={setModalBody}
                                hideModal={hideModal}
                            />
                        },
                        {
                            name:"Messages",
                            component:<Messages/>
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
                        <SupportHome
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