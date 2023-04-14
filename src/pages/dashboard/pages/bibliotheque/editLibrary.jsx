import { My } from "../../../../assets/my"
import editicon from "../../../../assets/editlib.svg"
import editupload from "../../../../assets/editup.svg"
import { Text } from "../../../../elements/text"
import { Btn } from "../../../../elements/button"
import { InputField } from "../../../../components/customFormField"
import { useForm } from "react-hook-form";

export const EditLibrary=({
    defaultName
})=>{

    const SubmitHandler =({
        name,
        desc,
    })=>{
        console.log(name,
            desc,)
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
                style="fw-600 fs-6"
                title="Modifier la bibliothèque"
            />
             <Text
                style="faint mb-1 fs-8"
                title="Modifier les détails de cette bibliothèque"
            />
            <form  
                onSubmit={handleSubmit(SubmitHandler)} 
                className="w-100"
            >
                <InputField
                    name="name"
                    type="text"
                    register={register}
                    labelStyle="fs-8 fw-600 text-start"
                    errors={errors.name}
                    defaultValue={defaultName}
                    style="p-08 border mb-2 w-100 border fs-8 br-8"
                    labelTitle="Nom de la bibliothèque*"
                />
                <InputField
                    name="desc"
                    type="text"
                    placeHolder="Entrez une description..."
                    register={register}
                    labelStyle="fs-8 fw-600 text-start"
                    errors={errors.desc}
                    style="p-08 border mb-2 w-100 border fs-8 br-8 textArea"
                    labelTitle="Description*"
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
                <Btn
                    value="Sauvegarder les modifications"
                    style="w-100 btn btn-md bg-greyYellow mb-2 p-08 text-white fs-8"
                />
            </form>

        </div>
    )
}