export function Button({ title, children, className }) {
  return (
    <button className={`${className || ''}`}>
      {title} {children}
    </button>
  );
}