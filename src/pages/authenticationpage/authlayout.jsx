import "./auth.css";
import image from "../../assets/cobb 2.svg"
export const Authlayout=({children})=>{
    return(
        <div className="authBgImg p-2">
            <div className="authChildren bg bg-white p-4 wt-30">
                {children}
            </div>
        </div>
    )
}