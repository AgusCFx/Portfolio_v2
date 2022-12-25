import Lorem from '/assets/images/lorem-ipsum.jpg'

export const Projects = () => {
	return(
		<section className="projects">
			<article className="cardProject">
				<div className='cardProject__preview'>
					<img src={Lorem} alt="Lorem Ipsum" />
				</div>
				<div className='cardProject__title'>
					<h3>Title</h3>
				</div>
				<div className='cardProject__techs'>
					{/* <img src="" alt="" />
					<img src="" alt="" /> */}
				</div>
			</article>
		</section>
	)
}