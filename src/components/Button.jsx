export function Button({ title, children, className, onClick }) {
  return (
    <button className={`${className || ""}`} onClick={onClick}>
      {title} {children}
    </button>
  );
}
