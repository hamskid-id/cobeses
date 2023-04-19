import { Authlayout } from "./authlayout";
import {Text} from "../../elements/text";
import { InputField } from "../../components/customFormField";
import { useForm } from "react-hook-form";
import Lock from "../../assets/Lock.svg";
import icon from "../../assets/Icon.svg"; 
import {Btn} from "../../elements/button";
import {Link, useNavigate} from "react-router-dom";

export const SignIn=()=>{
    const navigate = useNavigate()
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const SubmitHandler =({
        email,
        password,
        checkbox
    })=>{
        console.log(
            email,
            password,
            checkbox
        )
        navigate("/tableau");
    }
    return(
        <Authlayout>
            <form  onSubmit={handleSubmit(SubmitHandler)}>
                <Text
                    title="Connectez-vous à"
                    style="fs-6 fw-bold mb-1 text-start"
                />
                <Text
                    title="Entrez vos informations de connexion"
                    style="fs-6  mb-4 text-start"
                />
                <InputField
                    inputIcon={icon}
                    placeHolder="Votre email"
                    name="email"
                    type="email"
                    register={register}
                    errors={errors.email}
                    style="p-08 light-greyInput mb-2 w-100 border border-white fs-8 br-8 ps-5 btn text-start"
                />
                <InputField
                    inputIcon={Lock}
                    placeHolder="votre mot de passe"
                    name="password"
                    type="password"
                    register={register}
                    errors={errors.password}
                    style="p-08 light-greyInput mb-2 w-100 border border-white fs-8 br-8 ps-5 btn text-start"
                />
                <InputField
                    name="checkbox"
                    type="checkbox"
                    labelTitle="Se souvenir de moi"
                    labelStyle="faint fs-6"
                    style="me-2"
                    register={register}
                    errors={errors.checkbox}
                />
                <Btn
                    value="Souscrire"
                    style="w-100 btn btn-md bg-greyYellow mb-2 p-08 text-white fs-8"
                />
                <Text
                    title="Mot de passe oublié?"
                    style="fs-6 mb-1 greyYellow text-center"
                    handeClick={()=>navigate("/auth/password/forget")}
                />
                <Text
                    title="Ou"
                    style="fs-4 fw-bold mb-2 text-center"
                />
                <div className="routeLinkDiv">
                    <Text
                        title="Vous n’avez pas de compte?"
                        style="fs-6 faint text-center me-1"
                    />
                    <Link to="/auth/register"> S’enregistrer</Link>
                </div>
                
            </form>
        </Authlayout>
    )
}