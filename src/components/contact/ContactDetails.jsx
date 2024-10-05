import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'Rua da Tecnologia, 123 - Bairro Morumbi, São Paulo, SP, 05650-000',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'compplus@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '(11) 1234-5678',
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Informações de Contato
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Mapa
				</h2>
				<p>Para facilitar sua visita, veja nossa localização no mapa abaixo:</p>
				<div className="flex justify-center my-10">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15832.830681390526!2d-35.9097543!3d-7.2171368!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e2c7816c38f%3A0xd98e854f0b0d6fe1!2sUFCG%20-%20Campus%20Campina%20Grande!5e0!3m2!1spt-BR!2sbr!4v1728157179175!5m2!1spt-BR!2sbr"
						width="600"
						height="450"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>

				<p>Instruções para chegar: Você pode utilizar o transporte público ou seu veículo pessoal. O estacionamento está disponível nas proximidades.</p>
			</div>
		</div>
	);
};

export default ContactDetails;
