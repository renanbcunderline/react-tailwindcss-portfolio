import { useState, createContext } from 'react';
import { resourcesData } from '../data/resources';

// Create resources context
export const ResourcesContext = createContext();

// Create the resources context provider
export const ResourcesProvider = (props) => {
	const [resources, setResources] = useState(resourcesData);
	const [searchResource, setSearchResource] = useState('');
	const [selectResource, setSelectResource] = useState('');

	// Search resources by resource title
	const searchResourcesByTitle = resources.filter((item) => {
		const result = item.title
			.toLowerCase()
			.includes(searchResource.toLowerCase())
			? item
			: searchResource === ''
			? item
			: '';
		return result;
	});

	// Select resources by resource category
	const selectResourcesByCategory = resources.filter((item) => {
		let category =
			item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectResource);
	});

	return (
		<ResourcesContext.Provider
			value={{
				resources,
				setResources,
				searchResource,
				setSearchResource,
				searchResourcesByTitle,
				selectResource,
				setSelectResource,
				selectResourcesByCategory,
			}}
		>
			{props.children}
		</ResourcesContext.Provider>
	);
};
