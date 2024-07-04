import ArrowTopRightWhite from "/svg/arrow_top_right_white.svg"

const SubFooter = () => {
	return (
		<div className="bg-[#F5F5F5] font flex flex-col items-center w-full p-8">
			<h1 className="font-bold text-[30px] leading-loose w-[50%] text-center">
				Construisez votre carrière avec Entreprise
			</h1>
			<p className="p-4 w-[70%] text-center">
				Vous serez surpris de voir tout ce que vous pouvez accomplir chez Entreprise. Découvrez votre avenir ici.
			</p>
			<button className="bg-[#7A00E6] p-2 rounded-md w-[200px] lg:w-[300px] flex justify-evenly text-white">
				<img className="hover:scale-105" src={ArrowTopRightWhite}></img>
				Accéder au portail Carrières
			</button>
		</div>
	)
}

export default SubFooter;
