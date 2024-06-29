import { useState } from "react";

import LogoNav from '/svg/logo_nav.svg'

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
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
					<a href="#" className="flex items-center lg:order-1">
						<img src={LogoNav} className="w-20"></img>
					</a>
					<a href="#" className="block lg:hidden py-2 px-3 lg:p-0 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700  lg:dark:hover:text-blue-500 dark:hover:bg-gray-300 dark:hover:text-slate-900 lg:dark:hover:bg-transparent dark:border-gray-700">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_363_579)">
								<path d="M16.0004 8.19999C16.0004 9.92124 15.4416 11.5112 14.5004 12.8012L19.2479 17.5525C19.7166 18.0212 19.7166 18.7825 19.2479 19.2512C18.7791 19.72 18.0179 19.72 17.5491 19.2512L12.8016 14.5C11.5116 15.445 9.92164 16 8.20039 16C3.89164 16 0.400391 12.5087 0.400391 8.19999C0.400391 3.89124 3.89164 0.399994 8.20039 0.399994C12.5091 0.399994 16.0004 3.89124 16.0004 8.19999ZM8.20039 13.6C11.1816 13.6 13.6004 11.1812 13.6004 8.19999C13.6004 5.21874 11.1816 2.79999 8.20039 2.79999C5.21914 2.79999 2.80039 5.21874 2.80039 8.19999C2.80039 11.1812 5.21914 13.6 8.20039 13.6Z" fill="#7A00E6" />
							</g>
							<defs>
								<clipPath id="clip0_363_579">
									<rect width="19.2" height="19.2" fill="white" transform="translate(0.400391 0.399994)" />
								</clipPath>
							</defs>
						</svg>
					</a>
				</div>
				<div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-[90%] lg:order-1 font`}>
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
					<ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-white dark:border-gray-300">
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
						<li>
							<a href="#" className="hidden lg:block py-2 px-3 lg:p-0 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700  lg:dark:hover:text-blue-500 dark:hover:bg-gray-300 dark:hover:text-slate-900 lg:dark:hover:bg-transparent dark:border-gray-700 text-sm">
								<svg className="hover:scale-105" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_363_579)">
										<path d="M16.0004 8.19999C16.0004 9.92124 15.4416 11.5112 14.5004 12.8012L19.2479 17.5525C19.7166 18.0212 19.7166 18.7825 19.2479 19.2512C18.7791 19.72 18.0179 19.72 17.5491 19.2512L12.8016 14.5C11.5116 15.445 9.92164 16 8.20039 16C3.89164 16 0.400391 12.5087 0.400391 8.19999C0.400391 3.89124 3.89164 0.399994 8.20039 0.399994C12.5091 0.399994 16.0004 3.89124 16.0004 8.19999ZM8.20039 13.6C11.1816 13.6 13.6004 11.1812 13.6004 8.19999C13.6004 5.21874 11.1816 2.79999 8.20039 2.79999C5.21914 2.79999 2.80039 5.21874 2.80039 8.19999C2.80039 11.1812 5.21914 13.6 8.20039 13.6Z" fill="#7A00E6" />
									</g>
									<defs>
										<clipPath id="clip0_363_579">
											<rect width="19.2" height="19.2" fill="white" transform="translate(0.400391 0.399994)" />
										</clipPath>
									</defs>
								</svg>
							</a>
						</li>
						<li className="flex">
							<div className="pl-2 pt-2 pb-2 lg:p-0">
								<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_355_295)">
										<path d="M13.4695 10.5C13.4695 11.3325 13.4245 12.135 13.3458 12.9H6.39328C6.31078 12.135 6.26953 11.3325 6.26953 10.5C6.26953 9.66749 6.31453 8.86499 6.39328 8.09999H13.3458C13.4283 8.86499 13.4695 9.66749 13.4695 10.5ZM14.5495 8.09999H19.1658C19.3645 8.86874 19.4695 9.67124 19.4695 10.5C19.4695 11.3287 19.3645 12.1312 19.1658 12.9H14.5495C14.6283 12.1275 14.6695 11.325 14.6695 10.5C14.6695 9.67499 14.6283 8.87249 14.5495 8.09999ZM18.772 6.89999H14.3958C14.0208 4.50374 13.2783 2.49749 12.322 1.21499C15.2583 1.99124 17.647 4.12124 18.7683 6.89999H18.772ZM13.1808 6.89999H6.55828C6.78703 5.53499 7.13953 4.32749 7.57078 3.34874C7.96453 2.46374 8.40328 1.82249 8.82703 1.41749C9.24703 1.01999 9.59578 0.899994 9.86953 0.899994C10.1433 0.899994 10.492 1.01999 10.912 1.41749C11.3358 1.82249 11.7745 2.46374 12.1683 3.34874C12.6033 4.32374 12.9558 5.53124 13.1808 6.89999ZM5.34328 6.89999H0.967031C2.09203 4.12124 4.47703 1.99124 7.41703 1.21499C6.46078 2.49749 5.71828 4.50374 5.34328 6.89999ZM0.573281 8.09999H5.18953C5.11078 8.87249 5.06953 9.67499 5.06953 10.5C5.06953 11.325 5.11078 12.1275 5.18953 12.9H0.573281C0.374531 12.1312 0.269531 11.3287 0.269531 10.5C0.269531 9.67124 0.374531 8.86874 0.573281 8.09999ZM7.57078 17.6475C7.13578 16.6725 6.78703 15.465 6.55828 14.1H13.1808C12.952 15.465 12.5995 16.6725 12.1683 17.6475C11.7745 18.5325 11.3358 19.1737 10.912 19.5787C10.492 19.98 10.1433 20.1 9.86953 20.1C9.59578 20.1 9.24703 19.98 8.82703 19.5825C8.40328 19.1775 7.96453 18.5362 7.57078 17.6512V17.6475ZM5.34328 14.1C5.71828 16.4962 6.46078 18.5025 7.41703 19.785C4.47703 19.0087 2.09203 16.8787 0.967031 14.1H5.34328ZM18.772 14.1C17.647 16.8787 15.262 19.0087 12.3258 19.785C13.282 18.5025 14.0208 16.4962 14.3995 14.1H18.772Z" fill="#7A00E6" />
									</g>
									<defs>
										<clipPath id="clip0_355_295">
											<rect width="19.2" height="19.2" fill="white" transform="translate(0.269531 0.899994)" />
										</clipPath>
									</defs>
								</svg>
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
