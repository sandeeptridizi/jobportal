import './CreateTicketModal.css';

const CreateTicketModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='create-ticket-modal-overlay'>
      <div className='create-ticket-modal-overlay-background' onClick={onClose}>
        <div className='create-ticket-modal-overlay-container'></div>
      </div>
    </div>
  );
};

export default CreateTicketModal;
