import { Dashboardlayout } from "../../components/dashboardlayout"
import "./revenus.css"
import { RevenusContent } from "./revenusScreenContent"
export const RevenusScreen =()=>{
    return(
        <>
            <Dashboardlayout
                BoardChildren={<RevenusContent/>}
                activeRoute="Revenus"
            />
        </>
    )
}