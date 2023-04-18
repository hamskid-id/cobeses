import { BtnIconTag } from "./btnIconTag"
import  dashicon  from "../../../assets/dash-icon.svg"
import Search from "../../../assets/searchIcon.svg"

export const CaptionFilter=()=>{
    return(
        <div className="d-flex wrap p-1">
<           div className="relative wt-50 me-5  mb-1">
                <input 
                    type="text"
                    className="p-2 border br-8 ps-5 w-100 btn text-start"
                    placeholder="search"
                />
                <img 
                    src={Search}
                    className="searchicon"
                    alt="object not found"
                />
            </div>
            <div className="mb-1">
                <BtnIconTag
                    icon={dashicon}
                    text="Filter"
                    bgStyle="bg-white border btn br-8"
                    textStyle="text-dark"
                />
            </div>
        </div>
    )
}