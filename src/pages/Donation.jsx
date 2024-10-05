import DonationComplete from '../components/donation/DonationComplete';
import { DonationProvider } from '../context/DonationContext';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<DonationProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<DonationComplete />
			</motion.div>
		</DonationProvider>
	);
};

export default About;
