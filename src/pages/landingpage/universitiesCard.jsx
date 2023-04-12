import { Text } from "../../elements/text"

export const Unicard=({
title,
subTitle,
img
})=>{
    return(
        <div
            className="col-md-4 col-sm-6 col-xs-12 col-lg-3"
        >
            <div className="p-2">
                <img 
                    src={img}
                    className="w-100 mb-4"
                    alt="object not found"
                />
                <Text
                    title={title}
                    style="fw-600 fs-7 mb-2 text-start"
                />
                <Text
                    title={subTitle}
                    style="fs-8 faint text-start"
                />
            </div>
        </div>
    )
}