import { Text } from "../../../elements/text"
import Search from "../../../assets/searchIcon.svg";
import Avatar from "../../../assets/Avatar.svg";
import Country from "../../../assets/FR.svg";

export const Header=({activeRoute})=>{
    return(
        <div className="nav wrap justify-content-between border-bottom my-5 pb-3 px-4 hideOnMobile">
            <div>
                <Text
                    style="fs-5 fw-600 break"
                    title={activeRoute}
                />
            </div>
            <div className="relative wt-50">
                <input 
                    type="text"
                    className="btn text-start border rounded ps-5 w-100"
                    placeholder="search"
                />
                <img 
                    src={Search}
                    className="searchicon"
                    alt="object not found"
                />
            </div>
            <div className="d-flex">
                <div className="me-3">
                    <img 
                        src={Avatar}
                        alt="object not found"
                    />
                </div>
                <div className="d-flex">
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
                </div>
            </div>
        </div>
    )
}