import pobre from '../images/pobre.jpg';
import pouco from '../images/pouco.webp';
import muito from '../images/mt.webp';
import medio from '../images/medio.jpg';

export const donationMotivations = [
	{
		id: 1,
		bio: (
			<>
				As doações são fundamentais para que a Fundação COMP+ possa continuar sua missão de promover a inclusão digital, 
                oferecer bolsas de estudo, e desenvolver programas educacionais que beneficiam a comunidade. Cada contribuição, 
                independentemente do valor, tem um impacto significativo. Os recursos arrecadados são utilizados para:
			</>
		)
	},
	{
		id: 2,
		bio: (
			<>
				<li>
                Financiar bolsas de estudo para estudantes em situação de vulnerabilidade.
				</li>
			</>
		)
	},
    {
		id: 3,
		bio: (
			<>
				<li>
                Apoiar eventos e workshops que promovem a capacitação em tecnologia.
				</li>
			</>
		)
	},
    {
		id: 4,
		bio: (
			<>
				<li>
                Desenvolver materiais educacionais e recursos gratuitos que são disponibilizados para a comunidade.
				</li>
			</>
		)
	},
    {
		id: 5,
		bio: (
			<>
				Sua doação ajuda a transformar vidas e a construir um futuro melhor para todos.
			</>
		)
	},
]

export const donationMessage = 'Oferecemos várias opções de doação para se adequar às suas preferências:'

export const donationTypes = [
	{
		id: 1,
		title: 'Doação Única',
		img: pouco
	},
	{
		id: 2,
		title: 'Doação Mensal',
		img: medio
	},
	{
		id: 3,
		title: 'Doação Corporativa',
		img: muito
	}
]


export const acknowledgmentDonations = [
	{
		id: 1,
		text: (
			<>
			Agradecemos a todos os nossos doadores pelo apoio contínuo! Aqui estão algumas histórias de impacto que mostram como suas doações estão fazendo a diferença:
			</>
		)
	},
	{
		id: 2,
		text: (
			<>
			<li>João Silva: Recebeu uma bolsa de estudos através da Fundação COMP+, e hoje ele é um desenvolvedor de software bem-sucedido. Sua doação ajudou a financiar sua educação e ele agora está retribuindo à comunidade como mentor.</li>
			</>
		)
	},
	{
		id: 3,
		text: (
			<>
			<li>Empresa XYZ: A doação da Empresa XYZ possibilitou a realização de um workshop de inclusão digital para 100 jovens, transformando vidas e capacitando novos talentos.</li>
			</>
		)
	}
]

