export function FormInput({ title, placeholder, type, inputType }) {
  return (
    <div className="form-input">
      <label htmlFor="name">{title}</label>
      {inputType === "input" ? (
        <input type={type} placeholder={placeholder} />
      ) : (
        <select name={title}>
          <option value="">Select</option>
        </select>
      )}
    </div>
  );
}
