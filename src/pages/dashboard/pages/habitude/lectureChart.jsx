
import { BarChart } from "../../components/chart/barchart"
import { TitledChart } from "../../components/titledChart"


export const LecturesChart=()=>{
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
        <div className="mb-4">
            <TitledChart
                text="Votre habitude de lecture"
                chart={ 
                    <BarChart
                        data={data}
                        label="Statistiques de visite"
                        borderColor='#3375FF' 
                        backgroundColor="#ADD8E6"
                    />
                }
                style="w-100"
            />
        </div>

    )
}