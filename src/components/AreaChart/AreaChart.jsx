import './AreaChart.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const platformActivityData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Full-time Jobs',
      data: [65, 78, 90, 82, 95, 110],
      borderColor: '#ffc300',
      backgroundColor: '#ffc10740',
      tension: 0.4,
      fill: true,
      pointRadius: 0,
    },
    {
      label: 'Internships',
      data: [25, 30, 35, 28, 36, 40],
      borderColor: '#4DD0E1',
      backgroundColor: '#4dd0e126',
      tension: 0.4,
      fill: true,
      pointRadius: 0,
    },
    {
      label: 'Part-time Jobs',
      data: [15, 18, 22, 20, 28, 32],
      borderColor: '#d3d3d3',
      backgroundColor: '#90a4ae26',
      tension: 0.4,
      fill: true,
      pointRadius: 0,
    },
  ],
};

const options = {};

const AreaChart = () => {
  return (
    <div className='chart-container'>
      <h2 className='chart-heading'>Platform Activity Trends</h2>
      <div className='chart-content-container'>
        <Line options={options} data={platformActivityData} />
      </div>
    </div>
  );
};

export default AreaChart;
