export function FormInput({ title, placeholder, type, inputType }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1980 + 1 },
    (_, i) => currentYear - i
  );

  return (
    <div className={`form-input ${inputType === "dob" ? "dob-input" : ""}`}>
      <label>{title}</label>
      {inputType === "dob" ? (
        <div className="dob-fields">
          <input
            type="number"
            min="1"
            max="31"
            placeholder="DD"
            inputMode="numeric"
          />
          <select name="month">
            <option value="">Month</option>
            {monthNames.map((month, idx) => (
              <option key={month} value={idx + 1}>
                {month}
              </option>
            ))}
          </select>
          <select name="year">
            <option value="">Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      ) : inputType === "input" ? (
        <input type={type} placeholder={placeholder} />
      ) : type === "file" ? (
        <input type='file' className="fileInput" />
      ) : (
        <select name={title}>
          <option value="">Select</option>
        </select>
      )}
    </div>
  );
}
