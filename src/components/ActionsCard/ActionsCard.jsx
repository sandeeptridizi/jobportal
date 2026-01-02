import './ActionsCard.css';

const ActionsCard = ({ icon, title }) => {
  return (
    <div className='actions-card-container'>
      <span className='actions-card-icon'>{icon}</span>
      <p className='actions-card-title'>{title}</p>
    </div>
  );
};

export default ActionsCard;
