import { useState, createContext } from 'react';
import { eventsData } from '../data/events';

// Create events context
export const EventsContext = createContext();

// Create the events context provider
export const EventsProvider = (props) => {
	const [events, setEvents] = useState(eventsData);
	const [searchEvent, setSearchEvent] = useState('');
	const [selectEvent, setSelectEvent] = useState('');

	// Search events by event title
	const searchEventsByTitle = events.filter((item) => {
		const result = item.title
			.toLowerCase()
			.includes(searchEvent.toLowerCase())
			? item
			: searchEvent === ''
			? item
			: '';
		return result;
	});

	// Select events by event category
	const selectEventsByCategory = events.filter((item) => {
		let category =
			item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectEvent);
	});

	return (
		<EventsContext.Provider
			value={{
				events,
				setEvents,
				searchEvent,
				setSearchEvent,
				searchEventsByTitle,
				selectEvent,
				setSelectEvent,
				selectEventsByCategory,
			}}
		>
			{props.children}
		</EventsContext.Provider>
	);
};
