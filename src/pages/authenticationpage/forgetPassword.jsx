import { Authlayout } from "./authlayout";
import {Text} from "../../elements/text";
import { InputField } from "../../components/customFormField";
import { useForm } from "react-hook-form";
import Lock from "../../assets/Lock.svg";
import {Btn} from "../../elements/button";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

export const ForgetPassword=()=>{
    const navigate = useNavigate()
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')
            
    });

    const formOptions = { 
        resolver: yupResolver(validationSchema) 
    };

    const { 
        register, 
        handleSubmit,
        formState: { errors } 
    } = useForm(formOptions);

    const SubmitHandler =({
        password,
        confirmPassword,
    })=>{
        console.log(
            password,
            confirmPassword,
        )
    }
    return(
        <Authlayout>
            <form  onSubmit={handleSubmit(SubmitHandler)}>
                <Text
                    title="Réinitialiser le mot de passe"
                    style="fs-6 fw-bold mb-1 text-start"
                />
                <Text
                    title="Veuillez entrer votre nouveau mot de passe ici"
                    style="fs-6  mb-4 text-start"
                />
                <InputField
                    inputIcon={Lock}
                    placeHolder="Nouveau mot de passe"
                    name="password"
                    type="password"
                    register={register}
                    errors={errors.password}
                    style="p-3 light-greyInput mb-2 w-100 border border-white fs-6 br-8 ps-5"
                />
                <InputField
                    inputIcon={Lock}
                    placeHolder="Confirmez le mot de passe"
                    name="confirmPassword"
                    type="password"
                    register={register}
                    errors={errors.confirmPassword}
                    style="p-3 light-greyInput mb-2 w-100 border border-white fs-6 br-8 ps-5"
                />
                <Btn
                    value="Réinitialiser le mot de passe"
                    style="w-100 btn btn-md bg-greyYellow mb-2 p-3 text-white"
                />
                <Text
                    title="retour connexion"
                    style="fs-6 mb-1 greyYellow text-center"
                    handleClick={()=>navigate("/auth/login")}
                />
            </form>
        </Authlayout>
    )
}