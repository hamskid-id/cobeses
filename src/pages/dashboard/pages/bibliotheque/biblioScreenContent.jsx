import { Text } from "../../../../elements/text"
import { IconTag } from "../../components/icontag"
import bookOpen from "../../../../assets/Book-open.svg"
import icon from "../../../../assets/btnIcon.svg"
import { Bibliocard } from "./bibliocard"

export const BiblioContent=()=>{
    return(
        <div>
            <div className="d-flex justify-content-between wrap mb-3">
                <div>
                    <IconTag
                        text="Bibliothèque"
                        icon={bookOpen}
                    />
                </div>
                <span>
                    <button className="btn bg-greyYellow btn-md">
                        <div className="d-flex">
                            <span className="me-2">
                                <img
                                    src={icon}
                                    alt="object not found"
                                />
                            </span>
                            <span>
                                <Text
                                    style="fw-bold fs-8 text-white"
                                    title="Créer une bibliothèque"
                                />
                            </span>
                        </div>
                    </button>
                </span>
            </div>
            <div>
                <Bibliocard/>
            </div>
        </div>
    )
}