import Partnerships from '../components/partnerships/Partnerships';
import { motion } from 'framer-motion';
import { PartnershipsProvider } from '../context/PartnershipsContext';

const Partnership = () => {
	return (
		<PartnershipsProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<Partnerships />
			</motion.div>
		</PartnershipsProvider>
	);
};

export default Partnership;
