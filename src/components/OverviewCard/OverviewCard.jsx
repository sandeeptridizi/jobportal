import './OverviewCard.css';

const OverviewCard = ({ icon, title, number }) => {
  return (
    <div className='overview-card-container'>
      <div className='overview-card-icon-container'>{icon}</div>
      <div className='overview-card-content-container'>
        <p className='overview-card-title'>{title}</p>
        <p className='overview-card-number'>{number}</p>
      </div>
    </div>
  );
};

export default OverviewCard;
