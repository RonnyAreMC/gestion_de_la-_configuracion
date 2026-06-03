export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container about-grid">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
          alt="Interior de la cafetería"
        />
        <div className="about-text">
          <h2>Sobre nosotros</h2>
          <p>
            Desde 2010, Café Aroma nació con la misión de ofrecer el mejor café
            de especialidad en un espacio cálido y cercano. Tostamos nuestros
            propios granos y horneamos repostería fresca cada día.
          </p>
          <p>
            Más que una cafetería, somos un punto de encuentro para amigos,
            estudiantes y amantes del buen café.
          </p>
          <div className="about-stats">
            <div className="stat"><strong>15+</strong> Años de experiencia</div>
            <div className="stat"><strong>50k</strong> Clientes felices</div>
            <div className="stat"><strong>30+</strong> Variedades</div>
          </div>
        </div>
      </div>
    </section>
  )
}
