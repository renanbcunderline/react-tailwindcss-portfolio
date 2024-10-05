import EventsGrid from '../components/events/EventsGrid';
import { EventsProvider } from '../context/EventsContext';

const Events = () => {
	return (
		<EventsProvider>
			<div className="container mx-auto">
				<EventsGrid />
			</div>
		</EventsProvider>
	);
};

export default Events;
