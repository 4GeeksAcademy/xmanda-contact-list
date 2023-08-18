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
				email: "theharrystyles@gmail.com",
				phone: "28748590",
				address: "Hampstead Heath, London, England",
				image:"https://i1.sndcdn.com/avatars-7Oxr51fUHbpFBAla-T6g3zA-t500x500.jpg"
			},
			{
				name: "Beyonce Knowles",
				id: 3,
				email: "beyonce@gmail.com",
				phone: "3464665432",
				address: "Los Angeles, California, USA",
				image:"https://cdn.albumoftheyear.org/artists/sq/beyonce_1626726362.jpg"
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
