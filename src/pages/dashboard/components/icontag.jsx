import { Text } from "../../../elements/text"

export const IconTag=({
    text,
    icon,
    style
})=>{
    return(
        <div className="d-flex">
            <span className="me-2">
                <img
                    src={icon}
                    alt="object not found"
                />
            </span>
            <span>
                <Text
                    style={`${style ? style:"fw-bold"}`}
                    title={text}
                />
            </span>
        </div>
    )
}