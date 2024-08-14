export default function SignInButton({ id, handleHover, iconUrl }) {
  return (
    <div style={{ userSelect: "none" }}>
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
