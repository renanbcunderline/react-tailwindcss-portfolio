import {donationMessage, donationMotivations, donationTypes, acknowledgmentDonations} from '../../data/donationData'
import FormInput from '../reusable/FormInput';
import Button from '../reusable/Button';
import Card from '../reusable/Card'

const DonationComplete = () => {

	return (
        <section className="py-5 sm:py-10 mt-5 sm:mt-10">
          <div className="text-center">
            <p className="font-general-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-1 text-ternary-dark dark:text-ternary-light">
              Doações
            </p>
          </div>
          <div className="sm:flex sm:gap-10 mt-10 sm:mt-20">
            
            <div className="font-general-regular w-full text-justify">
              
              <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-6xl md:text-7xl lg:text-8xl mb-1 text-ternary-dark dark:text-ternary-light">
                  Por Que Doar?
                </p>
              </div>
      
              {donationMotivations.map((bio) => (
                <p
                  className="mb-4 text-ternary-dark dark:text-ternary-light text-justify"
                  key={bio.id}
                >
                  {bio.bio}
                </p>
              ))}
      
              <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-6xl md:text-7xl lg:text-8xl mb-1 text-ternary-dark dark:text-ternary-light">
                  Formas de Doar
                </p>
                <p className="mb-4 text-ternary-dark dark:text-ternary-light text-justify">{donationMessage}</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10'>
                {donationTypes.map((partner) => (
                    <Card
                        key={partner.id} 
                        image={partner.img}
                        hasButton={true}
                        textButton={partner.title}
                    />
                    ))}
                </div>
              </div>
                 
            </div>
          </div>

          <div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<FormInput
						inputLabel=""
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Nome"
						ariaLabelName="Name"
					/>
          			<FormInput
						inputLabel=""
						labelFor="phone"
						inputType="text"
						inputId="phone"
						inputName="phone"
						placeholderText="Telefone"
						ariaLabelName="Telefone"
					/>
					<FormInput
						inputLabel=""
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Digite seu email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel=""
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Projeto Desejado"
						ariaLabelName="Subject"
					/>

          
					
					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title="Quero doar"
							type="submit"
							aria-label="Quero doar"
						/>
					</div>
				</form>
			</div>
		</div>
		<div className="py-5 sm:py-10 mt-5 sm:mt-10">
              <p className="text-center  font-general-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-1 text-ternary-dark dark:text-ternary-light">
                Reconhecimento
              </p>
			  {acknowledgmentDonations.map((bio) => (
                <p
                  className="mb-4 text-ternary-dark dark:text-ternary-light text-justify"
                  key={bio.id}
                >
                  {bio.text}
                </p>
              ))}
			  <p>Junte-se a nós na construção de um futuro melhor e mais inclusivo!</p>
        </div>
        </section>
      );
      
};

export default DonationComplete;
