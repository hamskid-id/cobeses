import { Brand } from "../../components/navbarbrand"
import { Text } from "../../elements/text"
import { InviteFooter } from "./footer";
import Image from "../../assets/image (3).svg";
import { Btn } from "../../elements/button";

export const PasswordReset=()=>{
    return(
        <div className="">
            <div className="invite-header">
                <Brand/>
            </div>
            <div  className="invite-spaceAside d-flex justify-content-start flex-column mb-4">
                <Text
                    style="fw-600 fs-5 text-start mb-4"
                    title="Salut Oluwatobiloba,"
                />
                <Text
                    style="faint fs-6 text-start mb-4"
                    title="Vous recevez cet e-mail car nous avons reçu une demande de réinitialisation du mot de passe pour votre compte."
                />
            </div>
            <div  className="invite-spaceAside mb-5">
                <img 
                    src={Image}
                    alt="object not found"
                    className="w-100"
                />
            </div>
            <div  className="invite-spaceAside d-flex justify-content-start flex-column">
                <Btn 
                    value="Réinitialiser le mot de passe"
                    style="py-2 px-3 btn btn-md bg-greyYellow text-white br-8 w-fitContent"
                /><br/>
                <Text
                    style="faint fs-6 text-start mb-4 wt-50"
                    title="Ce lien de réinitialisation de mot de passe expirera dans 60 minutes.
                    Si vous n'avez pas demandé de réinitialisation de mot de passe, aucune autre action n'est requise."
                />
                <Text
                    style="faint fs-5 text-start mb-4"
                    title="COBESES"
                />

            </div>
            <InviteFooter/>
        </div>
    )
}