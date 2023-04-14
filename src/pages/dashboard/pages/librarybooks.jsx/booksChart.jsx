import  Notification  from "../../../../assets/noti.svg"
import { LineChart } from "../../components/chart/linechart"
import { IconTag } from "../../components/icontag"
import { TitledChart } from "../../components/titledChart"


export const BooksChart=()=>{
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
        <div>
            <TitledChart
                text="Statistiques de visite"
                chart={ 
                    <LineChart
                        data={data}
                        label="Statistiques de visite"
                        borderColor='#3375FF' 
                        backgroundColor="#ADD8E6"
                    />
                }
                style="w-100"
            />
            <IconTag
                icon={Notification }
                text="Dernière mise à jour : 10 mars 2023 . 2 Livres C'est la bibliothèque de COBESS"
                style="faint my-3"
            />
        </div>

    )
}