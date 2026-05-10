export function FormInput({ title, placeholder, type, inputType }) {
  return (
    <div className={`form-input ${inputType === "dob" ? "dob-input" : ""}`}>
      <label>{title}</label>
      {inputType === "dob" ? (
        <div className="dob-fields">
          <input type="number" min="1" max="31" placeholder="DD" />
          <input type="number" min="1" max="12" placeholder="MM" />
          <input type="number" min="1900" max="2099" placeholder="YYYY" />
        </div>
      ) : inputType === "input" ? (
        <input type={type} placeholder={placeholder} />
      ) : (
        <select name={title}>
          <option value="">Select</option>
        </select>
      )}
    </div>
  );
}
