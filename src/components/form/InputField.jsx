export default function InputField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  placeholder = '',
  inputMode,
  maxLength,
  autoComplete,
}) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        inputMode={inputMode}
        maxLength={maxLength}
        autoComplete={autoComplete}
        className={error ? 'invalid' : ''}
      />
      {error && <span className="error-msg">{error}</span>}
    </div>
  )
}
