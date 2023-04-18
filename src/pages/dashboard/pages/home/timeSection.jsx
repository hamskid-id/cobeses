import  dashicon  from "../../../../assets/dash-icon.svg"
import  boxicon  from "../../../..//assets/boxiocn.svg"
import { Text } from "../../../../elements/text"
import { Btn } from "../../../../elements/button"
import { BtnIconTag } from "../../components/btnIconTag"

export const TimeSection=()=>{
    return(
        <div className="d-flex justify-content-between mb-5 wrap">
                <div className="btn-group mb-1" role="group" aria-label="Basic example">
                    {
                        [
                            "12 mois","30 jours","7 jours","24 heures"
                        ].map((time,index)=>{
                            return(
                                <Btn
                                    style="btn border fw-bold br-8"
                                    value={time}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
                <div className="d-flex me-3 mb-1">
                    {
                        [
                            {
                                name:"Sélectionnez une date",
                                icon:boxicon
                            },
                            {
                                name:"Filtres",
                                icon:dashicon 
                            }
                        ].map((btn,index)=>{
                            const{
                                name,icon
                            }=btn
                            return(
                                <BtnIconTag
                                    key={index}
                                    icon={icon}
                                    text={name}
                                    bgStyle={`${index!==0 && "ms-3"} "bg-white border btn br-8"`}
                                    textStyle="text-dark btnfs"
                                />
                            )
                        })
                    }
                </div>
            </div>
    )
}