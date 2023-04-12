import {Bar} from "react-chartjs-2"
import 'chart.js/auto';
import { useState } from "react";
export const BarChart =()=>{
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

    const [
        barData
    ] = useState({
        labels:data?.map(
            (data)=>data.name
        ),
        datasets:[{
            label:"Vos gains",
            borderColor: '#3375FF',
            backgroundColor: '#3375FF',
            data:data?.map(
                (data)=>data.number
            )
        }]
    });

    const options = {
        responsive: true,
        maintainAspectRatio: false
      };
    return(
        <Bar data={barData} options={options}/>
    )
}