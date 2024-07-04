import Catalogue1 from "/images/catalogue1.png";
import Catalogue2 from "/images/catalogue2.png";
import Catalogue3 from "/images/catalogue3.png";

import ArrowRight from "/svg/arrow_right.svg";
import Player from "/svg/player.svg";

const catalogueItems = [
  {
    image: Catalogue1,
    title: "Virus VS Bacteria",
    description: "Ils font partie de votre vie, mais les connaissez-vous vraiment ? Nos scientifiques vous expliquent les principales différences entre un virus et une bactérie.",
    hasPlayer: true,
    link: "https://youtu.be/rNSNUJ3UNYc"
  },
  {
    image: Catalogue2,
    title: "Santé Grand Public",
    description: "En obtenant la certification B Corp pour Entreprise Santé Grand Public en Amérique du Nord, en Allemagne, en Italie et en Amérique latine, nous faisons partie d'une communauté mondiale qui transforme le monde des affaires en une force pour le bien.",
    hasPlayer: false,
  },
  {
    image: Catalogue3,
    title: "Laisser personne de côté",
    description: "Maladie tropicale négligée, la maladie du sommeil est généralement mortelle en l'absence de traitement. Les patients infectés par la variante la plus aiguë de la maladie, le T.b rhodesiense, n'ont malheureusement bénéficié que de peu d'innovations en matière de traitement. Mais l'espoir pointe à l'horizon. Pour ces patients, nous voyons le potentiel du premier traitement oral pour cette variante de la maladie, soutenant ainsi l'objectif d'élimination de la maladie du sommeil chez l'humain d'ici 2030.",
    hasPlayer: true,
    link: "https://www.youtube.com/watch?v=bCRQ7HA8d7I"
  },
];

const Catalogue = () => {
  return (
    <div className="w-full lg:flex gap-3 p-4 font">
      {catalogueItems.map((item, index) => (
        <div key={index} className="relative lg:w-[35%] rounded-md border border-white-600 mb-2 flex flex-col">
          <div className="relative w-full h-[fit-content]">
            <img src={item.image} alt="Image" className="w-full h-auto object-cover rounded-t-md" />
            {item.hasPlayer && (
              <div className="absolute w-full h-full top-1/2 left-1/2 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                <div className="w-full h-full flex justify-center items-center">
                  <a target="_blank" href={item.link}>
                    <img className="hover:scale-110" src={Player} alt="Play" />
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <div className="flex-grow">
              <h1 className="font-bold text-2xl leading-loose pb-4">
                {item.title}
              </h1>
              <p className="pb-6 2xl:text-2xl">
                {item.description}
              </p>
            </div>
            <button className="font-bold flex justify-between items-center text-[13px] h-10 w-[150px] mt-auto">
              En savoir plus
              <img className="hover:scale-110" src={ArrowRight} alt="Arrow Right" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Catalogue;
