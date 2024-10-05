import ResourcesGrid from '../components/resources/ResourcesGrid';
import { ResourcesProvider } from '../context/ResourcesContext';

const Resources = () => {
	return (
		<ResourcesProvider>
			<div className="container mx-auto">
				<ResourcesGrid />
			</div>
		</ResourcesProvider>
	);
};

export default Resources;
