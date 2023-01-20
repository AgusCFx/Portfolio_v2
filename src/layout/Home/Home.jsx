import './home.css'
import avatar from '/assets/images/avatar/aguscfx-circle.png'
import videoImg from '/assets/images/icons/others/bx-video.svg'
import videoOffImg from '/assets/images/icons/others/bx-video-off.svg'

export const Home = ({crt, setCRT}) => {

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
      <button className="crtButton" onClick={() => setCRT(!crt)}>
        {
          crt ? 
            <img src={videoImg} alt="" /> :
            <img src={videoOffImg} alt="" />
        }
      </button>
    </header>
  )
}
