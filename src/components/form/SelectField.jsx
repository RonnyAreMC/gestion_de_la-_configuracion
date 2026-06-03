export default function SelectField({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  options = [],
}) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={error ? 'invalid' : ''}
      >
        <option value="">Seleccione...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <span className="error-msg">{error}</span>}
    </div>
  )
}
