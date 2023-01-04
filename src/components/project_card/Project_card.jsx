import './project_card.css'

export const Project_card = ({img, title, url, techs}) => {
	return (
		<a href={url} target="_blank" className="projectCard">
			
			<div className="projectCard__imgContainer">
				<img src={img} alt={title} />
			</div>
			
			<div className="projectCard__infoContainer">
				<h3 className="projectCard__title">{title}</h3>
				<div className="projectCard__techsContainer">
					{techs && techs.map(tech => <img src={tech.img} key={tech.title} />)}
				</div>
			</div>
			<div className='projectCard__polygonDecoration' />
		</a>
	)
}