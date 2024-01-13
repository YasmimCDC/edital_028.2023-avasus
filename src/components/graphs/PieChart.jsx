import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {GoDotFill} from 'react-icons/go'
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({data}) {
  const [labels, setLabels] = useState([])
  const [values, setValues] = useState([])

  useEffect(() => {
    let labels = [];
    let values = [];
    for (var i = 0; i < data?.length; i++) {
      let info = data[i];
      let label = info.curso;
      let value = info.usuarios;
      labels.push(label);
      values.push(value);
    }
    console.log(labels);
    console.log(values);
    setLabels(labels);
    setValues(values);
  }, [data])


  const dataset = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: ['#FFFFFF', "#D2202C", "#707070", "#2F2E41"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            console.log(context)
            let label = context.parsed + " usuários";
            return label;
          }
        }
      }
    }
  };

  return (
    <div>
      <div className="pie-chart my-chart">
          <Pie data={dataset} options={options}/>
      </div>
      <div className="pie-legend">
        <div className="row-legend">
            <GoDotFill className="color-indicator" style={{color: "#FFFFFF"}}></GoDotFill>
            <p className="text-legend">{labels[0]}: {values[0]}</p>
        </div>
        <div className="row-legend">
            <GoDotFill className="color-indicator" style={{color: "#D2202C"}}></GoDotFill>
            <p className="text-legend">{labels[1]}: {values[1]}</p>
        </div>
        <div className="row-legend">
            <GoDotFill className="color-indicator" style={{color: "#707070"}}></GoDotFill>
            <p className="text-legend">{labels[2]}: {values[2]}</p>
        </div>
        <div className="row-legend">
            <GoDotFill className="color-indicator" style={{color: "#2F2E41"}}></GoDotFill>
            <p className="text-legend">{labels[3]}: {values[3]}</p>
        </div>
      </div>
    </div>
  )
  
}