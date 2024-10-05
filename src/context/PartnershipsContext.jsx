import { useState, createContext } from 'react';
import { partnershipData } from '../data/partnershipData';

const PartnershipsContext = createContext();

export const PartnershipsProvider = ({ children }) => {
	const [partnership, setPartnershipData] = useState(partnershipData);

	return (
		<PartnershipsContext.Provider
			value={{
				partnership,
				setPartnershipData
			}}
		>
			{children}
		</PartnershipsContext.Provider>
	);
};

export default PartnershipsContext;
