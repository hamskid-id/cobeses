import { Text } from "../../../../elements/text"
import sender from "../../../../assets/messageAvatar (1).svg"
import PlusImage from "../../../../assets/message_Button base.svg"
import { MessageHighLight } from "./messageHighlight"
import { Head } from "./messageHead"
import { Footer } from "./messageFooter"
import { MessageBoard } from "./messageBoard"

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
                        <MessageHighLight/>
                    </div>
                </div>
                <div className="col-md-8 border">
                    <div className="relative messageBody">
                        <Head/>
                        <MessageBoard/>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    )
}