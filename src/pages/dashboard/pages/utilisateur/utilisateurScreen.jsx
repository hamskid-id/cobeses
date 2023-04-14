import { Dashboardlayout } from "../../components/dashboardlayout"
import "./utilisateur.css"
import { UtilisateurContent } from "./utilisateurScreenContent"
export const UtilisateurScreen =()=>{
    return(
        <>
            <Dashboardlayout
                BoardChildren={<UtilisateurContent/>}
                activeRoute="Utilisateurs"

            />
        </>
    )
}