import './SystemHealthCard.css';

import { BsActivity } from 'react-icons/bs';
import { IoFlashOutline } from 'react-icons/io5';
import { GoPeople } from 'react-icons/go';
import { LuTarget } from 'react-icons/lu';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const SystemHealthCard = () => {
  return (
    <div className='top-companies-card-container'>
      <div className='top-companies-title-icon-container'>
        <h3 className='top-companies-heading'>System Health</h3>
        <BsActivity className='top-companies-star-icon' />
      </div>
      <div className='top-companies-cards'>
        <div className='system-health-card-container'>
          <div className='system-health-icon-title-container'>
            <div className='system-health-icon-container'>
              <BsActivity className='top-companies-star-icon' />
              <p className='system-health-title'>Server Uptime</p>
            </div>
            <p className='system-health-number'>99.9%</p>
          </div>
          <div className='server-uptime-container'>
            <div className='server-child-container'></div>
          </div>
        </div>
        <div className='system-health-card-container'>
          <div className='system-health-icon-title-container'>
            <div className='system-health-icon-container'>
              <IoFlashOutline className='system-health-flash-icon' />
              <p className='system-health-title'>Response Time</p>
            </div>
            <p className='system-health-number'>145ms</p>
          </div>
          <div className='server-uptime-container'>
            <div className='server-second-child-container'></div>
          </div>
        </div>
        <div className='system-health-card-container'>
          <div className='system-health-icon-title-container'>
            <div className='system-health-icon-container'>
              <GoPeople className='system-health-people-icon' />
              <p className='system-health-title'>Active Sessions</p>
            </div>
            <p className='system-health-number'>234</p>
          </div>
          <div className='server-uptime-container'></div>
        </div>
        <div className='system-health-card-container'>
          <div className='system-health-icon-title-container'>
            <div className='system-health-icon-container'>
              <LuTarget className='top-companies-star-icon' />
              <p className='system-health-title'>Error Rate</p>
            </div>
            <p className='system-health-number'>0.02%</p>
          </div>
          <div className='server-uptime-container'>
            <div className='server-third-child-container'></div>
          </div>
        </div>
      </div>
      <div className='system-operation-container'>
        <div className='system-operation-icon-content-container'>
          <IoMdCheckmarkCircleOutline className='system-circle-icon' />
          <div className='system-operation-content'>
            <h3 className='system-operation-heading'>
              All Systems Operational
            </h3>
            <p className='system-operation-text'>
              Platform running smoothly with no issues detected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemHealthCard;
