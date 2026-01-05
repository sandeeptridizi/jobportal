import './PieChart.css';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const opportunityData = {
  labels: [
    'Full-time Jobs',
    'Tutor Sessions',
    'Courses',
    'Freelance Gigs',
    'Internships',
  ],
  datasets: [
    {
      data: [650, 890, 234, 178, 287],
      backgroundColor: ['#FACC15', '#06B6D4', '#22C55E', '#8B5CF6', '#9CA3AF'],
      borderColor: '#FFFFFF',
      borderWidth: 1,
    },
  ],
};

const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
  },
};

const PieChart = () => {
  return (
    <div className='pie-chart-container'>
      <div className='pie-chart-content-container'>
        <h2 className='pie-chart-heading'>Opportunity Distribution</h2>
        <p className='pie-chart-text'>All platform offerings</p>
      </div>
      <div>
        <Pie options={pieOptions} data={opportunityData} />
      </div>
    </div>
  );
};

export default PieChart;
