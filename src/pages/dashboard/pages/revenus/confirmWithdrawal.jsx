import interest from "../../../../assets/interes.svg";
import { Btn } from "../../../../elements/button";
import { Text } from "../../../../elements/text";
export const ConfirmWithdrawal=()=>{
    return(
        <div>
            <div className="d-flex wrap pb-3 border-bottom mb-4 align-items-center">
                <span className="me-4">
                    <img 
                        src={interest}
                        alt="object not found"
                    />
                </span>
                <span>
                    <Text
                        style="fw-600 text-start"
                        title="Confirm Withdrawal"
                    />
                    <Text
                        style="faint fs-7 text-start"
                        title="Retirez vos gains sur votre compte bancaire"
                    />
                </span>
            </div>
            <div className="d-flex flex-column">
                {
                    [
                        {
                            name:"Montante",
                            amount:"30.80"
                        },{
                            name:"Nom du compte",
                            amount:"Drew Cano"
                        },{
                            name:"Nom de banque",
                            amount:"Access Bank"
                        },
                    ].map((info,index)=>{
                        const{
                            name,
                            amount
                        }=info
                        return(
                            <div key={index}>
                                <div className={`${index !==2 &&"border-bottom"} d-flex justify-content-between py-3`}>
                                    <span>
                                        <Text
                                            style="fw-bold fs-8"
                                            title={name}
                                        />
                                    </span>
                                    <span>
                                        <Text
                                            style="fw-bold fs-8"
                                            title={`${index ===2 ? "$":""} ${amount} `}
                                        />
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className="d-flex w-100 justify-content-between">
                <Btn
                    value="Retourner"
                    style="text-white btn-danger btn btn-md wt-50 mb-1 me-2"
                />
                <Btn
                    value="Retirer"
                    style=" text-white mb-1 btn btn-md wt-50 bg-greyYellow"
                />
            </div>
        </div>
    )
}