import { Text } from "../../../../elements/text"
import { BarChart } from "../../components/chart/barchart"
import { LineChart } from "../../components/chart/linechart"

export const ChartSection=()=>{
    return(
        <div className="d-flex wrap w-100 mb-5">
            <div className="wt-50 p-1">
                <Text
                    title="Vos gains"
                    style="fs-7 fw-600 mb-1 text-start"
                />
                <div className="chart">
                    <LineChart/>
                </div>
            </div>
            <div className="wt-50 p-1">
                <Text
                    title="Votre habitude de lecture"
                    style="fs-7 fw-600 mb-1 text-start"
                />
                <div className="chart">
                    <BarChart/>
                </div>
            </div>
        </div>
    )
}