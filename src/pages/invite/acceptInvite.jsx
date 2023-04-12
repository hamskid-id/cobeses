import { Brand } from "../../components/navbarbrand"
import { Text } from "../../elements/text"
import { InviteFooter } from "./footer";
import Image from "../../assets/image (2).svg";
import BtnImage from "../../assets/Frame 3024.svg";
import { Btn } from "../../elements/button";

export const AcceptInvite=()=>{
    return(
        <div className="">
            <div className="invite-header">
                <Brand/>
            </div>
            <div  className="invite-spaceAside mb-4">
                <img 
                    src={Image}
                    alt="object not found"
                    className="w-100"
                />
            </div>
            <div  className="invite-spaceAside d-flex justify-content-start flex-column">
                <Text
                    style="fw-600 fs-5 text-start mb-4"
                    title="Salut Oluwatobiloba,"
                />
                <Text
                    style="faint fs-6 text-start mb-4 wt-50"
                    title="Martins Fidelis vous a invité à Martins Fidelis bibliothèque Cliquez sur le lien ci-dessous pour accepter l'invitation"
                />
                <Btn 
                    value="Accepter l'invitation"
                    style="py-2 px-3 btn btn-md bg-greyYellow text-white br-8 w-fitContent"
                /><br/>
                 <button className="bg bg-white mb-5 p-0 py-2 w-fitContent">
                    <img 
                        src={BtnImage}
                        alt="object not found"
                    />
                </button>
                <Text
                    style="faint fs-5 text-start mb-4"
                    title="COBESES"
                />
            </div>
            <InviteFooter/>
        </div>
    )
}