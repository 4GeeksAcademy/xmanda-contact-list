import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Modal, Button } from "react-bootstrap";
import "../../styles/editcard.css";

const EditCard = ({ contact, showModal, setShowModal }) => {
  const { actions } = useContext(Context);
  const [editedContact, setEditedContact] = useState({
    ...contact,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    actions.saveEditedContact(editedContact);
    actions.cancelEditing(contact.id); 
    setShowModal(false);
  };

  const handleCancel = () => {
    actions.cancelEditing(contact.id);
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      
          <div className="modal-header">
            <h5 className="modal-title">Edit Contact</h5>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={editedContact.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Home Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={editedContact.address}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={editedContact.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={editedContact.email}
                  onChange={handleChange}
                />
              </div>
              <div className="buttons-container">
              <button
                type="button"
                className="btn btn-save me-4 mb-3"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-exit mb-3"
                onClick={handleCancel}
              >
                Close
              </button>
              </div>
            </form>
          </div>
    </Modal>
  );
};

export default EditCard;