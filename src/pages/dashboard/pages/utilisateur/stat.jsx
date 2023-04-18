import util from "../../../../assets/utili.svg"
import admin from "../../../../assets/admin.svg"
import publier from "../../../../assets/pub.svg"
import { Text } from "../../../../elements/text"
export const Stat=()=>{
    return(
        <div className="d-flex w-overflow justify-content-between">
            {
                [
                    {
                        name:"Utilisateurs",
                        amount:136,
                        icon:util,
                        color:"sahdowgrey"
                    },
                    {
                        name:"Administrateur",
                        amount:30,
                        icon:admin,
                        color:"green"
                    },
                    {
                        name:"Peut publier",
                        amount:25,
                        icon:publier,
                        color:"blue",
                    },
                ].map((statistic,index)=>{
                    const{
                        name,
                        amount,
                        icon,
                        color
                    }=statistic
                    return(
                        <div key={index}>
                            <div className={`${color} d-flex flex-column align-items-start me-3 statbox br-8`}>
                                <div className="mb-3">
                                    <img 
                                        src={icon}
                                        alt="object not found"
                                    />
                                </div>
                                <div className=" statbosxsubscover">
                                    <Text 
                                        title={name}
                                        style="fs-7 text-white text-start"
                                    />
                                    <Text 
                                        title={amount}
                                        style="fs-6 fw-600 text-white text-start"
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}