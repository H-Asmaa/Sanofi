import { useState } from "react";

import LogoNav from '/svg/logo_nav.svg'
import Search from '/svg/search.svg'
import Globe from '/svg/globe.svg'

const searchForm = () => {
	return (
		<form className="max-w-sm mx-auto">
			<input
				type="text"
				id="simple-search"
				className="font bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-200 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
				placeholder="Search..."
				required
			/>
		</form>
	)
}

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isClicked, setIsClicked] = useState(false);
	const [isClickedLg, setIsClickedLg] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleClick = () => {
		setIsClicked(!isClicked);
	};

	const handleClickLg = () => {
		setIsClickedLg(!isClickedLg);
	};

	return (
		<nav className="absolute z-20 w-full h-16 bg-white border-gray-200 text-black pr-4">
			<div className="flex flex-wrap items-center justify-between p-4">
				<div className="flex items-center justify-between w-full lg:w-auto">
					<button
						data-collapse-toggle="navbar-language"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-[#7A00E6] dark:hover:[#7A00E6] dark:focus:[#7A00E6]"
						aria-controls="navbar-language"
						aria-expanded={isOpen}
						onClick={handleToggle}>
						<span className="sr-only">Open main menu</span>
						<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
						</svg>
					</button>
					<a href="#" className="flex items-center lg:order-1 mx-auto lg:mx-0">
						<img src={LogoNav} className="w-20" alt="Logo" />
					</a>
					<div className="h-10 flex flex-row-reverse lg:hidden">
						<button
							onClick={handleClick}
							className='pl-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-[#7A00E6] dark:hover:[#7A00E6] dark:focus:[#7A00E6]'>
							<img src={Search}></img>
						</button>
						{isClicked && searchForm()}
					</div>
				</div>
				<div className={`items-center justify-between gap-6 ${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-[90%] lg:order-1 font`}>
					<ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-white lg:white dark:border-gray-300 text-black ">
						<li>
							<a href="#" className="block py-2 px-3 bg-[#7b00e697] rounded lg:bg-transparent lg:p-0 lg:dark:text-blue-500 text-sm" aria-current="page">Notre Entreprise</a>
						</li>
						<li>
							<a href="#" className="block py-2 px-3 lg:p-0 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700  lg:dark:hover:text-blue-500 dark:hover:bg-gray-300 dark:hover:text-slate-900 lg:dark:hover:bg-transparent dark:border-gray-700 text-sm">Notre science</a>
						</li>
						<li>
							<a href="#" className="block py-2 px-3 lg:p-0 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700  lg:dark:hover:text-blue-500 dark:hover:bg-gray-300 dark:hover:text-slate-900 lg:dark:hover:bg-transparent dark:border-gray-700 text-sm">Votre Santé</a>
						</li>
						<li>
							<a href="#" className="block py-2 px-3 lg:p-0 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700  lg:dark:hover:text-blue-500 dark:hover:bg-gray-200 dark:hover:text-slate-900 lg:dark:hover:bg-transparent dark:border-gray-700 text-sm">Partenariat</a>
						</li>
					</ul>
					<ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0  dark:border-gray-300 bg-white">
						<li>
							<a href="#" className="block py-2 px-3 lg:p-0 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700  lg:dark:hover:text-blue-500 dark:hover:bg-gray-300 dark:hover:text-slate-900 lg:dark:hover:bg-transparent dark:border-gray-700 text-sm">Média</a>
						</li>
						<li>
							<a href="#" className="block py-2 px-3 lg:p-0 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700  lg:dark:hover:text-blue-500 dark:hover:bg-gray-300 dark:hover:text-slate-900 lg:dark:hover:bg-transparent dark:border-gray-700 text-sm">Investisseurs</a>
						</li>
						<li>
							<a href="#" className="block py-2 px-3 lg:p-0 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700  lg:dark:hover:text-blue-500 dark:hover:bg-gray-300 dark:hover:text-slate-900 lg:dark:hover:bg-transparent dark:border-gray-700 text-sm">Carrières</a>
						</li>
						<li>
							<a href="#" className="block py-2 px-3 lg:p-0 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700  lg:dark:hover:text-blue-500 dark:hover:bg-gray-300 dark:hover:text-slate-900 lg:dark:hover:bg-transparent dark:border-gray-700 text-sm">Partenariat Paris 2024</a>
						</li>
						<li className="flex">
							<button onClick={handleClickLg} className="hidden lg:block py-4 px-3 lg:p-0 rounded lg:hover:bg-transparent lg:hover:text-blue-700  lg:dark:hover:text-blue-500 dark:hover:bg-gray-300 dark:hover:text-slate-900 lg:dark:hover:bg-transparent dark:border-gray-700 text-sm">
								<img src={Search}></img>
							</button>
							<div className="hidden lg:block">
								{isClickedLg && searchForm()}
							</div>
						</li>
						<li className="flex">
							<div className="pl-2 pt-2 pb-2 lg:p-0">
								<img src={Globe}></img>
							</div>
							<a href="#" className="block w-full py-2 px-3 lg:p-0 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700  lg:dark:hover:text-blue-500 dark:hover:bg-gray-300 dark:hover:text-slate-900 lg:dark:hover:bg-transparent dark:border-gray-700 text-sm">&nbsp;Global</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
