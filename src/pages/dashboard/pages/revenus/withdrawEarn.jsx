import interest from "../../../../assets/interes.svg"
import { Text } from "../../../../elements/text";
import { useForm } from "react-hook-form";
import { ConfirmWithdrawal } from "./confirmWithdrawal";
import { Btn } from "../../../../elements/button";

export const WithdrawEarnings=({
    setModalBody,
    hideModal
})=>{
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const SubmitHandler =({
        monte
    })=>{
        console.log(monte)
        setModalBody(
            <ConfirmWithdrawal/>
        )
    }
    return(
        <form onSubmit={handleSubmit(SubmitHandler)} >
            <div className="d-flex wrap align-items-center mb-3 border-bottom pb-2">
                <span className="me-4">
                    <img 
                        src={interest}
                        alt="object not found"
                    />
                </span>
                <span>
                    <Text
                        style="fw-600 text-start"
                        title="Retirer des gains"
                    />
                    <Text
                        style="faint fs-7"
                        title="Retirez vos gains sur votre compte bancaire"
                    />
                </span>
            </div>
            <div className="d-flex flex-column align-items-start mb-3">
                <label 
                    htmlFor="Titre*" 
                    className="fs-8 fw-bold text-start mb-1"
                >Entrez le montant à retirer*
                </label>
                <select 
                    className="fs-8 p-08 w-100 border br-8"
                    name="monte"
                    {...register(
                        "monte", 
                        {
                            required:` montant à retirer is invalid`,
                        }
                    )
                    }
                >
                    <option>$300</option>
                </select>
                {errors.monte && (<p className="text-danger ">{errors.message}</p>)}
            </div>
            <div>
                <Btn
                    value="Retirer"
                    style="w-100 btn btn-md bg-greyYellow mb-2 p-08 text-white fs-8"
                />
            </div>
        </form>
    )
}