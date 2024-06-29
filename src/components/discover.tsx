import DiscoverImg1 from "/images/discover1.png"
import DiscoverImg2 from "/images/discover2.png"
import DiscoverImg3 from "/images/discover3.png"

const Discover = () => {
	return (
		<div className="border border-white-600">
			<div className="flex justify-between items-center p-4">
				<h1 className="font-bold text-[30px] leading-loose pb-4">
					Découvrir plus
				</h1>
			</div>
			<div className="w-full lg:flex gap-3 p-4 font">
				{[{
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
					buttonWidth: "w-[180px]",
				}, {
					img: DiscoverImg2,
					title: "Notre héritage",
					content: `Notre societé d'aujourd'hui s'appuie sur un
						héritage qui consiste à transformer
						l'impossible en possible.`,
					buttonText: "En savoir plus sur notre histoire",
					buttonWidth: "w-[290px]",
				}, {
					img: DiscoverImg3,
					title: "Notre rapport intégré 2022",
					content: `Découvrez comment nous rendons possible
						l'impossible pour améliorer la vie des gens
						dans le monde.`,
					buttonText: "Lisez le document",
					buttonWidth: "w-[180px]",
				}].map((item, index) => (
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
							<button className={`font-bold flex justify-between ${item.buttonWidth}`}>
								{item.buttonText}
								<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10.4102 0.5C9.85703 0.5 9.41016 0.946875 9.41016 1.5C9.41016 2.05313 9.85703 2.5 10.4102 2.5H12.9945L6.70391 8.79375C6.31328 9.18437 6.31328 9.81875 6.70391 10.2094C7.09453 10.6 7.72891 10.6 8.11953 10.2094L14.4102 3.91563V6.5C14.4102 7.05313 14.857 7.5 15.4102 7.5C15.9633 7.5 16.4102 7.05313 16.4102 6.5V1.5C16.4102 0.946875 15.9633 0.5 15.4102 0.5H10.4102ZM2.91016 1.5C1.52891 1.5 0.410156 2.61875 0.410156 4V14C0.410156 15.3813 1.52891 16.5 2.91016 16.5H12.9102C14.2914 16.5 15.4102 15.3813 15.4102 14V10.5C15.4102 9.94687 14.9633 9.5 14.4102 9.5C13.857 9.5 13.4102 9.94687 13.4102 10.5V14C13.4102 14.275 13.1852 14.5 12.9102 14.5H2.91016C2.63516 14.5 2.41016 14.275 2.41016 14V4C2.41016 3.725 2.63516 3.5 2.91016 3.5H6.41016C6.96328 3.5 7.41016 3.05313 7.41016 2.5C7.41016 1.94687 6.96328 1.5 6.41016 1.5H2.91016Z" fill="#7A00E6" />
								</svg>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Discover;
