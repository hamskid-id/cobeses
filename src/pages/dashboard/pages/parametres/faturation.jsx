import { Btn } from "../../../../elements/button"
import { Text } from "../../../../elements/text"
import Anullar from "../../../../assets/annular.svg"
import plan from "../../../../assets/Image wrap.svg"
import parasave from "../../../../assets/parasave.svg"
import { BtnIconTag } from "../../components/btnIconTag"
import { PlanTable } from "./plantable"
import { PlanModal } from "./planModal"

export const Faturation=({setActiveView})=>{
    return(
        <div>
            <div className="d-flex wrap align-items-end">
                <div className="me-3">
                    <img 
                        src={plan}
                        alt="object not found"
                        className="br-08"
                    />
                </div>
                <div>
                    <div className="mb-2">
                        <Text
                            title="Vous êtes sur le forfait mensuel Premium"
                            style="fs-7 fw-bold text-start"
                        />
                        <Text
                            title="Gérez votre abonnement ici"
                            style="faint fs-8 text-start"
                        />
                    </div>
                    <div className="d-flex wrap ">
                        <span className="mb-1">
                            <Btn
                                style="btn bg-greyYellow text-white btn-md"
                                value="Plan de mise à niveau"
                                handleClick={()=>setActiveView({
                                    name:"Facturation",
                                    component:<PlanModal/>
                                })}
                            />
                        </span>
                        <span className="mb-1">
                            <img 
                                src={Anullar}
                                alt="object not found"
                                className="btn"
                            />
                        </span>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between my-2">
                <span>
                    <Text
                        title="Historique de facturation"
                        style="fw-bold fs-8"
                    />
                </span>
                <span>
                    <BtnIconTag
                        icon={parasave}
                        text="Tout télécharger"
                    />
                </span>
            </div>
            <PlanTable/>
        </div>
    )
}