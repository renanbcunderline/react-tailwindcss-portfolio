import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import AboutMeBio from '../components/about/AboutMeBio';
import { ProjectsProvider } from '../context/ProjectsContext';
import { AboutMeProvider } from '../context/AboutMeContext';
import Button from '../components/reusable/Button';

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>
			<AboutMeProvider>
				<AboutMeBio  />
			</AboutMeProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/about"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="VER MAIS"
				>
					<Button title="VER MAIS" />
				</Link>
			</div>

			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="MAIS PROJETOS"
				>
					<Button title="MAIS PROJETOS" />
				</Link>
			</div>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/events"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="MAIS EVENTOS"
				>
					<Button title="MAIS EVENTOS" />
				</Link>
			</div>


		</div>
	);
};

export default Home;
