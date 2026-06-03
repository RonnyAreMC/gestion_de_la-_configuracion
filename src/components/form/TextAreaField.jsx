export default function TextAreaField({
  label,
  name,
  value,
  onChange,
  error,
  placeholder = '',
}) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? 'invalid' : ''}
      />
      {error && <span className="error-msg">{error}</span>}
    </div>
  )
}
