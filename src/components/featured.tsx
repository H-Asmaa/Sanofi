import FeaturedImg1 from "/images/featured1.png"
import FeaturedImg2 from "/images/featured2.png"
import FeaturedImg3 from "/images/featured3.png"

const Featured = () => {
	return (
		<div>
			<div className="font flex flex-col-reverse xl:flex-row p-6">
				<div className="p-6">
					<h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-loose pb-4">
						Le drapeau de la lutte
						contre les méningites
					</h1>
					<p className="pb-6 2xl:text-2xl">
						Créé en collaboration avec trois para-athlètes, Ellie Challis,
						Théo Curin, Davide Morana et plusieurs membres de la
						Meningitis Research Foundation / Confederation of Meningitis
						Organisations, le drapeau de la lutte contre les méningites vise
						à sensibiliser le public à une maladie qui reste encore, à ce
						jour, un problème majeur de santé publique à l’échelle
						mondiale.
					</p>
					<button className="font-bold flex justify-between w-[140px]">En savoir plus
						<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.4102 0.5C9.85703 0.5 9.41016 0.946875 9.41016 1.5C9.41016 2.05313 9.85703 2.5 10.4102 2.5H12.9945L6.70391 8.79375C6.31328 9.18437 6.31328 9.81875 6.70391 10.2094C7.09453 10.6 7.72891 10.6 8.11953 10.2094L14.4102 3.91563V6.5C14.4102 7.05313 14.857 7.5 15.4102 7.5C15.9633 7.5 16.4102 7.05313 16.4102 6.5V1.5C16.4102 0.946875 15.9633 0.5 15.4102 0.5H10.4102ZM2.91016 1.5C1.52891 1.5 0.410156 2.61875 0.410156 4V14C0.410156 15.3813 1.52891 16.5 2.91016 16.5H12.9102C14.2914 16.5 15.4102 15.3813 15.4102 14V10.5C15.4102 9.94687 14.9633 9.5 14.4102 9.5C13.857 9.5 13.4102 9.94687 13.4102 10.5V14C13.4102 14.275 13.1852 14.5 12.9102 14.5H2.91016C2.63516 14.5 2.41016 14.275 2.41016 14V4C2.41016 3.725 2.63516 3.5 2.91016 3.5H6.41016C6.96328 3.5 7.41016 3.05313 7.41016 2.5C7.41016 1.94687 6.96328 1.5 6.41016 1.5H2.91016Z" fill="#7A00E6" />
						</svg>
					</button>
				</div>
				<img className="p-6" src={FeaturedImg1} height="600px" width="600px"></img>
			</div>
			<div className="font flex flex-col xl:flex-row p-6">
				<img className="p-6" src={FeaturedImg2} height="600px" width="600px"></img>
				<div className="p-6">
					<h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-loose pb-4">
						Les femmes au sein de
						Entreprise - Cristina
					</h1>
					<p className="pb-6 2xl:text-2xl">
						Rencontrez Cristina Zamora, notre cheffe de projet pour les
						opérations de R&D en Amérique du Nord et l'une des
						nombreuses scientifiques inspirantes qui contribuent à
						renforcer la prochaine génération de femmes leaders dans le
						domaine de la santé et au-delà.
					</p>
					<button className="font-bold flex justify-between w-[140px]">En savoir plus
						<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.4102 0.5C9.85703 0.5 9.41016 0.946875 9.41016 1.5C9.41016 2.05313 9.85703 2.5 10.4102 2.5H12.9945L6.70391 8.79375C6.31328 9.18437 6.31328 9.81875 6.70391 10.2094C7.09453 10.6 7.72891 10.6 8.11953 10.2094L14.4102 3.91563V6.5C14.4102 7.05313 14.857 7.5 15.4102 7.5C15.9633 7.5 16.4102 7.05313 16.4102 6.5V1.5C16.4102 0.946875 15.9633 0.5 15.4102 0.5H10.4102ZM2.91016 1.5C1.52891 1.5 0.410156 2.61875 0.410156 4V14C0.410156 15.3813 1.52891 16.5 2.91016 16.5H12.9102C14.2914 16.5 15.4102 15.3813 15.4102 14V10.5C15.4102 9.94687 14.9633 9.5 14.4102 9.5C13.857 9.5 13.4102 9.94687 13.4102 10.5V14C13.4102 14.275 13.1852 14.5 12.9102 14.5H2.91016C2.63516 14.5 2.41016 14.275 2.41016 14V4C2.41016 3.725 2.63516 3.5 2.91016 3.5H6.41016C6.96328 3.5 7.41016 3.05313 7.41016 2.5C7.41016 1.94687 6.96328 1.5 6.41016 1.5H2.91016Z" fill="#7A00E6" />
						</svg>
					</button>
				</div>
			</div>
			<div className="font flex flex-col-reverse xl:flex-row p-6">
				<div className="p-6">
					<h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-loose pb-4">
						200 jours avant les Jeux
						Paralympiques
					</h1>
					<p className="pb-6 2xl:text-2xl">
						Rencontrez Cristina Zamora, notre cheffe de projet pour les
						opérations de R&D en Amérique du Nord et l'une des
						nombreuses scientifiques inspirantes qui contribuent à
						renforcer la prochaine génération de femmes leaders dans le
						domaine de la santé et au-delà.
					</p>
					<button className="font-bold flex justify-between w-[140px]">En savoir plus
						<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.4102 0.5C9.85703 0.5 9.41016 0.946875 9.41016 1.5C9.41016 2.05313 9.85703 2.5 10.4102 2.5H12.9945L6.70391 8.79375C6.31328 9.18437 6.31328 9.81875 6.70391 10.2094C7.09453 10.6 7.72891 10.6 8.11953 10.2094L14.4102 3.91563V6.5C14.4102 7.05313 14.857 7.5 15.4102 7.5C15.9633 7.5 16.4102 7.05313 16.4102 6.5V1.5C16.4102 0.946875 15.9633 0.5 15.4102 0.5H10.4102ZM2.91016 1.5C1.52891 1.5 0.410156 2.61875 0.410156 4V14C0.410156 15.3813 1.52891 16.5 2.91016 16.5H12.9102C14.2914 16.5 15.4102 15.3813 15.4102 14V10.5C15.4102 9.94687 14.9633 9.5 14.4102 9.5C13.857 9.5 13.4102 9.94687 13.4102 10.5V14C13.4102 14.275 13.1852 14.5 12.9102 14.5H2.91016C2.63516 14.5 2.41016 14.275 2.41016 14V4C2.41016 3.725 2.63516 3.5 2.91016 3.5H6.41016C6.96328 3.5 7.41016 3.05313 7.41016 2.5C7.41016 1.94687 6.96328 1.5 6.41016 1.5H2.91016Z" fill="#7A00E6" />
						</svg>
					</button>
				</div>
				<img className="p-6" src={FeaturedImg3} height="600px" width="600px"></img>
			</div>
		</div>
	)
}

export default Featured;
