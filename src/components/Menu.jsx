import MenuCard from './MenuCard'
import { menuItems } from '../data/menu'

export default function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2 className="section-title">Nuestro Menú</h2>
        <p className="section-subtitle">Selección de nuestros favoritos</p>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
