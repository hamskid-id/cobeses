import { Dashboardlayout } from "../../components/dashboardlayout"
import { DetailsContent } from "./detailsContent"
export const DetailsScreen =()=>{
    return(
        <>
            <Dashboardlayout
                BoardChildren={<DetailsContent/>}
                activeRoute="Télécharger"
            />
        </>
    )
}