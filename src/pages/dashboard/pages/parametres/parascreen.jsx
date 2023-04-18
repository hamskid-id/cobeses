import { Dashboardlayout } from "../../components/dashboardlayout"
import { ParametresContent } from "./paracontent"
export const ParametresScreen =()=>{
    return(
        <>
            <Dashboardlayout
                BoardChildren={<ParametresContent/>}
                activeRoute="Paramètres"

            />
        </>
    )
}