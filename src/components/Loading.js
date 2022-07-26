import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loading}>
      <i className="fa-solid fa-spinner fa-3x"></i>
    </div>
  );
}

export default Loading;
