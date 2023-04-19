import { useForm } from "react-hook-form";
import PlusImage from "../../../../assets/messagePlus.svg"
import { InputField } from "../../../../components/customFormField";
import { Btn } from "../../../../elements/button";
import { Text } from "../../../../elements/text";

export const SendMessage=({
    setModalBody,
    hideModal
})=>{
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const SubmitHandler =({
        Title,
        category,
        message
    })=>{
        console.log(
            Title,
            category,
            message
        )
    }
    return(
        <div>
            <div className="d-flex wrap pb-3 border-bottom mb-4 align-items-center">
                <span className="me-4">
                    <img 
                        src={PlusImage}
                        alt="object not found"
                    />
                </span>
                <span>
                    <Text
                        style="fw-600 text-start"
                        title="Send a Message"
                    />
                    <Text
                        style="faint fs-7 text-start"
                        title="Please fill in the following information"
                    />
                </span>
            </div>
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <InputField
                    name="category"
                    type="select"
                    labelTitle="Support Category*"
                    labelStyle="fw-600 fs-8 text-start"
                    selectOption="Advertiser"
                    register={register}
                    errors={errors.category}
                    style="btn border w-100 text-start"
                />
                <InputField
                    name="Title"
                    type="text"
                    labelTitle="Title*"
                    labelStyle="fw-600 fs-8 text-start"
                    placeHolder="Advertiser"
                    register={register}
                    errors={errors.Title}
                    style="btn border w-100 text-start"
                />
                 <InputField
                    name="message"
                    type="text"
                    labelTitle="Your Message*"
                    labelStyle="fw-600 fs-8 text-start"
                    placeHolder="Enter a description..."
                    register={register}
                    errors={errors.message}
                    style="btn border text-start w-100"
                />
                <Btn
                    style="btn bg-greyYellow btn- text-white w-100"
                    value="Send"
                />
            </form>
        </div>
    )
}