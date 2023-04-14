import { Dashboardlayout } from "../../components/dashboardlayout"
import "./telecharger.css"
import { TelechargerContent } from "./telechargerScreenContent"
export const TelechargerScreen =()=>{
    return(
        <>
            <Dashboardlayout
                BoardChildren={<TelechargerContent/>}
                activeRoute="Télécharger"

            />
        </>
    )
}