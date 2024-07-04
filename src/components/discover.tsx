import DiscoverImg1 from "/images/discover1.png"
import DiscoverImg2 from "/images/discover2.png"
import DiscoverImg3 from "/images/discover3.png"

import ArrowTopRight from "/svg/arrow_top_right.svg"

const discoverItems = [
	{
		img: DiscoverImg1,
		title: "Rapport diversité, équité et inclusion",
		content: `Au cours de la première année complète de
			notre nouvelle stratégie People & Culture, les
			enjeux de Diversité, Équité et Inclusion (DE&I)
			ont occupé le devant de la scène. Ce rapport
			célèbre les progrès concrets que nous avons
			réalisés pour refléter la diversité dans nos
			équipes dirigeantes, libérer tout le potentiel
			de nos collaborateurs et collaboratrices et
			avoir un impact sur l'environnement de travail
			mais aussi au-delà.`,
		buttonText: "Lisez le document",
	},
	{
		img: DiscoverImg2,
		title: "Notre héritage",
		content: `Notre societé d'aujourd'hui s'appuie sur un
			héritage qui consiste à transformer
			l'impossible en possible.`,
		buttonText: "En savoir plus sur notre histoire",
	},
	{
		img: DiscoverImg3,
		title: "Notre rapport intégré 2022",
		content: `Découvrez comment nous rendons possible
			l'impossible pour améliorer la vie des gens
			dans le monde.`,
		buttonText: "Lisez le document",
	}
];
const Discover = () => {
	return (
		<div className="border border-white-600">
			<div className="flex justify-between items-center p-4">
				<h1 className="font-bold text-[30px] leading-loose pb-4">
					Découvrir plus
				</h1>
			</div>
			<div className="w-full lg:flex gap-3 p-4 font">
				{discoverItems.map((item, index) => (
					<div key={index} className="relative lg:w-[35%] rounded-md border border-white-600 mb-2 flex flex-col">
						<div className="relative w-full h-[fit-content]">
							<img src={item.img} alt="Image" className="w-full h-auto object-cover rounded-t-md" />
						</div>
						<div className="p-6 flex-grow">
							<h1 className="font-bold text-[20px] leading-loose pb-4">
								{item.title}
							</h1>
							<p className="text-[12px] text-gray-700 pb-4">
								{item.content}
							</p>
						</div>
						<div className="mt-auto p-6">
							<button className="font-bold flex justify-between text-[13px] w-[180px]">
								{item.buttonText}
								<img className="hover:scale-105" src={ArrowTopRight}></img>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Discover;
