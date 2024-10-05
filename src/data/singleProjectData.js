// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Project Management UI',
		publishDate: 'Jul 26, 2021',
		tags: 'UI / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'Sobre o cliente',
		CompanyInfo: [
			{
				id: 1,
				title: 'Nome',
				details: 'Company Ltd',
			},
			{
				id: 2,
				title: 'Serviços',
				details: 'UI Design & Frontend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://company.com',
			},
			{
				id: 4,
				title: 'Telefone',
				details: '555 8888 888',
			},
		],
		ObjectivesHeading: 'Objetivos',
		ObjectivesDetails:
			'O projeto de design da Fundação COMP+ visa revitalizar a identidade visual da instituição para refletir seus valores e missão, melhorando a comunicação e aumentando o engajamento com instituições parceiras. O foco está em promover acessibilidade, fortalecer a marca e aprimorar o reconhecimento institucional, facilitando a implementação de projetos e reforçando os princípios de legalidade, impessoalidade, moralidade, publicidade, economicidade e eficiência. Ao final, o projeto busca criar materiais que transmitam uma imagem moderna e profissional, consolidando a posição da Fundação COMP+ como uma organização confiável no apoio a iniciativas de pesquisa e inovação.',
		Technologies: [
			{
				title: 'Ferramentas & Tecnologias',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'TailwindCSS',
					'AdobeXD',
				],
			},
		],
		ProjectDetailsHeading: 'Desafios',
		ProjectDetails: [
			{
				id: 1,
				details:
					'O projeto de design da Fundação COMP+ tem como objetivo revitalizar a identidade visual da instituição, alinhando-a com a sua missão de oferecer suporte administrativo a Instituições Científicas e Tecnológicas (ICTs) e Universidades Públicas. A proposta busca criar uma comunicação mais eficaz e atrativa, refletindo os valores fundamentais da COMP+: legalidade, impessoalidade, moralidade, publicidade, economicidade e eficiência.',
			},
			{
				id: 2,
				details:
					'Este projeto inclui a criação de um novo logotipo, paleta de cores e tipografia que representam a seriedade e a inovação da fundação. Além disso, serão desenvolvidas aplicações visuais que abarquem materiais de comunicação, como folhetos, apresentações institucionais e conteúdo digital, garantindo uma presença coesa e impactante nos diversos meios.',
			},
			{
				id: 3,
				details:
					'O design também terá como foco a acessibilidade e a inclusão, assegurando que todas as partes interessadas possam interagir com a comunicação da COMP+ de maneira fácil e intuitiva. Ao final do projeto, esperamos que a nova identidade visual não apenas fortaleça a imagem da Fundação COMP+, mas também contribua para o engajamento com as instituições que apoia, reforçando seu compromisso com a excelência na gestão administrativa e financeira.',
			}
		],
		SocialSharingHeading: 'Compartilhar',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: '',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: '',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: '',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: '',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: '',
			},
		],
	},
	RelatedProject: {
		title: 'Projetos relacionados',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Desenvolvimento web',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			}
		],
	},
};
