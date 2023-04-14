import { Text } from "../../../elements/text"

export const TitledChart=({
    text,
    chart,
    style
})=>{
    return(
        <div className={`${style?style:"wt-50"} p-1`}>
            <Text
                title={text}
                style="fs-7 fw-600 mb-1 text-start"
            />
            <div className="chart">
                {chart}
            </div>
        </div>
    )
}