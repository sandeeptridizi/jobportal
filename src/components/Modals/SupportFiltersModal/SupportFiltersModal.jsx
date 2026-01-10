import './SupportFiltersModal.css';

const SupportFiltersModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='support-filters-modal-overlay'>
      <div
        className='support-filters-modal-overlay-background'
        onClick={onClose}
      >
        <div className='support-filters-modal-overlay-container'></div>
      </div>
    </div>
  );
};

export default SupportFiltersModal;
