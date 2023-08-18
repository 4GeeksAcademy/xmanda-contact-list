const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
		contacts: [
			{
				name: "Lady Gaga",
				id: 1,
				email: "theladygaga@gmail.com",
				phone: "90210239",
				address: "New York City, New York, USA",
				image: "https://i1.sndcdn.com/artworks-949ZzaimBGSdmAK4-60bySg-t500x500.jpg"
			},
			{
				name: "Harry Styles",
				id: 2,
				email: "harrystyles@gmail.com",
				phone: "28748590",
				address: "Hampstead Heath, London, England",
				image: "https://i1.sndcdn.com/avatars-7Oxr51fUHbpFBAla-T6g3zA-t500x500.jpg"
			},
			{
				name: "Beyonce Knowles",
				id: 3,
				email: "beyonce@gmail.com",
				phone: "3464665432",
				address: "Los Angeles, California, USA",
				image: "https://cdn.albumoftheyear.org/artists/sq/beyonce_1626726362.jpg"
			},
			{
				name: "Selena Gomez",
				id: 4,
				email: "selenag@gmail.com",
				phone: "467656532",
				address: "Los Angeles, California, USA",
				image: "https://hips.hearstapps.com/hmg-prod/images/q104-mca-sp23-mc-look2-0052-v2-rgb-fnl-1670248992.jpg?crop=0.8165xw:1xh;center,top&resize=1200:*"
			}

		]
		},
		actions: {
			startEditing: (contactId) => {
			  const store = getStore();
			  const contacts = store.contacts.map((contact) => {
				if (contact.id === contactId) {
				  return { ...contact, isEditing: true };
				} else {
				  return contact;
				}
			  });
			  setStore({ contacts });
			},
	  
			cancelEditing: (contactId) => {
			  const store = getStore();
			  const contacts = store.contacts.map((contact) => {
				if (contact.id === contactId) {
				  return { ...contact, isEditing: false };
				} else {
				  return contact;
				}
			  });
			  setStore({ contacts });
			},
	  
			saveEditedContact: (editedContact) => {
			  const store = getStore();
			  const contacts = store.contacts.map((contact) => {
				if (contact.id === editedContact.id) {
				  return editedContact;
				} else {
				  return contact;
				}
			  });
			  setStore({ contacts });
			},
	  
			saveNewContact: (newContact) => {
			  const store = getStore();
			  const newId = store.contacts.length + 1;
			  const contacts = [
				...store.contacts,
				{ ...newContact, id: newId, isEditing: false },
			  ];
			  setStore({ contacts });
			},
	  
			deleteContact: (contactId) => {
			  const store = getStore();
			  const filteredContacts = store.contacts.filter(
				(contact) => contact.id !== contactId
			  );
			  setStore({ contacts: filteredContacts });
			},
			
		  },
	};
};

export default getState;
