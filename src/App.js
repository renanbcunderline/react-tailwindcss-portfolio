import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';
import NewsPage from './pages/News.jsx';

const About = lazy(() => import('./pages/AboutMe'));
const Events = lazy(() => import('./pages/Events'));
const Resources = lazy(() => import('./pages/Resources'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));
const Partnership = lazy(() => import('./pages/Partnerships.jsx'))
const Donation = lazy(() => import('./pages/Donation.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'));


function App() {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="events" element={<Events />} />
							<Route path="resources" element={<Resources />} />
							<Route path="about" element={<About />} />
							<Route path="partnership" element={<Partnership />}/>
							<Route path="donation" element={<Donation />} />
							<Route path="contact" element={<Contact />} />
							<Route path="blog" element={<NewsPage/>}/>
							<Route path="projects" element={<Projects />} />
							<Route
								path="projects/single-project"
								element={<ProjectSingle />}
							/>
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
