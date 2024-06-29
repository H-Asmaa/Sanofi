import ArticleImg1 from "/images/article1.png"
import ArticleImg2 from "/images/article2.png"
import ArticleImg3 from "/images/article3.png"

const Articles = () => {
	return (
		<div className="border border-white-600">
			<div className="flex justify-between items-center p-4">
				<h1 className="font-bold text-[30px] leading-loose pb-4">
					Entreprise<br />
					Today
				</h1>
				<button className="font-bold flex justify-between items-center h-10 w-[230px]">Lisez nos derniers articles
					<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15.6662 8.83604C16.0568 8.44541 16.0568 7.81104 15.6662 7.42041L10.6662 2.42041C10.2756 2.02979 9.64121 2.02979 9.25059 2.42041C8.85996 2.81104 8.85996 3.44541 9.25059 3.83604L12.5475 7.12979H2.95996C2.40684 7.12979 1.95996 7.57666 1.95996 8.12979C1.95996 8.68291 2.40684 9.12979 2.95996 9.12979H12.5443L9.25371 12.4235C8.86309 12.8142 8.86309 13.4485 9.25371 13.8392C9.64434 14.2298 10.2787 14.2298 10.6693 13.8392L15.6693 8.83916L15.6662 8.83604Z" fill="#7A00E6" />
					</svg>
				</button>
			</div>
			<div className="w-full lg:flex gap-3 p-4 font">
				<div className="relative lg:w-[35%] rounded-md border border-white-600 ">
					<div className="relative w-full h-[fit-content]">
						<img src={ArticleImg1} alt="Image" className="w-full h-auto object-cover rounded-t-md" />
					</div>
					<div className="p-6">
						<p className="text-[12px] text-gray-700">
							Your Health<br />
							27 février<br />
							2024
						</p>
						<h1 className="font-bold text-[20px] leading-loose pb-4">
							Journée des maladies rares
							2024 : L'équité en action
						</h1>
						<button className="font-bold flex justify-between w-[120px]">Lire l'article
							<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.6662 8.83604C16.0568 8.44541 16.0568 7.81104 15.6662 7.42041L10.6662 2.42041C10.2756 2.02979 9.64121 2.02979 9.25059 2.42041C8.85996 2.81104 8.85996 3.44541 9.25059 3.83604L12.5475 7.12979H2.95996C2.40684 7.12979 1.95996 7.57666 1.95996 8.12979C1.95996 8.68291 2.40684 9.12979 2.95996 9.12979H12.5443L9.25371 12.4235C8.86309 12.8142 8.86309 13.4485 9.25371 13.8392C9.64434 14.2298 10.2787 14.2298 10.6693 13.8392L15.6693 8.83916L15.6662 8.83604Z" fill="#7A00E6" />
							</svg>
						</button>
					</div>
				</div>
				<div className="relative lg:w-[35%] rounded-md border border-white-600 ">
					<div className="relative w-full h-[fit-content]">
						<img src={ArticleImg2} alt="Image" className="w-full h-auto object-cover rounded-t-md" />
					</div>
					<div className="p-6">
						<p className="text-[12px] text-gray-700">
							Your Health<br />
							7 février<br />
							2024
						</p>
						<h1 className="font-bold text-[20px] leading-loose pb-4">
							#NoJargon: Plongez dans le
							monde de la science
						</h1>
						<button className="font-bold flex justify-between w-[120px]">Lire l'article
							<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.6662 8.83604C16.0568 8.44541 16.0568 7.81104 15.6662 7.42041L10.6662 2.42041C10.2756 2.02979 9.64121 2.02979 9.25059 2.42041C8.85996 2.81104 8.85996 3.44541 9.25059 3.83604L12.5475 7.12979H2.95996C2.40684 7.12979 1.95996 7.57666 1.95996 8.12979C1.95996 8.68291 2.40684 9.12979 2.95996 9.12979H12.5443L9.25371 12.4235C8.86309 12.8142 8.86309 13.4485 9.25371 13.8392C9.64434 14.2298 10.2787 14.2298 10.6693 13.8392L15.6693 8.83916L15.6662 8.83604Z" fill="#7A00E6" />
							</svg>
						</button>
					</div>
				</div>
				<div className="relative lg:w-[35%] rounded-md border border-white-600 ">
					<div className="relative w-full h-[fit-content]">
						<img src={ArticleImg3} alt="Image" className="w-full h-auto object-cover rounded-t-md" />
					</div>
					<div className="p-6">
						<p className="text-[12px] text-gray-700">
							Your Health<br />
							5 février<br />
							2024
						</p>
						<h1 className="font-bold text-[20px] leading-loose pb-4">
							Cancer et travail : Agir
							ensemble
						</h1>
						<button className="font-bold flex justify-between w-[120px]">Lire l'article
							<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.6662 8.83604C16.0568 8.44541 16.0568 7.81104 15.6662 7.42041L10.6662 2.42041C10.2756 2.02979 9.64121 2.02979 9.25059 2.42041C8.85996 2.81104 8.85996 3.44541 9.25059 3.83604L12.5475 7.12979H2.95996C2.40684 7.12979 1.95996 7.57666 1.95996 8.12979C1.95996 8.68291 2.40684 9.12979 2.95996 9.12979H12.5443L9.25371 12.4235C8.86309 12.8142 8.86309 13.4485 9.25371 13.8392C9.64434 14.2298 10.2787 14.2298 10.6693 13.8392L15.6693 8.83916L15.6662 8.83604Z" fill="#7A00E6" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Articles;
