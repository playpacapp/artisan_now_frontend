import React from 'react';
import { registerables , Chart } from "chart.js";
import { Line } from 'react-chartjs-2';

Chart.register(...registerables );

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Example Dataset',
      data: [0, 20, 30, 40, 120, 300, 700],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const options = {
  scales: {
    xAxis: {
      type: 'category',
    },
    yAxis: {
      type: 'linear',
      beginAtZero: true,
    },
  },
};

export const LineChart: React.FC = () => (
  <>
    <Line data={data} options={options} />
  </>
);