import { Btn } from "../../../../elements/button"
import { Text } from "../../../../elements/text"
import sender from "../../../../assets/messageAvatar (1).svg"
import replier from "../../../../assets/messageAvatar.svg"
import PlusImage from "../../../../assets/message_Button base.svg"
import emoji from "../../../../assets/emoji.svg"
import preset from "../../../../assets/preset.svg"
import attach from "../../../../assets/attach.svg"

export const Messages=()=>{
    return(
        <div>
            <div className="row border br-8">
                <div className="col-md-4 border">
                    <div className="p-3">
                        <div>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <span className="me-2">
                                        <Text
                                            style="fw-600 text-start"
                                            title="Messages"
                                        />
                                    </span>
                                    <span>
                                        <Text
                                            style="fw-600 messageBadge badge"
                                            title="40"
                                        />
                                    </span>
                                </div>
                                <span>
                                    <img 
                                        src={PlusImage}
                                        alt="object nor found"
                                    />
                                </span>
                            </div>
                            <div>
                                <input 
                                    type="text"
                                    className="w-100 btn fs-8 text-start border my-3"
                                    placeholder="Search"
                                />
                            </div>
                        </div>
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
                    </div>
                </div>
                <div className="col-md-8 border">
                    <div className="relative messageBody">
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
                    </div>
                </div>
            </div>
        </div>
    )
}