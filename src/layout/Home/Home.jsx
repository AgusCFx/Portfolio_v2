import './home.css'
import avatar from '/assets/images/avatar/aguscfxTransparent.png'

export const Home = () => {
  return (
    <header>
      <div className="home">
        <div className="home__presentation">
          <h1 className="presentation">
            <span className="presentation__init">Hola, soy </span><br/>AGUSTIN FERNANDEZ
          </h1>
          <hr />
          <p className="presentation__info">
            Full-Stack Argentino, perseguidor de la optimizacion y navegacion rapida.
          </p>
        </div>
        <div className="home__image">
          <img src={avatar} alt="" />
        </div>
      </div>
    </header>
  )
}
