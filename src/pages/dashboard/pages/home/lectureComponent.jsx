import bookOpen from "../../../../assets/Book-open.svg"
import { Text } from "../../../../elements/text"
import { IconTag } from "../../components/icontag"
import { Card } from "./bookcard"
export const LectureComponent=()=>{
    return(
        <div>
            <div className="d-flex justify-content-between wrap mb-3">
                <IconTag
                    text=" Lectures récentes"
                    icon={bookOpen}
                />
                <span>
                    <Text
                        style="faint"
                        title="Voir tout"
                    />
                </span>
            </div>
            <Card/>
        </div>
    )
}