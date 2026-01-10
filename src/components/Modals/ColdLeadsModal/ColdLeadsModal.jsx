import './ColdLeadModal.css';

const ColdLeadModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='cold-leads-modal-overlay'>
      <div className='cold-leads-modal-overlay-background' onClick={onClose}>
        <div className='cold-leads-modal-overlay-container'></div>
      </div>
    </div>
  );
};

export default ColdLeadModal;
