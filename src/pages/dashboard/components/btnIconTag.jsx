import { Text } from "../../../elements/text"

export const BtnIconTag=({
    icon,
    text,
    textStyle,
    bgStyle,
    role,
    dataBsToggle,
    ariaExpanded
})=>{
    return(
        <button 
            className={`${ bgStyle ? bgStyle:"btn bg-greyYellow btn-md"}`}
            role={role}
            data-bs-toggle={dataBsToggle}
            aria-expanded={ariaExpanded}
        >
            <div className="d-flex justify-content-center">
                <span className="me-2">
                    <img
                        src={icon}
                        alt="object not found"
                    />
                </span>
                <span>
                    <Text
                        style={`${textStyle?textStyle:"fw-bold fs-8 text-white"}`}
                        title={text}
                    />
                </span>
            </div>
        </button>
    )
}