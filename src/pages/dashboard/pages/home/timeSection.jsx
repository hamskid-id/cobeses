import  dashicon  from "../../../../assets/dash-icon.svg"
import  boxicon  from "../../../..//assets/boxiocn.svg"
import { Text } from "../../../../elements/text"
import { Btn } from "../../../../elements/button"

export const TimeSection=()=>{
    return(
        <div className="d-flex justify-content-between mb-5">
                <div className="btn-group" role="group" aria-label="Basic example">
                    {
                        [
                            "12 mois","30 jours","7 jours","24 heures"
                        ].map((time,index)=>{
                            return(
                                <Btn
                                    style="btn border fs-8 fw-bold"
                                    value={time}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
                <div className="d-flex me-3">
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
                                <div 
                                    key={index}
                                    className="d-flex border p-2 px-4 align-items-center ms-3 box"
                                >
                                    <span className="me-2">
                                        <img 
                                            src={icon}
                                            alt="object not found"
                                        />
                                    </span>
                                    <span>
                                        <Text
                                            style="fs-8 fw-600"
                                            title={name}
                                        />
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )
}