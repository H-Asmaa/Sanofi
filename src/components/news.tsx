import ArrowRight from "/svg/arrow_right.svg";
import Download from "/svg/download.svg"

const articles = [
	{
		date: "24 février 2024",
		title: "Communiqué : Résultats de phase II montrent que le rilzabrutinib permet de réduire rapidement la sévérité des démangeaisons causées par l'urticaire chronique spontanée et d'améliorer significativement l'activité de la maladie chez l'adulte",
		linkText: "Lire le communiqué",
		hasIcon: true,
	},
	{
		date: "24 février 2024",
		title: "Media Update: Dupixent® continues scientific leadership with late-breaking results showing reduced airway inflammation and mucus plugging in adults with uncontrolled moderate-to-severe asthma",
		linkText: "Lire le communiqué",
		hasIcon: true,
	},
	{
		date: "23 février 2024",
		title: "Communiqué de presse : La FDA accorde un examen prioritaire à la demande de licence de produits biologique relative à Dupixent® pour le traitement de la BPCO avec inflammation de type 2",
		linkText: "Lire le communiqué",
		hasIcon: true,
	},
];

const News = () => {
	return (
		<div className="w-full font">
			<h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-loose p-4">
				Nos dernières informations
			</h1>
			{articles.map((article, index) => (
				<article key={index} className="border border-white-600 w-full p-8 flex">
					<div className="w-[80%]">
						<p className="text-[12px] text-gray-700 pb-4">{article.date}</p>
						<p className="font-bold text-2xl pb-4">{article.title}</p>
						<button className="font-bold flex justify-between w-[200px]">
							{article.linkText}
							<img className="hover:scale-105" src={ArrowRight} alt="Download" />
						</button>
					</div>
					<button className="w-[20%] flex justify-end">
						<img className="hover:scale-105" src={Download}></img>
					</button>
				</article>
			))}
			<div className="w-full flex justify-end p-4">
				<button className="font-bold flex justify-between text-[13px] w-[330px]">
					Voir tous les communiqués de presse
					<img className="hover:scale-105" src={ArrowRight}></img>
				</button>
			</div>
		</div>
	);
}

export default News;
