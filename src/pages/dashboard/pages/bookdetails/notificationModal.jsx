import Warningicon  from "../../../../assets/warno.svg"
import { Btn } from "../../../../elements/button"
import { Text } from "../../../../elements/text"
import { PricingCard } from "./pricingcard"

export const NotificationModal=({setModal})=>{
    const navigate =()=>{
        setModal({
            size:"large",
            body:<PricingCard/>
        })
    }
    return(
        <div className="d-flex flex-column align-items-center p-2">
            <div className="mb-2">
                <img
                    src={Warningicon}
                />
            </div>
            <div className="mb-2">
                <Text
                    title="Veuillez vous abonner"
                    style="fw-bold fs-6"
                />
                <Text
                    title="Vous n'êtes pas abonné à Cobess. Veuillez le faire pour profiter de superbes lectures du monde entier"
                    style="faint fs-8 ln-20"
                />
            </div>
            <div className="w-100">
                <Btn
                    style="btn bg-greyYellow btn-md w-100 text-white"
                    value="Abonnez-vous maintenant"
                    handleClick={navigate}
                />
            </div>
        </div>
    )
}