import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <button type="button" onClick={onClick} className={styles.button}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
