import { Text } from "../elements/text"
import logo from "../assets/image 30.svg"

export const Brand =({
    img,
    color 
})=>{
    return(
        <div className="d-flex align-items-center">
            <span className="me-1 w-100">
                <img 
                    src={img?img:logo} 
                    alt="object not found"
                    className="brandImg"
                />
            </span>
            <span>
                <Text
                    title="COBESS"
                    style={`${color ? color :"greyYellow" } fw-bold fs-5`}
                />
            </span>
        </div>
    )
}