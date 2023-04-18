import Search from "../../../assets/searchIcon.svg";
import { Text } from "../../../elements/text";
import Avatar from "../../../assets/Avatar.svg";
import Country from "../../../assets/FR.svg";
import { DashboardBrand } from "./brand";
export const MobileNav=()=>{
    return(
        <>
            <div className="mobilenav justify-content-between align-items-center pdx-4 pt-2 pb-4 hideOndesktop">
                <div>
                    <Text
                        style="fs-5 fw-600"
                        title="Téléchargers"
                    />
                </div>
                <span className="d-flex">
                    <span className="me-2">
                        <img 
                            src={Search}
                            className=""
                            alt="object not found"
                        />
                    </span>
                    <span className="me-2">
                        <img 
                            src={Avatar}
                            alt="object not found"
                        />
                    </span>
                    <span className="d-flex align-items-center">
                        <span className="me-2">
                                <img 
                                    src={Country}
                                    alt="object not found"
                                />
                            </span>
                        <span>
                            <Text
                                style="fw-bold"
                                title="French"
                            />
                        </span>
                    </span>
                </span>
            </div>
        </>
    )
}