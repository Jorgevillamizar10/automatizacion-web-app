import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { auxData, formatData } from "./formatData";

function getRandomNumber() {
  return Math.random() * 100;
}

export const options = {
  width: 500,
  height: 220,
  redFrom: 90,
  redTo: 100,
  yellowFrom: 75,
  yellowTo: 90,
  minorTicks: 5,
};

export const ChartApp = () => {
  const realData = formatData(auxData);
  const [indexador, setIndexador] = useState(0);
  const [data, setData] = useState(getData);
  
  function getData() {
    return [
      ["Label", "Value"],
      ["Thermistor 1", realData?.t1?.[indexador] ?? getRandomNumber()],
      ["Thermistor 2", realData?.t2?.[indexador] ?? getRandomNumber()],
      ["Thermistor 3", realData?.t3?.[indexador] ?? getRandomNumber()],
    ];
  }

  useEffect(() => {
    const id = setInterval(() => {
      setData(getData(indexador));
      if (indexador === 6) {
        setIndexador(0);
      } else {
        setIndexador((i) => i + 1);
      }
    }, 3000);

    return () => {
      clearInterval(id);
    };
  });

  return (
    <div className='w-full flex flex-col items-center justify-around'>
        <h2 className="text-3xl text-white text-left mt-12 font-bold pl-8 lg:pl-1 mb-8">Prueba {indexador + 1} </h2>
      <Chart
        chartType="Gauge"
        data={data}
        options={options}
      />
    </div>
  );
}
