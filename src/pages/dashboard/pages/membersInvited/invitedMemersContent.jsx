import { useRef, useState } from "react"
import { MemberActionTable } from "./actiontable"
import { MemberTable } from "./membertable"
import { Modal } from "../../../../components/modal/modal"

export const InvitedMembersContent=()=>{
    const[
        activeView,
        setActiveView
    ]=useState({name:"Tous les membres invités",component:""})
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
                            name:"Tous les membres invités",
                            component:<MemberTable
                                setModalBody={setModalBody}
                                hideModal={hideModal}
                            />
                        },
                        {
                            name:"Accepté",
                            component:<MemberActionTable
                                 setModalBody={setModalBody}
                                 hideModal={hideModal}
                            />
                        },
                        {
                            name:"En attente",
                            component:<MemberActionTable
                                 setModalBody={setModalBody}
                                 hideModal={hideModal}
                            />
                        },{
                            name:"Rejeté",
                            component:<MemberActionTable
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
                        <MemberTable
                            setModalBody={setModalBody}
                            hideModal={hideModal}
                        />
                    ):activeView.component
                }
            </div>
            <Modal
                body={modalbody}
                small={true}
                hidemodal={hideModal}
                id="biblioBackdrop2"
            />
        </div>
    )
}