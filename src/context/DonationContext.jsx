import { useState, createContext } from 'react';
// import { donationDataResume } from '../data/donationData';
import { clientsHeading as clientsPageHeading } from '../data/clientsData';
import { clientsData as clientsDataJson } from '../data/clientsData';

const DonationContext = createContext();

export const DonationProvider = ({ children }) => {
	// const [donation, setDonation] = useState(donationDataResume);

	const clientsHeading = clientsPageHeading;

	const [clientsData, setClientsData] = useState(clientsDataJson);

	return (
		<DonationContext.Provider
			value={{
				// donation,
				// setDonation,
				clientsHeading,
				clientsData,
				setClientsData,
			}}
		>
			{children}
		</DonationContext.Provider>
	);
};

export default DonationContext;
