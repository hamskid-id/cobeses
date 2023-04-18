import lpub from "../../../../assets/lpubli.svg"
import hdlec from "../../../../assets/hdlec.svg"
import mgagne from "../../../../assets/mgagne.svg"
import tdg from "../../../../assets/dtr.svg"
import { Btn } from "../../../../elements/button"
import { Text } from "../../../../elements/text"
import { WithdrawEarnings } from "./withdrawEarn"

export const Stat=({
    setModalBody,
    hideModal
})=>{
    return(
        <div className="d-flex w-overflow justify-content-between my-3">
            {
                [
                    {
                        name:"Livres publiés",
                        amount:350,
                        icon:lpub
                    },
                    {
                        name:"Heures de lecture",
                        amount:1210,
                        icon:hdlec
                    },
                    {
                        name:"Montant gagné",
                        amount:900,
                        icon:mgagne
                    },{
                        name:"Total des gains retirés",
                        amount:300,
                        icon:tdg
                    }
                ].map((statistic,index)=>{
                    const{
                        name,
                        amount,
                        icon
                    }=statistic
                    return(
                        <div key={index}>
                            <div className={`${index!==3 && "me-4"} Revenustatbox`}>
                                <div className=" d-flex mb-3 align-items-center">
                                    <span className="me-3">
                                        <img 
                                            src={icon}
                                            alt="object not found"
                                        />
                                    </span>
                                    <span>
                                        <Text 
                                            title={name}
                                            style="fs-7 faint text-start"
                                        />
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between w-100">
                                    <span>
                                        <Text 
                                            title={`$${amount}`}
                                            style="fs-3 fw-600 text-start"
                                        />
                                    </span>
                                    <span>
                                        {
                                            index===2 ?(
                                                <Btn
                                                    value="withdraw"
                                                    style="btn btm-md text-white bg-greyYellow"
                                                    databstoggle="modal" 
                                                    databstarget="#biblioBackdrop3"
                                                    handleClick={()=>{
                                                        setModalBody(
                                                            <WithdrawEarnings
                                                                setModalBody={setModalBody}
                                                                hideModal={hideModal}
                                                            />
                                                        )
                                                    }}  
                                                />
                                            ):(
                                                <Btn
                                                    value="withdraw"
                                                    style="btn btm-md bg-white text-white"
                                                />
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}