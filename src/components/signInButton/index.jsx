import styles from "./styles.module.css";
export default function SignInButton({ id, handleHover, iconUrl }) {
  return (
    <div className={styles.button_wrapper}>
      <img
        id={id}
        onMouseEnter={(event) => handleHover(event.target.id)}
        onMouseLeave={(event) => handleHover(event.target.id)}
        src={iconUrl}
        alt=""
      />
    </div>
  );
}
