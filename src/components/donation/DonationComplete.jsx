import {donationMotivations, donationForms} from '../../data/donationData'

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
              </div>
      
              {donationForms.map((bio) => (
                <p
                  className="mb-4 text-ternary-dark dark:text-ternary-light text-justify"
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

export default DonationComplete;
