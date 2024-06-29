import LogoFooter from "/svg/logo_footer.svg"
import LinkedIn from "/svg/linkedin.svg"
import Twitter from "/svg/twitter.svg"
import Instagram from "/svg/instagram.svg"
import Facebook from "/svg/facebook.svg"
import Tiktok from "/svg/tiktok.svg"
import Youtube from "/svg/youtube.svg"
import App from "/svg/app.svg"
import ArrowUp from "/svg/arrow_up.svg"

const Footer = () => {
	return (
		<footer className="font w-full shadow bg-white">
			<div className="w-full p-4 pr-8 bg-black h-[40%]">
				<div className="sm:flex sm:items-center sm:justify-between">
					<a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
						<img src={LogoFooter}></img>
					</a>
					<ul className="flex flex-wrap items-center lg:w-[50%] justify-between mb-6 text-sm text-white font-bold sm:mb-0 ">
						<h1 className="text-center">Suivez nous</h1>
						<li>
							<a href="#" className="hover:underline me-4 md:me-6 p-4"><img src={LinkedIn}></img></a>
						</li>
						<li>
							<a href="#" className="hover:underline me-4 md:me-6 p-4"><img src={Twitter}></img></a>
						</li>
						<li>
							<a href="#" className="hover:underline me-4 md:me-6 p-4"><img src={Instagram}></img></a>
						</li>
						<li>
							<a href="#" className="hover:underline me-4 md:me-6 p-4"><img src={Facebook}></img></a>
						</li>
						<li>
							<a href="#" className="hover:underline me-4 md:me-6 p-4"><img src={Tiktok}></img></a>
						</li>
						<li>
							<a href="#" className="hover:underline me-4 md:me-6 p-4"><img src={Youtube}></img></a>
						</li>
						<li>
							<a href="#" className="hover:underline me-4 md:me-6 p-4"><img src={App}></img></a>
						</li>
						<li className="flex w-[150px] justify-evenly">
							Haut de la page <img src={ArrowUp}></img>
						</li>
					</ul>
				</div>
			</div>
			<ul className="p-4 grid grid-cols-1 lg:grid-cols-6 gap-4">
				<li className="pb-2">Contact</li>
				<li className="pb-2">Mentions légales</li>
				<li className="pb-2">Vie Privée et Données Personnelles</li>
				<li className="pb-2">Politique des cookies</li>
				<li className="pb-2">Entreprise Today</li>
				<li className="pb-2">Nos publications</li>
				<li className="pb-2">Plan du site</li>
				<li className="pb-2">Annuaire</li>
				<li className="pb-2">Accessibilité : conformité partielle</li>
				<li className="pb-2">Code de Conduite</li>
			</ul>
			<span className="pl-4 pb-4 w-[250px] block text-sm text-[#0D0D0D]">© Entreprise 2004-2024 - Tous droits réservés</span>
		</footer>
	)
}

export default Footer;
