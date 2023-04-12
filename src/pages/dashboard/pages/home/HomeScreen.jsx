import { HomeScreenContent } from "./HomeScreenContent"
import { Dashboardlayout } from "../../components/dashboardlayout"
import "./home.css"
export const HomeScreen =()=>{
    return(
        <>
            <Dashboardlayout
                BoardChildren={<HomeScreenContent/>}
                activeRoute="Tableau de bord"
            />
        </>
    )
}