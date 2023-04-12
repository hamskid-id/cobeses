import { Brand } from "../../../components/navbarbrand"
import { Text } from "../../../elements/text";
import { routes, supportRoutes } from "./routes";
import  upLogout  from "../../../assets/Featured icon.svg";
import  sideLogout  from "../../../assets/sideLogout.svg";
import { useNavigate } from "react-router-dom";
import { DashboardBrand } from "./brand";

export const SideNav=({
    activeRoute
})=>{
    const navigate = useNavigate();

    return(
        <div className="py-3 border dashboardSide">
            <div className="mb-2">
                <DashboardBrand/>
            </div>
            <div className="d-flex flex-column align-items-start mb-2">
                {
                    routes.map((route,index)=>{
                        const{
                            name,
                            icon,
                            location
                        }=route;
                        return(
                            <div 
                                key={index}
                                className={`${activeRoute ===name?"activeroute":null} d-flex p-1 w-100 ps-4 `}
                                onClick={()=>navigate(location)}
                            >
                                <span className="me-2">
                                    <img 
                                        src={icon}
                                        alt="object not found"
                                        className="dashboard-icon"
                                    />
                                </span>
                                <span>
                                    <Text
                                        title={name}
                                        style="fs-8  fw-600 text-start"
                                    />
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="d-flex flex-column align-items-start mb-3">
                {
                    supportRoutes.map((route,index)=>{
                        const{
                            name,
                            icon,
                            location
                        }=route;
                        return(
                            <div 
                                key={index}
                                className={`${activeRoute ===name?"activeroute":null} d-flex p-1 w-100 ps-4 `}
                                onClick={()=>navigate(location)}
                            >
                                <span className="me-2">
                                    <img 
                                        src={icon}
                                        alt="object not found"
                                        className="dashboard-icon"
                                    />
                                </span>
                                <span>
                                    <Text
                                        title={name}
                                        style="fs-8"
                                    />
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="d-flex flex-column align-items-center p-3 uploadBg ms-4 me-3 border-bottom">
                <div>
                    <img 
                        src={upLogout}
                        alt="object not found"
                    />
                </div>
                <div>
                    <Text
                        title="Cliquez pour telecharge"
                        style="fs-8 fw-600 text-white"
                    />
                </div>
                <div>
                    <Text
                        title="Manuels electroniques, Docs,Livres audio ou videos"
                        style=" upload text-white"
                    />
                </div>
            </div>
            <div className="d-flex justify-content-between p-4">
                <span>
                    <Text
                        title="Se déconnecter"
                        style="fs-8 fw-600"
                    />
                </span>
                <span>
                    <img 
                        src={sideLogout}
                        alt="object not found"
                    />
                </span>
            </div>
            
        </div>
    )
}