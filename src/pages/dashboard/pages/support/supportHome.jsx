import { Text } from "../../../../elements/text"
import solid1 from "../../../../assets/Solidmessage1.svg"
import { Pannel } from "./messageButtonPannel"
import Image1 from "../../../../assets/messageImage.svg"
import Image2 from "../../../../assets/messageImage2.svg"

export const SupportHome=({
    setModalBody,
    hideModal
})=>{
    return(
        <div className="row">
            <div className="col-md-5">
                <div className="p-3">
                    <div className="faintIndigo br-8 p-3">
                        <Text
                            style="fw-bold fs-7 text-start"
                            title="Salut, comment pouvons-nousvous aider ?"
                        />
                        <Text
                            style="faint fs-8 text-start "
                            title="Type your question or search keyword"
                        />
                        <input 
                            type="text"
                            className="btn bg bg-white w-100 my-3"
                            placeholder="search..."
                        />
                        <Text
                            style="faint fs-8 text-start"
                            title="Popular search:"
                        />
                        <div className="d-flex wrap">
                            {
                                [
                                    {
                                        name:"Libraries",
                                        color:"activeStatus"
                                    },{
                                        name:"Getting Started",
                                        color:"unattended"
                                    },{
                                        name:"Uploading Ebooks",
                                        color:"retire"
                                    },
                                ].map((status,index)=>{
                                    const{
                                        name,
                                        color
                                    }=status
                                    return(
                                        <div 
                                            key={index}
                                            className="me-2"
                                        >
                                            <Text
                                                title={name}
                                                style={`${color} fs-8`}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <Pannel
                            name="Send Us A Message"
                            subName="We typically respond between few hours"
                            icon={solid1}
                            setModalBody={setModalBody}
                            hideModal={hideModal}
                            
                        />
                    </div>
                    <div>
                        <Pannel
                            name="Athlete Representatives on Marketplace"
                            subName="Setting up, paying for, editing, and canceling transfers"
                        />
                        <Pannel
                            name="Athlete Representatives on Marketplace"
                            subName="Setting up, paying for, editing, and canceling transfers"
                        />
                        <Pannel
                            name="Athlete Representatives on Marketplace"
                            subName="Setting up, paying for, editing, and canceling transfers"
                        />
                        <Pannel
                            name="Athlete Representatives on Marketplace"
                            subName="Setting up, paying for, editing, and canceling transfers"
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-7">
                <div className="p-3">
                    <Text 
                        style="fw-600 text-start fs-7 text-start"
                        title="Athlete Representative on Markeplace"
                    />
                    <Text 
                        style="faint fs-8 text-start"
                        title="Setting up, paying for, editing, and cancelling transfers"
                    />
                    <Text 
                        style="faint fs-8 text-start"
                        title="SPAC IPOs are changing the future of initial public offerings. A SPAC is a company with no existing operations. It’s formed to raise capital at an initial public offering and then acquire one or more operating businesses within a time frame.  This year, they’ve raised more than $78.7 billion in gross proceeds, and we’re only halfway through March. Initial investors (aka sponsors), form SPACs to acquire businesses that are within their industry expertise, which then become public due to the acquisition."
                    />
                    <ul>
                        <li  className="faint fs-8 text-start">SPACs are an attractive going-public option for companies that are not ideal candidates for traditional IPOs. Merging with a SPAC is less expensive, and shortens the timeline to go public and trade on an exchange.</li>
                        <li className="faint fs-8 text-start">CultureBanx reported that nearly anyone can start a SPAC, which has been enticing for a cross-section of big-name athletes, Wall Street and Hollywood execs. Read on to learn more about a few of the latest athletes to jump into the booming SPAC market.</li>
                    </ul>
                    <img 
                        src={Image1}
                        alt="object"
                        className="mb-4 w-100"
                    />
                     <img 
                        src={Image2}
                        alt="object"
                        className="mb-4 w-100"
                    />
                    <Text 
                        style="fs-8 fw-bold br-8 p-2 faintIndigo w-100"
                        title="Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere."
                    />
                </div>
            </div>
        </div>
    )
}