import {blogData} from '../../data/newsBlogData';
import Card from '../reusable/Card';

const News = () => {

	return (
        <section className="py-5 sm:py-10 mt-5 sm:mt-10">
          <div className="text-center">
            <p className="font-general-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-1 text-ternary-dark dark:text-ternary-light">
                Noticias/Blog
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
                    {blogData.map((partner) => (
                    <Card
                        key={partner.id} 
                        image={partner.img}
                        hasTitle={false}
                        hasButton={true}
                        textButton={partner.title}
                        hasDescription={false}
                    />
                    ))}
            </div>
        </section>
      );
      
};

export default News;