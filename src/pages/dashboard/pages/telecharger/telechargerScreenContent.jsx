import interest from "../../../../assets/interest.svg"
import livre from "../../../../assets/livre.svg"
import journal from "../../../../assets/journal.svg"
import magazine from "../../../../assets/magazine.svg"
import paperz from "../../../../assets/paperz.svg"
import these from "../../../../assets/these.svg"
import { useRef, useState } from "react"
import { Modal } from "../../../../components/modal/modal"
import { LivresCard } from "./livresCard"
import { Text } from "../../../../elements/text"

export const TelechargerContent=()=>{
     const[
        activeView,
        setActiveView
    ]=useState("Mes interest")

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
                            name:"Mes interest",
                            icon:interest
                        },
                        {
                            name:"Livres",
                            icon:livre
                        },
                        {
                            name:"Journaux",
                            icon:journal
                        },
                        {
                            name:"Thèse",
                            icon:these
                        },
                        {
                            name:"Les magazines",
                            icon:magazine
                        },
                        {
                            name:"Papiers",
                            icon:paperz
                        }

                    ].map((nav,index)=>{
                        const{
                            name,
                            icon
                        }=nav
                        return(
                            <div
                                key={index}
                                onClick={()=>setActiveView(name)}
                                className={`${ activeView === name? "activeroute":null} me-5 d-flex align-items-center p-2`}>
                                <span className="me-2">
                                    <img 
                                        src={icon}
                                        alt="object not found"
                                        className="dashboard-icon"
                                    />
                                </span>
                                <span>
                                    <Text
                                        title={name}
                                        style="fs-7  fw-600 text-start"
                                    />
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <LivresCard
                    setModalBody={setModalBody}
                    hideModal={hideModal}
                />
            </div>
            <Modal
                body={modalbody}
                small={true}
                hidemodal={hideModal}
            />
        </div>
    )
}