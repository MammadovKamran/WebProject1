import React from 'react';
import { Link } from "react-router-dom";

const ReadOnlyRow = ( {contact, handleEditClick, handleDeleteClick} ) => {
    return(
        <>  
            <tr role='row'  >
                <td>{contact.Cust_Id}</td>
                <td>{contact.Date_Join}</td>
                <td>{contact.Cust_Name}</td>
                <td>{contact.TickOrd}</td>
                <td>{contact.Location}</td>
                <td className="text-primary font-w500">{contact.Price}</td>
                <td>
                    <div className="d-flex">
                        <Link to={"#"} onClick={(event) => handleEditClick(event, contact)}>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2557 2.99994C17.5201 2.73729 17.8341 2.52895 18.1796 2.38681C18.5251 2.24467 18.8954 2.17151 19.2694 2.17151C19.6433 2.17151 20.0136 2.24467 20.3591 2.38681C20.7046 2.52895 21.0186 2.73729 21.283 2.99994C21.5474 3.26258 21.7572 3.57438 21.9003 3.91754C22.0434 4.2607 22.1171 4.6285 22.1171 4.99994C22.1171 5.37137 22.0434 5.73917 21.9003 6.08233C21.7572 6.42549 21.5474 6.73729 21.283 6.99994L7.69086 20.4999L2.15332 21.9999L3.66356 16.4999L17.2557 2.99994Z" stroke="#A0A0A0"  strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                        <Link to={"#"} className="ml-4" onClick={() => handleDeleteClick(contact.id)}>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.50195 5.99994H5.5156H21.6248" stroke="#A0A0A0"  strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.5361 5.99994V3.99994C8.5361 3.46951 8.74826 2.9608 9.12589 2.58573C9.50352 2.21065 10.0157 1.99994 10.5498 1.99994H14.5771C15.1111 1.99994 15.6233 2.21065 16.0009 2.58573C16.3786 2.9608 16.5907 3.46951 16.5907 3.99994V5.99994M19.6112 5.99994V19.9999C19.6112 20.5304 19.399 21.0391 19.0214 21.4142C18.6438 21.7892 18.1316 21.9999 17.5975 21.9999H7.52928C6.99522 21.9999 6.48304 21.7892 6.10541 21.4142C5.72778 21.0391 5.51563 20.5304 5.51562 19.9999V5.99994H19.6112Z" stroke="#A0A0A0"  strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default ReadOnlyRow;