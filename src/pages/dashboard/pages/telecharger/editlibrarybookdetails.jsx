import { useForm } from "react-hook-form";
import editicon from "../../../../assets/editlib.svg"
import { Text } from "../../../../elements/text";
import { ModifyDetails } from "../../components/uploadingProcess/modifydetails";
import { Btn } from "../../../../elements/button";

export const EditLibraryBooksDetails=()=>{

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
        console.log(country,
            category,
            Titre,
            privé,
            desc,
            selectionner,
            gratute,
            publication,
            Langue,
            book,
            type)
    }
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    return(
        <div className="p-1 br-8 d-flex flex-column align-items-start">
            <img 
                src={editicon}
                alt="object not found"
                className="mb-3"
            />
            <Text
                style="fw-600 fs-6 mb-3"
                title="Modifier les détails du livre"
            />
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <ModifyDetails
                    register={register}
                    errors={errors}
                />
                <Btn
                    style="w-100 btn bg-greyYellow fs-8 btn-md text-white"
                    value="Sauvegarder les modifications"
                />
            </form>
        </div>

    )
}