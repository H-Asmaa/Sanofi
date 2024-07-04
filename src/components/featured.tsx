import FeaturedImg1 from "/images/featured1.png";
import FeaturedImg2 from "/images/featured2.png";
import FeaturedImg3 from "/images/featured3.png";

import ArrowTopRight from "/svg/arrow_top_right.svg";
import Player from "/svg/player.svg";

const featuredItems = [
	{
		id: 1,
		image: FeaturedImg1,
		title: "Le drapeau de la lutte contre les méningites",
		description: "Créé en collaboration avec trois para-athlètes, Ellie Challis, Théo Curin, Davide Morana et plusieurs membres de la Meningitis Research Foundation / Confederation of Meningitis Organisations, le drapeau de la lutte contre les méningites vise à sensibiliser le public à une maladie qui reste encore, à ce jour, un problème majeur de santé publique à l'échelle mondiale.",
		reverse: true,
		hasPlayer: false,
	},
	{
		id: 2,
		image: FeaturedImg2,
		title: "Les femmes au sein de l'Entreprise - Cristina",
		description: "Rencontrez Cristina Zamora, notre cheffe de projet pour les opérations de R&D en Amérique du Nord et l'une des nombreuses scientifiques inspirantes qui contribuent à renforcer la prochaine génération de femmes leaders dans le domaine de la santé et au-delà.",
		reverse: false,
		hasPlayer: true,
		link: "https://www.youtube.com/watch?v=qLvb_mw-eFk"
	},
	{
		id: 3,
		image: FeaturedImg3,
		title: "200 jours avant les Jeux Paralympiques",
		description: "Rencontrez Cristina Zamora, notre cheffe de projet pour les opérations de R&D en Amérique du Nord et l'une des nombreuses scientifiques inspirantes qui contribuent à renforcer la prochaine génération de femmes leaders dans le domaine de la santé et au-delà.",
		reverse: true,
		hasPlayer: true,
		link: "https://www.youtube.com/watch?v=yPWbK9YgBHA"
	},
];

const Featured = () => {
	return (
		<div className="w-full">
			{featuredItems.map((item) => (
				<div key={item.id} className={`font flex items-center flex-col-reverse ${item.reverse ? 'xl:flex-row' : 'xl:flex-row-reverse'} p-6`}>
					<div className="p-6 w-full xl:w-1/2">
						<h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-loose pb-4">
							{item.title}
						</h1>
						<p className="pb-6 lg:text-1 xl:text-0.5xl 2xl:text-2xl">
							{item.description}
						</p>
						<button className="font-bold flex justify-between text-[13px] w-[140px]">
							En savoir plus
							<img className="hover:scale-105" src={ArrowTopRight} alt="Arrow Icon" />
						</button>
					</div>
					<div className="relative w-full xl:w-1/2 h-auto xl:h-1/2">
						<img src={item.image} alt="Image" className="w-full h-auto object-cover rounded-t-md" />
						{item.hasPlayer && (
							<button className="absolute inset-0 flex justify-center items-center cursor-pointer">
								<a target="_blank" href={item.link}>
									<img className="hover:scale-110" src={Player} alt="Play" />
								</a>
							</button>
						)}
					</div>
				</div>
			))}
		</div>
	);
}

export default Featured;
