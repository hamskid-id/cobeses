import { Dashboardlayout } from "../../components/dashboardlayout"
import { BiblioContent } from "./biblioScreenContent"
import "./biblio.css"

export const BiblioScreen=()=>{
    return(
        <>
            <Dashboardlayout
                BoardChildren={<BiblioContent/>}
                activeRoute="Ma bibliothèque"
            />
        </>
    )
}