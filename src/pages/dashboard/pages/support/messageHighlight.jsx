import { Text } from "../../../../elements/text"
import replier from "../../../../assets/messageAvatar.svg"


export const MessageHighLight=()=>{
    return(
        <div>
            <div className="d-flex justify-content-between mb-2">
                <div className="d-flex">
                    <div className="me-2">
                        <img 
                            src={replier}
                            alt="object nor found"
                            className="briefMessageIcon"
                        />
                    </div>
                    <div>
                        <Text
                            style="fw-600 fs-8 ln-20"
                            title="Marketplace Support"
                        />
                        <Text
                            style="faint fs-8 text-start ln-20"
                            title="@helpdesk"
                        />
                    </div>
                </div>
                <span>
                    <Text
                        style="faint fs-8"
                        title="5min ago"
                    />
                </span>
            </div>
            <div>
                <Text
                    style="faint fs-8 text-start ln-20"
                    title="Hey Olivia, Katherine sent me over the latest doc. I just have a quick question about the..."
                />
            </div>
        </div>
    )
}