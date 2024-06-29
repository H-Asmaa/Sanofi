import Catalogue1 from "/images/catalogue1.png"
import Catalogue2 from "/images/catalogue2.png"
import Catalogue3 from "/images/catalogue3.png"

const Catalogue = () => {
	return (
		<div className="w-full lg:flex gap-3 p-4 font">
			<div className="relative lg:w-[35%] rounded-md border border-white-600 mb-2">
				<div className="relative w-full h-[fit-content]">
					<img src={Catalogue1} alt="Image" className="w-full h-auto object-cover rounded-t-md" />
					<div className="absolute w-full h-full top-1/2 left-1/2 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 cursor-pointer">
						<div className="w-full h-full flex justify-center items-center">
							<svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect y="0.689941" width="60" height="60" rx="30" fill="#EFEFEF" />
								<path d="M25.3516 22.2134C24.7734 21.858 24.0469 21.8462 23.457 22.1783C22.8672 22.5103 22.5 23.1353 22.5 23.815V37.565C22.5 38.2447 22.8672 38.8697 23.457 39.2017C24.0469 39.5337 24.7734 39.5181 25.3516 39.1666L36.6016 32.2916C37.1602 31.9517 37.5 31.3462 37.5 30.69C37.5 30.0337 37.1602 29.4322 36.6016 29.0884L25.3516 22.2134Z" fill="#7A00E6" />
							</svg>
						</div>
					</div>
				</div>
				<div className="p-6">
					<h1 className="font-bold text-2xl leading-loose pb-4">
						Virus VS Bacteria
					</h1>
					<p className="pb-6 2xl:text-2xl">
						Ils font partie de votre vie, mais les
						connaissez-vous vraiment ? Nos scientifiques
						vous expliquent les principales différences
						entre un virus et une bactérie.
					</p>
					<button className="font-bold flex justify-between items-center h-10 w-[150px]">En savoir plus
						<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.6662 8.83604C16.0568 8.44541 16.0568 7.81104 15.6662 7.42041L10.6662 2.42041C10.2756 2.02979 9.64121 2.02979 9.25059 2.42041C8.85996 2.81104 8.85996 3.44541 9.25059 3.83604L12.5475 7.12979H2.95996C2.40684 7.12979 1.95996 7.57666 1.95996 8.12979C1.95996 8.68291 2.40684 9.12979 2.95996 9.12979H12.5443L9.25371 12.4235C8.86309 12.8142 8.86309 13.4485 9.25371 13.8392C9.64434 14.2298 10.2787 14.2298 10.6693 13.8392L15.6693 8.83916L15.6662 8.83604Z" fill="#7A00E6" />
						</svg>
					</button>
				</div>
			</div>
			<div className="relative lg:w-[35%] rounded-md border border-white-600 mb-2">
				<div className="relative w-full h-[fit-content]">
					<img src={Catalogue2} alt="Image" className="w-full h-auto object-cover rounded-t-md" />
				</div>
				<div className="p-6">
					<h1 className="font-bold text-2xl leading-loose pb-4">
						Santé Grand Public
					</h1>
					<p>
						En obtenant la certification B Corp pour
						Entreprise Santé Grand Public en Amérique du
						Nord, en Allemagne, en Italie et en Amérique
						latine, nous faisons partie d'une communauté
						mondiale qui transforme le monde des
						affaires en une force pour le bien.
					</p>
					<button className="font-bold flex justify-between items-center h-10 w-[150px]">En savoir plus
						<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.6662 8.83604C16.0568 8.44541 16.0568 7.81104 15.6662 7.42041L10.6662 2.42041C10.2756 2.02979 9.64121 2.02979 9.25059 2.42041C8.85996 2.81104 8.85996 3.44541 9.25059 3.83604L12.5475 7.12979H2.95996C2.40684 7.12979 1.95996 7.57666 1.95996 8.12979C1.95996 8.68291 2.40684 9.12979 2.95996 9.12979H12.5443L9.25371 12.4235C8.86309 12.8142 8.86309 13.4485 9.25371 13.8392C9.64434 14.2298 10.2787 14.2298 10.6693 13.8392L15.6693 8.83916L15.6662 8.83604Z" fill="#7A00E6" />
						</svg>
					</button>
				</div>
			</div>
			<div className="relative lg:w-[35%] rounded-md border border-white-600 mb-2">
				<div className="relative w-full h-[fit-content]">
					<img src={Catalogue3} alt="Image" className="w-full h-auto object-cover rounded-t-md" />
					<div className="absolute w-full h-full top-1/2 left-1/2 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 cursor-pointer">
						<div className="w-full h-full flex justify-center items-center">
							<svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect y="0.689941" width="60" height="60" rx="30" fill="#EFEFEF" />
								<path d="M25.3516 22.2134C24.7734 21.858 24.0469 21.8462 23.457 22.1783C22.8672 22.5103 22.5 23.1353 22.5 23.815V37.565C22.5 38.2447 22.8672 38.8697 23.457 39.2017C24.0469 39.5337 24.7734 39.5181 25.3516 39.1666L36.6016 32.2916C37.1602 31.9517 37.5 31.3462 37.5 30.69C37.5 30.0337 37.1602 29.4322 36.6016 29.0884L25.3516 22.2134Z" fill="#7A00E6" />
							</svg>
						</div>
					</div>
				</div>
				<div className="p-6">
					<h1 className="font-bold text-2xl leading-loose pb-4">
						laisser personne de côté
					</h1>
					<p>
						Maladie tropicale négligée, la maladie du
						sommeil est généralement mortelle en
						l'absence de traitement. Les patients infectés
						par la variante la plus aiguë de la maladie, le
						T.b rhodesiense, n'ont malheureusement
						bénéficié que de peu d'innovations en
						matière de traitement. Mais l'espoir pointe à
						l'horizon. Pour ces patients, nous voyons le
						potentiel du premier traitement oral pour
						cette variante de la maladie,
						soutenant ainsi l'objectif d'élimination de la
						maladie du sommeil chez l'humain d'ici 2030.
					</p>
					<button className="font-bold flex justify-between items-center h-10 w-[150px]">En savoir plus
						<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.6662 8.83604C16.0568 8.44541 16.0568 7.81104 15.6662 7.42041L10.6662 2.42041C10.2756 2.02979 9.64121 2.02979 9.25059 2.42041C8.85996 2.81104 8.85996 3.44541 9.25059 3.83604L12.5475 7.12979H2.95996C2.40684 7.12979 1.95996 7.57666 1.95996 8.12979C1.95996 8.68291 2.40684 9.12979 2.95996 9.12979H12.5443L9.25371 12.4235C8.86309 12.8142 8.86309 13.4485 9.25371 13.8392C9.64434 14.2298 10.2787 14.2298 10.6693 13.8392L15.6693 8.83916L15.6662 8.83604Z" fill="#7A00E6" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Catalogue;
