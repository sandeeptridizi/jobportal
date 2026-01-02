import './ActivitiesCard.css';

import { BsActivity } from 'react-icons/bs';
import { LuBriefcase } from 'react-icons/lu';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { GoPeople } from 'react-icons/go';
import { FiFileText } from 'react-icons/fi';
import { LuClock } from 'react-icons/lu';

const activitiesData = [
  {
    id: 1,
    icon: <LuBriefcase />,
    title: 'New job posted',
    role: 'Senior React Developer by Tech Corp',
    time: '10 mins ago',
  },
  {
    id: 2,
    icon: <IoMdCheckmarkCircleOutline />,
    title: 'Company verified',
    role: 'Startup Inc completed verification',
    time: '25 mins ago',
  },
  {
    id: 3,
    icon: <GoPeople />,
    title: 'New user registered',
    role: 'John Doe joined the platform',
    time: '1 hour ago',
  },
  {
    id: 4,
    icon: <FiFileText />,
    title: 'Application submitted',
    role: 'Jane Smith applied to Product Designer',
    time: '10 mins ago',
  },
];

const ActivitiesCard = () => {
  return (
    <div className='top-companies-card-container'>
      <div className='top-companies-title-icon-container'>
        <h3 className='top-companies-heading'>Recent Activities</h3>
        <BsActivity className='top-companies-star-icon' />
      </div>
      <div className='top-companies-cards'>
        {activitiesData.map((activity) => {
          return (
            <div className='activity-card-container' key={activity.id}>
              <div className='activity-card-icon-container'>
                {activity.icon}
              </div>
              <div className='activity-card-content-container'>
                <p className='activity-card-title'>{activity.title}</p>
                <p className='activity-card-role'>{activity.role}</p>
                <p className='activity-card-time'>
                  <LuClock /> {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivitiesCard;
