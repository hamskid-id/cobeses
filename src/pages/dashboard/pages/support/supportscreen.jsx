import { Dashboardlayout } from "../../components/dashboardlayout"
import { SupportContent } from "./supportcontent"
export const SupportScreen =()=>{
    return(
        <>
            <Dashboardlayout
                BoardChildren={<SupportContent/>}
                activeRoute="Supporte'"

            />
        </>
    )
}