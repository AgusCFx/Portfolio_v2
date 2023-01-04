// Techs icons
import tech_HTML from '/assets/images/icons/techs/bxl-html5.svg'
import tech_CSS from '/assets/images/icons/techs/bxl-css3.svg'
import tech_javascript from '/assets/images/icons/techs/bxl-javascript.svg'
import tech_python from '/assets/images/icons/techs/bxl-python.svg'
import tech_react from '/assets/images/icons/techs/bxl-react.svg'
import tech_figma from '/assets/images/icons/techs/bxl-figma.svg'
import tech_git from '/assets/images/icons/techs/bxl-git.svg'
import tech_sass from '/assets/images/icons/techs/bxl-sass.svg'
import tech_tailwind from '/assets/images/icons/techs/bxl-tailwind-css.svg'

// Img projects import
	// images desk
	import cmRecapados_v2_desk from '/assets/images/projects/cmRecapados_v2_desk.jpg'
	import esseProxy_desk from '/assets/images/projects/esseProxy_desk.jpg'
	import outGalaxy_desk from '/assets/images/projects/outGalaxy_desk.jpg'
	import portfolio_v1_desk from '/assets/images/projects/portfolio_v1_desk.jpg'
	import portfolio_v2_desk from '/assets/images/projects/portfolio_v2_desk.jpg'
	// images mobile
	// import cmRecapados_v2_mobile from 'assets/images/projects/cmRecapados_v2_mobile.jpg'
	// import esseProxy_mobile from 'assets/images/projects/esseProxy_mobile.jpg'
	// import outGalaxy_mobile from 'assets/images/projects/outGalaxy_mobile.jpg'
	// import portfolio_v1_mobile from 'assets/images/projects/portfolio_v1_mobile.jpg'
	// import portfolio_v2_mobile from 'assets/images/projects/portfolio_v2_mobile.jpg'

// Project card module import
import {Project_card} from '../../components/project_card/Project_card'
// Css module import
import './projects.css'

export const Projects = () => {
	return(
		<section className="projects">
			<Project_card
				img={portfolio_v2_desk}
				title={"Portfolio v.2"}
				url={"#"}
				techs={[
					{img: tech_HTML, title: "HTML"},
					{img: tech_CSS, title: "CSS"},
					{img: tech_react, title: "ReactJS"},
					{img: tech_git, title: "Git"},
					{img: tech_figma, title: "Figma"}	
				]}
			/>
			<Project_card
				img={portfolio_v1_desk}
				title={"Portfolio v.1"}
				url={"https://aguscfx.github.io/portfolio_AgusCFx/"}
				techs={[
					{img: tech_HTML, title: "HTML"},
					{img: tech_CSS, title: "CSS"}]}
			/>
			<Project_card
				img={cmRecapados_v2_desk}
				title={"CM Recapados v.2"}
				url={"https://www.cmrecapados.com.ar"}
				techs={[
					{img: tech_HTML, title: "HTML"},
					{img: tech_CSS, title: "CSS"},
					{img: tech_tailwind, title: "Tailwind"}
				]}
			/>
			<Project_card
				img={esseProxy_desk}
				title={"Esse Proxy (fan made site)"}
				url={"https://aguscfx.github.io/Esse_Proxy-pageFanMade/dist/index.html"}
				techs={[
					{img: tech_HTML, title: "HTML"},
					{img: tech_CSS, title: "CSS"},
					{img: tech_tailwind, title: "Tailwind"}
				]}
			/>
			<Project_card
				img={outGalaxy_desk}
				title={"Out Galaxy"}
				url={"https://aguscfx.github.io/Out_Galaxy/"}
				techs={[
					{img: tech_HTML, title: "HTML"},
					{img: tech_CSS, title: "CSS"},
					{img: tech_javascript, title: "JavaScript"}
				]}
			/>			
		</section>
	)
}