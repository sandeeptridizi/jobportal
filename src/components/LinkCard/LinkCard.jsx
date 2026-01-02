import { NavLink } from 'react-router-dom';
import './LinkCard.css';

const LinkCard = ({ icon, title, link }) => {
  return (
    <NavLink to={link}>
      <li className='linkcard-container'>
        <span className='linkcard-icon'>{icon}</span>
        <span className='linkcard-title'>{title}</span>
      </li>
    </NavLink>
  );
};

export default LinkCard;
