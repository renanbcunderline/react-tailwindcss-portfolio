import Card from '../reusable/Card';
import { partnershipData, benefitsPartner, howToBePartner, partnerWays, partnerBenefits } from '../../data/partnershipData';

const Partnerships = () => {
	return (
        <section className="py-5 sm:py-10 mt-5 sm:mt-10">
          <div className="text-center">
            <p className="font-general-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-1 text-ternary-dark dark:text-ternary-light">
            Parcerias
            </p>
          </div>
          <div>
            
            <div className="font-general-regular text-justify">
              
            <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-6xl md:text-7xl lg:text-8xl mb-1 text-ternary-dark dark:text-ternary-light">
                    Nossos parceiros
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
                    {partnershipData.map((partner) => (
                    <Card
                        key={partner.id} 
                        image={partner.img}
                        description={partner.description}
                        hasTitle={false}
                        hasButton={false}
                        hasDescription={true}
                    />
                    ))}
                </div>
                </div>

      
      
              <div className="text-center mt-10">
                <p className="font-general-medium text-2xl sm:text-6xl md:text-7xl lg:text-8xl mb-1 text-ternary-dark dark:text-ternary-light">
                  Como se tornar um parceiro
                </p>

                <p>{howToBePartner}</p>

                <p>Formas de Colaboração:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
                    {partnerWays.map((partner) => (
                    <Card
                        key={partner.id} 
                        image={partner.img}
                        title={partner.title}
                        hasTitle={true}
                        hasButton={false}
                        hasDescription={false}
                    />
                    ))}
                </div>
              </div>
      

              <div className="text-center mt-10">
                <p className="font-general-medium text-2xl sm:text-6xl md:text-7xl lg:text-8xl mb-1 text-ternary-dark dark:text-ternary-light">
                 Beneficios da parceria
                </p>

                <p>{benefitsPartner}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
                    {partnerBenefits.map((partner) => (
                    <Card
                        key={partner.id} 
                        image={partner.img}
                        title={partner.title}
                        hasTitle={true}
                        hasButton={false}
                        hasDescription={false}
                    />
                    ))}
                </div>
              </div>
              
            </div>
          </div>
        </section>
      );
      
};

export default Partnerships;
