const ImageCard = ({ image }) => {
  return (
    <div>
      <img src={image.urls.small} />
    </div>
  );
};

export default ImageCard;
