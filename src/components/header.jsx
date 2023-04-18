import { useNavigate } from "react-router-dom"
import { Btn } from "../elements/button"
import { Brand } from "./navbarbrand"

export const Header=()=>{
    const navigate = useNavigate();
    return(
        <div className="d-flex align-items-center justify-content-between header w-100 spaceAside">
            <Brand/>
            <Btn 
                value="Devenir membre"
                style="btn text-white btn-md p-2 bg-greyYellow"
                handleClick={()=>navigate("/auth/login")}
            />
        </div>
    )
}