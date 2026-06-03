export default function Button({ children, type = 'button', block = false }) {
  return (
    <button type={type} className={`btn ${block ? 'btn-block' : ''}`}>
      {children}
    </button>
  )
}
