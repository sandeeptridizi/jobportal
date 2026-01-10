import './ColdLeadsFiltersModal.css';

const ColdLeadsFiltersModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='cold-leads-filter-modal-overlay'>
      <div
        className='cold-leads-filter-modal-overlay-background'
        onClick={onClose}
      >
        <div className='cold-leads-filter-modal-overlay-container'></div>
      </div>
    </div>
  );
};

export default ColdLeadsFiltersModal;
