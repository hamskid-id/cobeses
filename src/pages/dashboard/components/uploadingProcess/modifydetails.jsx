import { InputField } from "../../../../components/customFormField"
import { Text } from "../../../../elements/text"

export const ModifyDetails=({
    register,
    errors
})=>{
    return(
        <div>
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
        
    )
}