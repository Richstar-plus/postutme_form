import {
  monthNames,
  universities,
  sitting,
  gender,
  olevel,
} from "./SelectOptions";

export function FormInput({ title, placeholder, type, inputType, select }) {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1980 + 1 },
    (_, i) => currentYear - i,
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
        <input type="file" className="fileInput" />
      ) : (
        <select name={title}>
          {select === "institution" ? (
            <>
              <option value="">Select University</option>
              {universities.map((university) => (
                <option key={university} value={university}>
                  {university}
                </option>
              ))}
            </>
          ) : select === "sitting" ? (
            <>
              <option value="">Select</option>
              {sitting.map((sitting) => (
                <option key={sitting} value={sitting}>
                  {sitting}
                </option>
              ))}
            </>
          ) : select === "gender" ? (
            <>
              <option value="">Select</option>
              {gender.map((info) => (
                <option key={info} value={info}>
                  {info}
                </option>
              ))}
            </>
          ) : (
            <option value="">Select</option>
          )}
        </select>
      )}
    </div>
  );
}
