import ArticleImg1 from "/images/article1.png";
import ArticleImg2 from "/images/article2.png";
import ArticleImg3 from "/images/article3.png";

import ArrowRight from "/svg/arrow_right.svg";

const articleItems = [
	{
		id: 1,
		image: ArticleImg1,
		category: "Your Health",
		date: "27 février 2024",
		title: "Journée des maladies rares 2024 : L'équité en action",
	},
	{
		id: 2,
		image: ArticleImg2,
		category: "Your Health",
		date: "7 février 2024",
		title: "#NoJargon: Plongez dans le monde de la science",
	},
	{
		id: 3,
		image: ArticleImg3,
		category: "Your Health",
		date: "5 février 2024",
		title: "Cancer et travail : Agir ensemble",
	},
];

const Articles = () => {
	return (
		<div className="border border-white-600">
			<div className="flex justify-between items-center p-4">
				<h1 className="font-bold text-[30px] leading-loose pb-4">
					Entreprise<br />
					Today
				</h1>
				<button className="font-bold flex justify-between items-center h-10 w-[230px]">
					Lisez nos derniers articles
					<img src={ArrowRight}></img>
				</button>
			</div>
			<div className="w-full lg:flex gap-3 p-4 font">
				{articleItems.map((item) => (
					<div key={item.id} className="relative lg:w-[35%] rounded-md border border-white-600 flex flex-col h-full">
						<div className="relative w-full h-[fit-content]">
							<img src={item.image} alt="Image" className="w-full h-auto object-cover rounded-t-md" />
						</div>
						<div className="p-6 flex-grow">
							<p className="text-[12px] text-gray-700">
								{item.category}<br />
								{item.date}
							</p>
							<h1 className="font-bold text-[20px] leading-loose pb-4">
								{item.title}
							</h1>
						</div>
						<div className="p-6 mt-auto">
							<button className="font-bold text-[13px] flex justify-between w-[120px]">
								Lire l'article
								<img className="hover:scale-105" src={ArrowRight}></img>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Articles;
