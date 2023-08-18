import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Form } from "./form"
import ContactCard from "../component/contactCard";

export const Home = () => {
	const { store } = useContext(Context);
  
	return (
	  <div className="full mt-5 ">
		{store.contacts.map((contact) => (
		  <div key={contact.id} className="col-12 mb-4">
			<ContactCard contact={contact} />
		  </div>
		))}
	  </div>
	);
  };
  
