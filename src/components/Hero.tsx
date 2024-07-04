import heroImg from "/images/hero.png"

const Hero = () => {
	return (
		<div className="relative z-10 top-16 w-full h-fit">
			<img className="w-full h-auto" src={heroImg} alt="" />
			<div className="font relative lg:absolute top-[-150px] lg:top-0 rounded-md flex flex-wrap bg-white lg:w-[45%] p-8 m-16 mb-0 xl:m-20 xl:w-[40%]">
				<h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-loose pb-6">Journée des maladies<br />
					rares 2024 : L'équité en
					action
				</h1>
				<p className="pb-6 2xl:text-2xl ">À l'occasion de la Journée des maladies rares, il est plus important que
					jamais de continuer à rechercher un diagnostic, une innovation, un
					soutien et un accès équitables pour les personnes atteintes de maladies
					rares.
				</p>
				<button className="bg-[#7A00E6] rounded-md text-white p-2 hover:scale-105">En savoir plus</button>
			</div>
		</div>
	)
}

export default Hero;
