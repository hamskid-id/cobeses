import logo from "../../../assets/image 30.svg"
import { Text } from "../../../elements/text"

export const DashboardBrand=()=>{
    return(
        <div className="d-flex align-items-center px-3 pb-2 w-fitContent">
            <span className="me-1 w-100">
                <img 
                    src={logo} 
                    alt="object not found"
                    className="brandImg"
                />
            </span>
            <span>
                <Text
                    title="COBESS"
                    style="greyYellow fw-600 fs-5"
                />
            </span>
        </div>
    )
}