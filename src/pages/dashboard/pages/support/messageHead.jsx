import { Text } from "../../../../elements/text"
import replier from "../../../../assets/messageAvatar.svg"

export const Head=()=>{
    return(
        <div className="d-flex p-3 border-bottom">
            <div className="me-3">
                <img 
                    src={replier}
                    alt="object nor found"
                />
            </div>
            <div>
                <div className="d-flex">
                    <span className="me-2">
                        <Text
                            style="fw-600 fs-8 text-start"
                            title="Marketplace Support"
                        />
                    </span>
                    <span>
                        <Text
                            style="fw-600 activeStatus fs-8 badge p-2"
                            title=". Online"
                        />
                    </span>
                </div>
                <div>
                    <Text
                        style="faint fs-8 text-start ln-20"
                        title="@helpdesk"
                    />
                </div>
            </div>
        </div>
    )
}