import { LectureComponent } from "./lectureComponent";
import interest from "../../../../assets/interest.svg"
import livre from "../../../../assets/livre.svg"
import journal from "../../../../assets/journal.svg"
import magazine from "../../../../assets/magazine.svg"
import paperz from "../../../../assets/paperz.svg"
import these from "../../../../assets/these.svg"
import { useState } from "react";
import { Text } from "../../../../elements/text";



export const BookSection=()=>{
    const[
        section,
        setActiveSection
    ]=useState({
        name:"Mes interest",
        component:<LectureComponent/>
    })
    return(
        <div>
            <div className="d-flex overflowx w-100 mb-4">
                {
                    [
                        {
                            name:"Mes interest",
                            icon:interest,
                            component:<LectureComponent/>
                        },
                        {
                            name:"Livres",
                            icon:livre,
                            component:<LectureComponent/>
                        },
                        {
                            name:"Journaux",
                            icon:journal,
                            component:<LectureComponent/>
                        },
                        {
                            name:"Thèse",
                            icon:these,
                            component:<LectureComponent/>
                        },
                        {
                            name:"Les magazines",
                            icon:magazine,
                            component:<LectureComponent/>
                        },
                        {
                            name:"Papiers",
                            icon:paperz,
                            component:<LectureComponent/>
                        }

                    ].map((nav,index)=>{
                        const{
                            name,
                            icon,
                            component
                        }=nav
                        return(
                            <div
                                key={index}
                                onClick={()=>setActiveSection({
                                    name,
                                    component
                                })}
                                className={`${section.name === name? "activeroute":null} me-5 d-flex align-items-center p-2`}>
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
                {section.component}
            </div>
        </div>
    )
}