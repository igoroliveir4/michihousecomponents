import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, BarElement, LineElement, PointElement, CategoryScale } from 'chart.js/auto';

ChartJS.register(LinearScale, BarElement, LineElement, PointElement, CategoryScale);

const Chart = ({ type, data, options }) => {
  let chart = null;

  switch (type) {
    case 'bar':
      chart = <Bar data={data} options={options} />;
      break;
    case 'line':
      chart = <Line data={data} options={options} />;
      break;
    case 'pie':
      chart = <Pie data={data} options={options} />;
      break;
    default:
      chart = null;
      break;
  }

  return chart;
};

export default Chart;
