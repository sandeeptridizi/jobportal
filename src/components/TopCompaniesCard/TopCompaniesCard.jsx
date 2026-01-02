import './TopCompaniesCard.css';

import { FiStar } from 'react-icons/fi';

import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { AiOutlineStar } from 'react-icons/ai';

const companiesData = [
  {
    id: 1,
    title: 'Tech Corp',
    iconOne: <IoMdCheckmarkCircleOutline />,
    iconTwo: <AiOutlineStar />,
    text: '45 jobs . 234 applications',
  },
  {
    id: 2,
    title: 'Startup Inc',
    iconOne: <IoMdCheckmarkCircleOutline />,
    iconTwo: '',
    text: '32 jobs . 189 applications',
  },
  {
    id: 3,
    title: 'Design Studio',
    iconOne: '',
    iconTwo: <AiOutlineStar />,
    text: '45 jobs . 234 applications',
  },
  {
    id: 4,
    title: 'Analytics Co',
    iconOne: <IoMdCheckmarkCircleOutline />,
    iconTwo: <AiOutlineStar />,
    text: '24 jobs . 134 applications',
  },
  {
    id: 5,
    title: 'Cloud Systems',
    iconOne: '',
    iconTwo: '',
    text: '21 jobs . 98 applications',
  },
];

const TopCompaniesCard = () => {
  return (
    <div className='top-companies-card-container'>
      <div className='top-companies-title-icon-container'>
        <h3 className='top-companies-heading'>Top Companies</h3>
        <FiStar className='top-companies-star-icon' />
      </div>
      <div className='top-companies-cards'>
        {companiesData.map((company, index) => {
          return (
            <div className='company-card-container' key={company.id}>
              <div className='company-card-number-container'>{index + 1}</div>
              <div className='company-card-content-container'>
                <div className='company-card-title-icon-container'>
                  <h3 className='company-card-title '>{company.title}</h3>
                  {company.iconOne} {company.iconTwo}
                </div>
                <p className='company-card-text'>{company.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCompaniesCard;
