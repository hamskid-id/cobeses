import { Dashboardlayout } from "../../components/dashboardlayout"
import "./habitude.css"
import { HabitudeContent } from "./habitudeScreenContent"
export const HabitudeScreen =()=>{
    return(
        <>
            <Dashboardlayout
                BoardChildren={<HabitudeContent/>}
                activeRoute="Habitudes de lecture"

            />
        </>
    )
}