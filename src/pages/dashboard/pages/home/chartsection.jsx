import { Text } from "../../../../elements/text"
import { BarChart } from "../../components/chart/barchart"
import { LineChart } from "../../components/chart/linechart"
import { TitledChart } from "../../components/titledChart"

export const ChartSection=()=>{
    const data=[
        {
            name:"Juin",
            number:0
        },
        {
            name:"Jan",
            number:100
        },{
            name:"Fev",
            number:200
        },{
            name:"Mar",
            number:300
        },{
            name:"Avr",
            number:400
        },{
            name:"Peut",
            number:500
        }
    ]

    return(
        <div className="d-flex wrap w-100 mb-5">
            <TitledChart
                text="Vos gains"
                chart={ 
                    <LineChart
                        data={data}
                        label="Vos gains"
                        borderColor='#3375FF' 
                        backgroundColor="#ADD8E6"
                    />}
            />
             <TitledChart
                text="Votre habitude de lecture"
                chart={ 
                    <BarChart
                        data={data}
                        label="Vos gains"
                        borderColor="#3375FF"
                        backgroundColor="#3375FF"
                    />
                }
            />
        </div>
    )
}