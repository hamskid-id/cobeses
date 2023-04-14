import { Btn } from "../../../../elements/button"
import { Text } from "../../../../elements/text"
import editupload from "../../../../assets/editup.svg"
import person from "../../../../assets/ballperson.svg"
import { useForm } from "react-hook-form";
import { InputField } from "../../../../components/customFormField";
import { CoverConfirmation } from "./coverConfirmation";

export const FormSpace=({
    setModal
})=>{

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const SubmitHandler =({
        country,
        category,
        Titre,
        privé,
        desc,
        selectionner,
        gratute,
        publication,
        Langue,
        book,
        type
    })=>{
        console.log(name,type,desc,Titre,country,category,selectionner,book,publication,Langue,privé,gratute,desc)
        setModal({
            body:<CoverConfirmation/>,
            size:"small"
        })
    }

    return(
        <form>
            <div className="d-flex justify-content-between wrap pb-2 border-bottom mb-2">
                <div className="d-flex flex-column">
                    <Text
                        title="Nom et descriptif"
                        style="fs-6 fw-600 text-start "
                    />
                    <Text
                        title="Veuillez remplir les informations suivantes sur le livre"
                        style="fs-8 faint text-start"
                    />
                </div>
                <div>
                    <Btn
                        value="Télécharger"
                        style="btn btn-md fs-8 bg-greyYellow text-white"
                    />
                </div>
            </div>
            <div 
                className="row" 
                onSubmit={handleSubmit(SubmitHandler)} 
            >
                <div className="col-md-6 p-3">
                    <div className="d-flex flex-column align-items-start mb-3">
                        <label 
                            htmlFor="type" 
                            className="fs-8 fw-bold"
                        >Type de contenu*
                        </label>
                        <select 
                            className="fs-8 p-08 w-100 border br-8"
                            name="type"
                            {...register(
                                "type", 
                                {
                                    required:`type is invalid`,
                                }
                            )
                        }
                        >
                            <option>Sélectionner</option>
                        </select>
                        {errors.type && (<p className="text-danger ">{errors.message}</p>)}
                    </div>
                    <div className="d-flex flex-column align-items-start mb-3">
                        <label 
                            htmlFor="Titre*" 
                            className="fs-8 fw-bold text-start"
                        >Titre*
                        </label>
                        <select 
                            className="fs-8 p-08 w-100 border br-8"
                            name="Titre"
                            {...register(
                                "Titre", 
                                {
                                    required:`Titre is invalid`,
                                }
                            )
                            }
                        >
                            <option> Sélectionner</option>
                        </select>
                        {errors.Titre && (<p className="text-danger ">{errors.message}</p>)}
                    </div>
                    <div className="d-flex flex-column align-items-start mb-3">
                        <div className="d-flex">
                            <span>
                                <label 
                                    htmlFor="country" 
                                    className="fs-8 fw-bold me-2"
                                >e.g Swize Banzi 
                                </label>
                            </span>
                            <span>
                                <label 
                                    htmlFor="country" 
                                    className="fs-8 fw-bold"
                                >Swize Banzi 
                                </label>
                            </span>
                        </div>
                        <select 
                            className="fs-8 p-08 w-100 border br-8"
                            name="country"
                            {...register(
                                "country", 
                                {
                                    required:`country is invalid`,
                                }
                            )
                            }
                        >
                            <option>Veuillez entrer un nouveau nom d'auteur</option>
                        </select>
                        {errors.country && (<p className="text-danger ">{errors.message}</p>)}
                    </div>
                    <div className="d-flex flex-column align-items-start mb-3">
                        <label 
                            htmlFor="category" 
                            className="fs-8 fw-bold"
                        >Sous-catégorie*
                        </label>
                        <select 
                            className="fs-8 p-08 w-100 border br-8"
                            {...register(
                                "category", 
                                {
                                    required:`category is invalid`,
                                }
                            )
                            }
                        >
                            <option>Sélectionner</option>
                        </select>
                        {errors.category && (<p className="text-danger ">{errors.message}</p>)}
                    </div>
                    <InputField
                        name="selectionner"
                        type="text"
                        register={register}
                        labelStyle="fs-8 fw-600 text-start"
                        placeHolder="Sélectionner"
                        errors={errors.selectionner}
                        style="p-08 border mb-2 w-100 border fs-8 br-8"
                        labelTitle="Éditeur*"
                    />
                    <InputField
                        name="book"
                        type="text"
                        register={register}
                        labelStyle="fs-8 fw-600 text-start"
                        errors={errors.book}
                        placeHolder="Entrez l'ISBN"
                        style="p-08 border mb-2 w-100 border fs-8 br-8"
                        labelTitle="ISBN or ISSN*"
                    />

                    <InputField
                        name="publication"
                        type="text"
                        register={register}
                        labelStyle="fs-8 fw-600 text-start"
                        errors={errors.publication}
                        style="p-08 border mb-2 w-100 border fs-8 br-8"
                        labelTitle="Année de publication*"
                    />

                    <InputField
                        name="desc"
                        type="text"
                        register={register}
                        labelStyle="fs-8 fw-600 text-start"
                        errors={errors.desc}
                        placeHolder="Entrez une petite description"
                        style="p-08 border mb-2 w-100 border fs-8 br-8 form-spacedescription"
                        labelTitle="Description*"
                    />
                    <Text
                        style="fs-8 faint text-start"
                        title="275 caractères restants"
                    />
                    <InputField
                        name="Langue"
                        type="text"
                        register={register}
                        labelStyle="fs-8 fw-600 text-start"
                        errors={errors.Langue}
                        placeHolder="Sélectionner"
                        style="p-08 border w-100 border fs-8 br-8"
                        labelTitle="Langue**"
                    />
                    <InputField
                        name="privé"
                        type="checkbox"
                        labelTitle="Rendre ce contenu privé*"
                        labelStyle="faint fs-6"
                        style="me-2"
                        register={register}
                        errors={errors.privé}
                    />
                    <InputField
                        name="gratute"
                        type="checkbox"
                        labelTitle="Rendre ce contenu Gratuit*"
                        labelStyle="faint fs-6"
                        style="me-2"
                        register={register}
                        errors={errors.gratute}
                    />
                </div>
                <div className="col-md-6">
                    <div className="p-3">
                        <Text
                            style="fs-6 fw-600 text-start"
                            title="Couverture du livre"
                        />
                        <Text
                            style="fs-8 faint text-start mb-2"
                            title="Cela sera affiché sur les détails de votre livre."
                        />
                        <div className="d-flex flex-column align-items-center mb-3 border br-8">
                            <label 

                                htmlFor="upload"
                                className="p-2 br-8 w-100"
                            >
                                <img 
                                    src={editupload}
                                    alt="object not found"
                                    className="mb-3"
                                />
                                <Text
                                    style="fw-600 fs-8 greyYellow"
                                    title="Cliquez pour télécharger ou glisser-déposer"
                                />
                                <Text
                                    style="faint mb-2 fs-8"
                                    title="SVG, PNG, JPG ou GIF (max. 800x400px)"
                                />
                            </label>
                            <input id="upload" type="file" accept="image/*"/>
                        </div>
                        <div>
                            <Text
                                style="fw-600 fs-7 text-start"
                                title="Pas d'image de couverture?"
                            />
                            <Text
                                style="faint mb-2 fs-8 text-start"
                                title="Choisissez d'ici"
                            />
                         
                         <div className="d-flex wrap">
                                <img 
                                    src={person}
                                    alt="object not founc"
                                    className="br-8 pe-3 py-3 form-spacedescription"
                                />
                                <img 
                                    src={person}
                                    alt="object not founc"
                                    className="br-8 pe-3 py-3 form-spacedescription"
                                />
                                <img 
                                    src={person}
                                    alt="object not founc"
                                    className="br-8 pe-3 py-3 form-spacedescription"
                                />
                                <img 
                                    src={person}
                                    alt="object not founc"
                                    className="br-8 pe-3 py-3 form-spacedescription"
                                />
                                <img 
                                    src={person}
                                    alt="object not founc"
                                    className="br-8 pe-3 py-3 form-spacedescription"
                                />
                                <img 
                                    src={person}
                                    alt="object not founc"
                                    className="br-8 pe-3 py-3 form-spacedescription"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex wt-50 justify-content-between ms-auto">
                <Btn
                    value="Réinitialiser"
                    style="text-black border bg-white  btn btn-md wt-50 mb-1 me-2"
                    handleClick={()=>setModal({
                        size:"small",
                        body:<CoverConfirmation/>
                    })}
                />
                <Btn
                    value="Télécharger"
                    style=" text-white mb-1 btn btn-md wt-50 bg-greyYellow"
                    handleClick={()=>setModal({
                        size:"small",
                        body:<CoverConfirmation/>
                    })}
                />
            </div>
        </form>
    )
}