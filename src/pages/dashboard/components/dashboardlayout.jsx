import { Header } from "./header"
import { SideNav } from "./sideNav"

export const Dashboardlayout=({
    BoardChildren,
    activeRoute
})=>{
    
    return(
        <div className="row dashboardLayout dashboardSide">
            <div className="col-md-2">
                <SideNav
                    activeRoute={activeRoute}
                />
            </div>
            <div className="col-md-10 border dashboardSide">
                <div>
                    <Header/>
                    <div className="px-4">
                        {BoardChildren}
                    </div>
                </div>
            </div>
        </div>
    )
}