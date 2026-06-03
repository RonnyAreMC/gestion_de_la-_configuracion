export default function MenuCard({ item }) {
  return (
    <article className="menu-card">
      <img src={item.img} alt={item.nombre} />
      <div className="menu-body">
        <h3>{item.nombre}</h3>
        <p>{item.descripcion}</p>
        <span className="price">{item.precio}</span>
      </div>
    </article>
  )
}
