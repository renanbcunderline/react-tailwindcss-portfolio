const Card = ({ title, image, link, description, textButton, hasTitle, hasButton, hasDescription }) => {
	return (
		<>  
           <div className="w-64 border bg-white dark:bg-ternary-dark border-ternary-light dark:border-ternary-dark shadow-lg rounded-lg p-5">
                <img
                    src={image}
                    className="w-full h-auto rounded-t-lg mb-4"
                    alt="Titulo do card"
                />
                
                {hasTitle && (
                    <p className="text-xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
                    {title}
                    </p>
                )}
                {hasDescription && (
                    <p className="text-base text-ternary-dark dark:text-ternary-light mb-4">
                        {description}
                    </p>
                )

                }
                

                {hasButton && (
                    <a href={link} className="inline-block bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-primary-dark">
                    {textButton}
                    </a>
                )}
            </div>
		</>
	);
};

export default Card;