import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Sobre Nós
				</p>
			</div>
			<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
				<div className="font-general-regular w-full text-justify">
					{aboutMe.map((bio) => (
						<p
							className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
							key={bio.id}
						>
							{bio.bio}
						</p>
					))}
				</div>
			</div>
		</section>

	);
};

export default AboutMeBio;
