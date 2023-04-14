import { Dashboardlayout } from "../../components/dashboardlayout"
import { InvitedMembersContent } from "./invitedMemersContent"
import "./invitedmembers.css"
export const InvitedMembersScreen =()=>{
    return(
        <>
            <Dashboardlayout
                BoardChildren={<InvitedMembersContent/>}
                activeRoute="Ma bibliothèque"

            />
        </>
    )
}