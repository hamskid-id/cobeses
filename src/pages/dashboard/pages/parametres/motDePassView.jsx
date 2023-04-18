import { useForm } from "react-hook-form";
import { Text } from "../../../../elements/text";
import { InputField } from "./customFormfield";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Btn } from "../../../../elements/button";
import { FaEllipsisV } from "react-icons/fa";
import Active from "../../../../assets/activeicon.svg"
import tv from "../../../../assets/_Badge base.svg"

export const MotDePassView=()=>{
    const validationSchema = Yup.object().shape({
        newpass: Yup.string()
            .required('New Password is required')
            .min(8, 'Votre nouveau mot de passe doit comporter plus de 8 caractères.'),
        cnewpass: Yup.string()
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
        oldpass,
        newpass,
        cnewpass
    })=>{
        console.log(
            oldpass,
            newpass,
            cnewpass
        )
    }
    

    return(
        <div>
            <form 
                className="d-flex flex-column justify-content-between align-items-start w-100"  
                onSubmit={handleSubmit(SubmitHandler)}
            >
                <div className="w-100 pb-2 border-bottom mb-2">
                    <Text
                        style="fw-bold fs-7"
                        title="Informations sur le profil"
                    />
                    <Text
                        style="faint fs-8 text-start"
                        title="Modifiez votre profil ici"
                    />
                </div>
                <div className="w-100">
                    <InputField
                        name="oldpass"
                        type="password"
                        register={register}
                        placeHolder="exemple@exemple.com"
                        labelTitle="Mot de passe actuel"
                        labelStyle="fw-bold fs-8 text-start"
                        errors={errors.oldpass}
                        style="btn border wt-50 text-start"
                    />
                    <InputField
                        name="newpass"
                        type="password"
                        register={register}
                        placeHolder="exemple@exemple.com"
                        labelTitle="Nouveau mot de passe"
                        labelStyle="fw-bold fs-8 text-start"
                        errors={errors.newpass}
                        style="btn border wt-50 text-start"
                    />
                    <InputField
                        name="cnewpass"
                        type="password"
                        register={register}
                        placeHolder="exemple@exemple.com"
                        labelTitle="Confirmer le nouveau mot de passe"
                        labelStyle="fw-bold fs-8 text-start"
                        errors={errors.cnewpass}
                        style="btn border wt-50 text-start"
                    />
                </div>
                <div className="d-flex wrap mb-5 justify-content-end w-100">
                    <span className="me-2">
                        <Btn
                            style="btn btn-md bg-greyYellow text-white"
                            value="Annuler"
                        />
                    </span>
                    <span>
                        <Btn
                            style="btn btn-md bg-greyYellow text-white"
                            value="Mettre à jour le mot de passe"
                        />
                    </span>
                </div>
                <div className="d-flex justify-content-between align-items-center w-100 pb-2 border-bottom mb-2">
                    <div>
                        <Text
                            style="fw-bold fs-7 text-start"
                            title="Où vous êtes connecté"
                        />
                        <Text
                            style="faint fs-8 text-start"
                            title="Nous vous alerterons via tech@cobess.com s'il y a une activité inhabituelle sur votre compte."
                        />
                    </div>
                    <div>
                        <FaEllipsisV
                            color="grey"
                            size="1.2rem"
                        />
                    </div>
                </div>
                <div className="w-100">
                    {
                        [
                            "Melbourne, Australia • 22 Jan at 10:40am","Melbourne, Australia • 22 Jan at 4:20pm"
                        ].map((details,index)=>{
                            return(
                                <div key={index} 
                                    className="my-3 border-bottom"
                                >
                                    <div className="d-flex w-100 wrap justify-content-between">
                                        <div className="d-flex">
                                            <div className="me-2">
                                                <img 
                                                    src={Active}
                                                    alt="object not found"
                                                />
                                            </div>
                                            <div>
                                                <div className="d-flex wrap">
                                                    <Text
                                                        style="fw-bold fs-8 me-2"
                                                        title="2018 Macbook Pro 15-inch"
                                                    />
                                                     {
                                                        index===0 &&(
                                                            <span>
                                                                <img 
                                                                    src={tv}
                                                                    alt="object not found"
                                                                />
                                                            </span>
                                                        )
                                                    }
                                                </div>
                                                <div>
                                                    <Text
                                                        style="faint fs-8 text-start"
                                                        title="Melbourne, Australia • 22 Jan at 10:40am"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            index===0 &&(  
                                                <div>
                                                    <Btn
                                                        style="btn btn-danger text-white fs-8 my-2"
                                                        value="Se déconnecter"
                                                    />
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </form>
        </div>
    )
}