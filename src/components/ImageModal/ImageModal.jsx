import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Image Modal">
      <button type="button" onClick={onClose}>
        close
      </button>
      {image && (
        <div>
          <img src={image.urls.regular} alt={image.alt_description} />
          <p>Author: {image.user.name}</p>
          <p>Likes: {image.likes}</p>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
