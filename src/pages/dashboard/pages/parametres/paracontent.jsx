import { useState } from "react"
import { Faturation } from "./faturation"
import { MotDePassView } from "./motDePassView"
import { ProfileView } from "./profilView"
import { useRef } from "react"

export const ParametresContent=()=>{
    const[
        activeView,
        setActiveView
    ]=useState({name:"Profil",component:""})
    
    return(
        <div>
            <div className="d-flex overflowx mb-3">
                {
                    [
                        {
                            name:"Profil",
                            component:<ProfileView/>
                        },
                        {
                            name:"Mot de passe",
                            component:<MotDePassView/>
                        },
                        {
                            name:"Facturation",
                            component:<Faturation
                            setActiveView={setActiveView}
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
                        <ProfileView/>
                    ):activeView.component
                }
            </div>
        </div>
    )
}