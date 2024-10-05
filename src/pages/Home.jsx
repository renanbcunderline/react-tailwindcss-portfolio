import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import AboutMeBio from '../components/about/AboutMeBio';
import { ProjectsProvider } from '../context/ProjectsContext';
import { AboutMeProvider } from '../context/AboutMeContext';
import Button from '../components/reusable/Button';
import { eventsData } from '../data/eventsData'

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
			<div className="mt-8">
				<h3 className="text-center text-2xl mb-6">Detalhes dos Eventos do Mês</h3>
				{eventsData.map((event, index) => (
					<div key={index} className="flex justify-between items-center bg-gray-100 p-6 rounded-lg shadow mb-4">
					<div>
						<h4 className="text-lg font-semibold">{event.title}</h4>
						<p>{event.description}</p>
						<p className="text-sm mt-2">{event.location}</p>
						<p className="text-sm">{event.speakers}</p>
					</div>
					<div className="flex items-center gap-4">
						<a href={event.link} className="text-blue-500 underline">Ver ticket</a>
						<button className="text-red-500 underline">Cancelar</button>
					</div>
					</div>
				))}
			</div>
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
