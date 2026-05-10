export function Button({ title, children, className, onClick, action }) {
  const details = <>{title} {children}</>;
  const prevDetails =  <>{children} {title}</>;
  return (
    <button className={`${className || ""}`} onClick={onClick}>
      {action === "previous" ? prevDetails : details}
    </button>
  );
}
