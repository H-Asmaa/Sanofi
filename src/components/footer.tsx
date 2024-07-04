import LogoFooter from "/svg/logo_footer.svg";
import LinkedIn from "/svg/linkedin.svg";
import Twitter from "/svg/twitter.svg";
import Instagram from "/svg/instagram.svg";
import Facebook from "/svg/facebook.svg";
import Tiktok from "/svg/tiktok.svg";
import Youtube from "/svg/youtube.svg";
import App from "/svg/app.svg";
import ArrowUp from "/svg/arrow_up.svg";

const socialLinks = [
	{ src: LinkedIn, href: "#" },
	{ src: Twitter, href: "#" },
	{ src: Instagram, href: "#" },
	{ src: Facebook, href: "#" },
	{ src: Tiktok, href: "#" },
	{ src: Youtube, href: "#" },
	{ src: App, href: "#" },
];

const footerLinks = [
	"Contact",
	"Mentions légales",
	"Vie Privée et Données Personnelles",
	"Politique des cookies",
	"Entreprise Today",
	"Nos publications",
	"Plan du site",
	"Annuaire",
	"Accessibilité : conformité partielle",
	"Code de Conduite",
];

const Footer = () => {
	return (
		<footer className="font w-full shadow bg-white">
			<div className="w-full p-4 pr-8 bg-black h-[40%]">
				<div className="flex flex-col items-center lg:flex-row lg:justify-between">
					<a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
						<img src={LogoFooter} alt="Logo" />
					</a>
					<div className="flex flex-col w-full lg:flex-row items-center lg:w-[60%] justify-between mb-6 text-sm text-white font-bold sm:mb-0">
						<h1 className="text-center p-6 pb-2 lg:p-0">Suivez nous</h1>
						<ul className="flex justify-evenly w-full lg:w-[60%] p-4 pt-0 lg:p-0">
							{socialLinks.map((link, index) => (
								<li key={index}>
									<a href={link.href} className="hover:underline">
										<img className="hover:scale-105 pt-3" src={link.src} alt="Social link" />
									</a>
								</li>
							))}
						</ul>
						<button className="flex w-[150px] justify-evenly" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
							Haut de la page <img src={ArrowUp} alt="Arrow up" />
						</button>
					</div>
				</div>
			</div>
			<ul className="p-4 grid grid-cols-1 lg:grid-cols-6 gap-4">
				{footerLinks.map((link, index) => (
					<li className="pb-2 cursor-pointer" key={index}>
						{link}
					</li>
				))}
			</ul>
			<span className="pl-4 pb-4 w-[250px] block text-sm text-[#0D0D0D]">© Entreprise 2004-2024 - Tous droits réservés</span>
		</footer>
	);
};

export default Footer;
