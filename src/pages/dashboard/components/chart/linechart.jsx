import {Line} from "react-chartjs-2"
import 'chart.js/auto';
import { useRef, useState } from "react";
export const LineChart =({
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
            fill: true,
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
        <Line data={barData} options={options}/>
    )
}