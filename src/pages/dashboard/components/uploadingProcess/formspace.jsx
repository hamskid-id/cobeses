import { Btn } from "../../../../elements/button"
import { Text } from "../../../../elements/text"
import editupload from "../../../../assets/editup.svg"
import person from "../../../../assets/ballperson.svg"
import { useForm } from "react-hook-form";
import { InputField } from "../../../../components/customFormField";
import { CoverConfirmation } from "./coverConfirmation";
import { ModifyDetails } from "./modifydetails";

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
                    <ModifyDetails
                        register={register}
                        errors={errors}
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
                         </div>
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
            <div className="d-flex wt-50 justify-content-between ms-auto">
                <Btn
                    value="Réinitialiser"
                    style="text-black border bg-white  btn btn-md wt-50 mb-1 me-2"
                    handleClick={()=>setModal({
                        size:"small",
                        body:<CoverConfirmation
                            setModal={setModal}
                        />
                    })}
                />
                <Btn
                    value="Télécharger"
                    style=" text-white mb-1 btn btn-md wt-50 bg-greyYellow"
                    handleClick={()=>setModal({
                        size:"small",
                        body:<CoverConfirmation
                            setModal={setModal}
                        />
                    })}
                />
            </div>
        </form>
    )
}