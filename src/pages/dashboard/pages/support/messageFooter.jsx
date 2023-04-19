import { Btn } from "../../../../elements/button"
import emoji from "../../../../assets/emoji.svg"
import preset from "../../../../assets/preset.svg"
import attach from "../../../../assets/attach.svg"

export const Footer=()=>{
    return(
        <div className="btn border-top w-100 messageFooter">
            <textarea 
                placeholder="Send a message"
                className="w-100 text-start border-white"
            >

            </textarea>
            <div className="d-flex justify-content-end align-items-center">
                <span className="me-3">
                    <img
                        src={preset}
                        alt="object not found"
                    />
                </span>
                <span className="me-3">
                    <img
                        src={emoji}
                        alt="object not found"
                    />
                </span>
                <span className="me-3">
                    <img
                        src={attach}
                        alt="object not found"
                    />
                </span>
                <span className="me-3">
                    <Btn
                        value="Send"
                        style="bg-greyYellow text-white btn-md"
                    />
                </span>
            </div>
        </div>
    )
}