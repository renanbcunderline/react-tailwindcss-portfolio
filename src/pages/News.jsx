import News from '../components/news/News';
import { motion } from 'framer-motion';

const NewsPage = () => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<News />
			</motion.div>
		</>
	);
};

export default NewsPage;
