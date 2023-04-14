import { useState } from "react"
import { MemberActionTable } from "./actiontable"
import { MemberTable } from "./membertable"

export const InvitedMembersContent=()=>{
    const[
        activeView,
        setActiveView
    ]=useState({name:"Tous les membres invités",component:<MemberTable/>})
    return(
        <div>
            <div className="d-flex overflowx mb-3">
                {
                    [
                        {
                            name:"Tous les membres invités",
                            component:<MemberTable/>
                        },
                        {
                            name:"Accepté",
                            component:<MemberActionTable/>
                        },
                        {
                            name:"En attente",
                            component:<MemberActionTable/>
                        },{
                            name:"Rejeté",
                            component:<MemberActionTable/>
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
                {activeView.component}
            </div>
        </div>
    )
}