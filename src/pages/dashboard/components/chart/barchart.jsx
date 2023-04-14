import {Bar} from "react-chartjs-2"
import 'chart.js/auto';
import { useState } from "react";
export const BarChart =({
    data,
    label,
    borderColor,
    backgroundColor
})=>{

    const [
        barData
    ] = useState({
        labels:data?.map(
            (data)=>data.name
        ),
        datasets:[{
            label:label,
            borderColor:borderColor,
            backgroundColor:backgroundColor,
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