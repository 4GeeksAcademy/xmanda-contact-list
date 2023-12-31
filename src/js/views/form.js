import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/form.css";


export const Form = () => {
  const { actions } = useContext(Context);
  const [newContact, setNewContact] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    image: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleCreateContact = () => {
    actions.saveNewContact(newContact);
  };

  return (
    <div className="formContainer">
      <h2>Add new contact</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={newContact.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={newContact.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone number</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={newContact.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={newContact.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Photo</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={newContact.image}
            onChange={handleInputChange}
          />
        </div>
        <div className="buttons-container">
          <Link to="/">
            <button className="btn btn-contacts me-3">Go Back to Contacts</button>
          </Link>
          <Link to="/">
            <button
              type="button"
              className="btn btn-save"
              onClick={handleCreateContact}
            >
              Save New Contact
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};