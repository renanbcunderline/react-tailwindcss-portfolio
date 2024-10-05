import { useContext } from 'react';
import ResourceSingle from './ResourceSingle';
import { ResourcesContext } from '../../context/ResourcesContext';

const ResourcesGrid = () => {
	const { resources } = useContext(ResourcesContext);

	// Filtrar recursos por categoria
	const bibliotecaRecursos = resources.filter(
		(resource) => resource.category === 'biblioteca'
	);
	const ferramentasTutoriais = resources.filter(
		(resource) => resource.category === 'tutoriais'
	);
	const publicacoes = resources.filter(
		(resource) => resource.category === 'publicacoes'
	);

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Recursos
				</p>
			</div>

			{/* Biblioteca de Recursos */}
			<div className="mt-10 sm:mt-16">
				<h3
					className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
				>
					Biblioteca de Recursos
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
					{bibliotecaRecursos.map((resource) => (
						<ResourceSingle
							title={resource.title}
							// category={resource.category}
							image={resource.img}
							key={resource.id}
						/>
					))}
				</div>
			</div>

			{/* Ferramentas e Tutoriais */}
			<div className="mt-10 sm:mt-16">
				<h3
					className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
				>
					Ferramentas e Tutoriais
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
					{ferramentasTutoriais.map((resource) => (
						<ResourceSingle
							title={resource.title}
							// category={resource.category}
							image={resource.img}
							key={resource.id}
						/>
					))}
				</div>
			</div>

			{/* Publicações */}
			<div className="mt-10 sm:mt-16">
				<h3
					className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
				>
					Publicações
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
					{publicacoes.map((resource) => (
						<ResourceSingle
							title={resource.title}
							// category={resource.category}
							image={resource.img}
							key={resource.id}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ResourcesGrid;
