import { Text } from "../../../elements/text"

export const BtnIconTag=({
    icon,
    text,
    textStyle,
    bgStyle,
    handleClick,
    role,
    dataBsToggle,
    ariaExpanded,
    dataBsTarget
})=>{
    return(
        <button 
            onClick={handleClick}
            className={`${ bgStyle ? bgStyle:"btn bg-greyYellow btn-md"}`}
            role={role}
            data-bs-toggle={dataBsToggle}
            data-bs-target={dataBsTarget}
            aria-expanded={ariaExpanded}
        >
            <div className="d-flex justify-content-center align-items-center">
                <span className="me-2">
                    <img
                        src={icon}
                        alt="object not found"
                        className="btnicon"
                    />
                </span>
                <span>
                    <Text
                        style={`${textStyle?textStyle:"fw-bold text-white btnfs"}`}
                        title={text}
                    />
                </span>
            </div>
        </button>
    )
}