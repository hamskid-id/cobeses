import { Dashboardlayout } from "../../components/dashboardlayout"
import "./librarybooks.css"
import { LibrarybooksContent } from "./librarybooksContent"
export const LibrarybooksScreen =()=>{
    return(
        <>
            <Dashboardlayout
                BoardChildren={<LibrarybooksContent/>}
                activeRoute="Ma bibliothèque"
            />
        </>
    )
}