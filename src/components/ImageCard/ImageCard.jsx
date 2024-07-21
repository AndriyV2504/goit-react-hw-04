import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onClick(image)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default ImageCard;
