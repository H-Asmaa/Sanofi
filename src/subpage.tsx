import Featured from "./components/featured";
import Catalogue from "./components/catalogue";
import Articles from "./components/articles";
import News from "./components/news";
import Discover from "./components/discover";
import SubFooter from "./components/subFooter";

const SubPage = () => {
	return (
		<div className="bg-white lg:mt-28">
			<Featured />
			<Catalogue />
			<Articles />
			<News />
			<Discover />
			<SubFooter />
		</div>
	)
}

export default SubPage;
