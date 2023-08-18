import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import EditCard from "../views/editCard";
import "../../styles/contactcard.css";

const ContactCard = ({ contact }) => {
    const { store, actions } = useContext(Context);
    const [showModal, setShowModal] = useState(false); 

    const handleEditClick = () => {
        setShowModal(true); // Open the modal
        actions.startEditing(contact.id);
    };


    const handleDeleteClick = () => {
        actions.deleteContact(contact.id);
    };

    return (
        <div className="d-flex justify-content-center bigcard">
            <div className="card mb-3" style={{ maxWidth: "1000px" }}>
                <div className="container d-inline-flex">
                    <div className="d-fixed">
                        <img
                            src={contact.image}
                            className="img-fluid contactphoto"
                            alt={contact.name}
                        />
                    </div>
                    <div className="card-info-container">
                        <div className="cardinfo">
                            <h4 className="cardname"><strong>{contact.name}</strong></h4>
                            <p className="carddetails">
                                <strong>Address:</strong> {contact.address}
                            </p>
                            <p className="card-text">
                                <strong>Phone number:</strong> {contact.phone}
                            </p>
                            <p className="card-text">
                                <strong> Email: </strong>
                                {contact.email}
                            </p>
                        </div>
                    </div>
                    <div className="buttons">
                        {!contact.isEditing ? (
                            <>
                                <button
                                    type="button"
                                    className="btn btn-edit mt-3 me-4"
                                    onClick={handleEditClick}
                                >
                                    <i class="fa-regular fa-pen-to-square"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-delete mt-3 me-4"
                                    onClick={handleDeleteClick}
                                >
                                   <i class="fa-solid fa-trash-can"></i>
                                </button>
                            </>
                        ) : (
                            <EditCard contact={contact} showModal={showModal} setShowModal={setShowModal} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
