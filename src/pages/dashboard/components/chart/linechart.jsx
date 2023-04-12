import {Line} from "react-chartjs-2"
import 'chart.js/auto';
import { useRef, useState } from "react";
export const LineChart =(canvas)=>{
    const data=[
        {
            name:"Juin",
            number:0
        },
        {
            name:"Juin",
            number:7
        },
        {
            name:"Juin",
            number:2
        },
        {
            name:"Jan",
            number:60
        },{
            name:"Fev",
            number:80
        },{
            name:"Mar",
            number:200
        },{
            name:"Avr",
            number:240
        },{
            name:"Peut",
            number:290
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
            fill: true,
            borderColor: '#3375FF' ,
            backgroundColor:"#ADD8E6",
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
        <Line data={barData} options={options}/>
    )
}