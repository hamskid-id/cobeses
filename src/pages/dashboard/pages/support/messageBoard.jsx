import { Text } from "../../../../elements/text"
import sender from "../../../../assets/messageAvatar (1).svg"
import space from "../../../../assets/space.svg"


export const MessageBoard=()=>{
    const messages=[
        {
            status:"sender",
            message:"Hey Olivia, I’ve finished with the requirements doc! I made some notes in the gdoc as well for Phoenix to look over.",
            name:"Marketplace Support",
            time:"Thursday 11:40am",
            doc:false,
            docName:"",
            size:""
        },
        {
            status:"replier",
            message:"Awesome! Thanks. I’ll look at this today.",
            name:"You",
            time:"Thursday 11:41am",
            doc:false,
            docName:"",
            size:""
        },
        {
            status:"sender",
            message:"",
            name:"Marketplace Support",
            time:"Thursday 11:40am",
            doc:true,
            docName:"Tech requirements.pdf",
            size:"1.2MB"
        }
    ]
    return(
        <div className="MessageBoard pb-5 w-100">
            {
                messages.map((incomingmessage,index)=>{
                    const{
                        status,
                        message,
                        name,
                        time,
                        doc,
                        docName,
                        size
                    }=incomingmessage
                    return(
                        <div 
                            key={index}
                            className="mb-4"

                        >
                            <div className={`${status !== "sender" ? "justify-content-end align-items-end":null} d-flex flex-column w-100`}>
                                <div className="d-flex">
                                    {
                                        status === "sender" &&(
                                            <span className="me-2">
                                                <img 
                                                    src={sender}
                                                    alt="object not found"
                                                />
                                            </span>
                                        )
                                    }
                                    <div className="wt-75">
                                        <div className="d-flex justify-content-between wrap w-100 mb-2">
                                            <span>
                                                <Text
                                                    title={name}
                                                    style="fw-600 fs-8 text-start"
                                                />
                                            </span>
                                            <span>
                                                <Text
                                                    title={time}
                                                    style="faint fs-8"
                                                />
                                            </span>
                                        </div>
                                        {
                                            message &&(
                                                <Text
                                                    title={message}
                                                    style={`${ status === "sender" ? "bg-gainsboro" : "bg-greyYellow text-white" } mb-2 faint fs-8 break text-start ln-20 p-2 br-8 border w-fitContent`}
                                                />
                                            )
                                        }
                                        {
                                            doc &&(
                                                <div className="d-flex p-2 br-8 border">
                                                    <span className="me-2">
                                                        <img 
                                                            src={space}
                                                            alt="object not found"
                                                        />
                                                    </span>
                                                    <div>
                                                        <Text
                                                            title={docName}
                                                            style="fw-bold fs-8"
                                                        />
                                                        <Text
                                                            title={size}
                                                            style="faint fs-8 text-start"
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}