// Iconos de tecnologias
import tech_HTML from '/assets/images/icons/techs/bxl-html5.svg'
import tech_CSS from '/assets/images/icons/techs/bxl-css3.svg'
import tech_javascript from '/assets/images/icons/techs/bxl-javascript.svg'
import tech_python from '/assets/images/icons/techs/bxl-python.svg'
import tech_react from '/assets/images/icons/techs/bxl-react.svg'
import tech_figma from '/assets/images/icons/techs/bxl-figma.svg'
import tech_git from '/assets/images/icons/techs/bxl-git.svg'
import tech_sass from '/assets/images/icons/techs/bxl-sass.svg'
import tech_tailwind from '/assets/images/icons/techs/bxl-tailwind-css.svg'
// CSS styles
import './about.css'


export const About = () => {
  return (
    <section className="about">
      <div className="about__aboutMe">
			  <p>Hace mas de 1 año estudio desarrollo web bajo bootcamps y cursos como CoderHouse, Platzi, pero en mayor parte de forma autodidacta con base en documentacion oficial.
			  Aunque estudio Full-Stack me gusta el Front-End, animaciones, clip-path, interiorizarme en mantener un sitio web lo mas optimo,rapido y accesible posible.
			  </p>
      </div>
			<hr/>
      <div className="about__techs">
			  <h2>Tecnologias que utilizo actualmente</h2>
        <div className="about__techsImages">
          <figure className='techsImages'>
            <img src={tech_HTML} alt="HTML" />
            <span className='tooltip'>HTML</span>
          </figure>
          <figure className='techsImages'>
            <img src={tech_CSS} alt="CSS" />
            <span className='tooltip'>CSS</span>
          </figure>
          <figure className='techsImages'>
            <img src={tech_javascript} alt="" />
            <span className='tooltip'>JavaScript</span>
          </figure>
          <figure className='techsImages'>
            <img src={tech_react} alt="" />
            <span className='tooltip'>ReactJS</span>
          </figure>
          <figure className='techsImages'>
            <img src={tech_python} alt="" />
            <span className='tooltip'>Python</span>
          </figure>
          <figure className='techsImages'>
            <img src={tech_tailwind} alt="" />
            <span className='tooltip'>Tailwind CSS</span>
          </figure>
          <figure className='techsImages'>
            <img src={tech_sass} alt="" />
            <span className='tooltip'>SASS CSS</span>
          </figure>
          <figure className='techsImages'>
            <img src={tech_figma} alt="" />
            <span className='tooltip'>Figma</span>
          </figure>
          <figure className='techsImages'>
            <img src={tech_git} alt="" />
            <span className='tooltip'>GIT</span>
          </figure>
        </div>
      </div>

    </section>
  )
}
