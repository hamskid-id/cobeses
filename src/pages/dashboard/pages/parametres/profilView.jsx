import { FaEllipsisV } from "react-icons/fa"
import { Text } from "../../../../elements/text"
import { InputField } from "./customFormfield"
import { Btn } from "../../../../elements/button"
import { useForm } from "react-hook-form"
import Avatar from "../../../../assets/proileAvatar.svg"

export const ProfileView=()=>{
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const SubmitHandler =({
        email,
        nom,
        telephone,
        Profession,
        pay
    })=>{
        console.log(
            email,
            nom,
            telephone,
            Profession,
            pay
        )
    }
    return(
        <div>
            <form 
                className="d-flex flex-column justify-content-between align-items-start w-100"  
                onSubmit={handleSubmit(SubmitHandler)}
            >
                <div className="d-flex justify-content-between align-items-center w-100 pb-2 border-bottom mb-2">
                    <div>
                        <Text
                            style="fw-bold fs-7"
                            title="Informations sur le profil"
                        />
                        <Text
                            style="faint fs-8 text-start"
                            title="Modifiez votre profil ici"
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
                    <div className="d-flex wrap w-100 justify-content-between align-items-center pb-2 mb-2 border-bottom">
                        <div>
                            <Text
                                style="fw-bold fs-7"
                                title="Informations sur le profil"
                            />
                            <Text
                                style="faint fs-8 text-start"
                                title="Modifiez votre profil ici"
                            />
                        </div>
                        <div>
                            <img 
                                src={Avatar}
                                alt="object not found"
                            />
                        </div>
                        <div className="d-flex">
                            <Text
                                style="fs-8 greyYellow me-2"
                                title="Télécharger nouveau"
                            />
                            <Text
                                style=" fs-8 text-danger"
                                title="Supprimer"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-100 mb-2">
                    <InputField
                        name="nom"
                        type="nom"
                        register={register}
                        defaultValue="Concepteur de produits"
                        labelTitle="Nom et prénom"
                        labelStyle="fw-bold fs-8 text-start"
                        errors={errors.nom}
                        style="btn border wt-50 text-start"
                    />
                    <InputField
                        name="email"
                        type="email"
                        register={register}
                        placeHolder="exemple@exemple.com"
                        labelTitle="Votre e-mail"
                        labelStyle="fw-bold fs-8 text-start"
                        errors={errors.email}
                        style="btn border wt-50 text-start"
                    />
                    <InputField
                        name="telephone"
                        type="select"
                        register={register}
                        selectOption="votre numéro ici"
                        labelTitle="Votre numéro de téléphone"
                        labelStyle="fw-bold fs-8 text-start"
                        errors={errors.telephone}
                        style="btn border wt-50 text-start"
                    />
                    <InputField
                        name="pay"
                        type="select"
                        register={register}
                        selectOption="Choisissez le pays"
                        labelTitle="Pays"
                        labelStyle="fw-bold fs-8 text-start break"
                        errors={errors.pay}
                        style="btn border wt-50 text-start"
                    />
                    <InputField
                        name="Profession"
                        type="select"
                        register={register}
                        selectOption="Sélectionnez la profession"
                        labelTitle="Profession"
                        labelStyle="fw-bold fs-8 text-start break"
                        errors={errors.Profession}
                        style="btn border wt-50 text-start"
                    />
                </div>
                <div className="d-flex wrap mb-5 justify-content-end w-100">
                    <span className="me-2">
                        <Btn
                            style="btn btn-md bg-greyYellow text-white"
                            value="Jeter"
                        />
                    </span>
                    <span>
                        <Btn
                            style="btn btn-md bg-greyYellow text-white"
                            value="Sauvegarder les modifications"
                        />
                    </span>
                </div>
            </form>
        </div>
    )
}