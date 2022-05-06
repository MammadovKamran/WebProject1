import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import {nanoid} from 'nanoid';
import data from './../Karciz/Customers/tabledata.json';
import EditableRow from './../Karciz/Customers/EditableRow';

const Customers = () => {
    //Modal box
    const [addItem, setAddItem] = useState(false);
    // Add function default data loop
    const [contacts, setContacts] = useState(data);
    
    //Add data 
    const [addFormData, setAddFormData ] = useState({
        Cust_Id:'',
        Date_Join:'',
        Cust_Name:'',
        TickOrd:'',
        Location:'',
        Price:'',
    }); 
    
    // Add contact function
    const handleAddFormChange = (event) => {
        event.preventDefault();   
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };
    
     //Add Submit data
    const handleAddFormSubmit = (event)=> {
        event.preventDefault(); 
        const newContact = {
            id: nanoid(),
            Cust_Id: addFormData.Cust_Id,
            Date_Join:  addFormData.Date_Join,
            Cust_Name:  addFormData.Cust_Name ,
            TickOrd: addFormData.TickOrd,
            Location:  addFormData.Location,
            Price:  addFormData.Price,
        };
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
        setAddItem(false);
    }; 
    
     // delet function to delete data
    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];    
        const index = contacts.findIndex((contact)=> contact.id === contactId);
        newContacts.splice(index, 1);
        setContacts(newContacts);
    }
    
    // edit form data submit
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedContact = {
            id: editContactId,
            Cust_Id: editFormData.Cust_Id,
            Date_Join: editFormData.Date_Join,
            Cust_Name: editFormData.Cust_Name,
            TickOrd: editFormData.TickOrd,
            Location: editFormData.Location,
            Price: editFormData.Price,
        }
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact)=> contact.id === editContactId);
        newContacts[index] = editedContact;
        setContacts(newContacts);
        setEditContactId(null);
    }
    
    // Edit function editable page loop
    const [editContactId, setEditContactId] = useState(null);
   
    // Edit function button click to edit
    const handleEditClick = ( event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);
        const formValues = {
            Cust_Id: contact.Cust_Id,
            Date_Join: contact.Date_Join,
            Cust_Name: contact.Cust_Name,
            TickOrd: contact.TickOrd,
            Location: contact.Location,
            Price: contact.Price,
        }
        setEditFormData(formValues);
    };
    
    
    // edit  data  
    const [editFormData, setEditFormData] = useState({
        Cust_Id:'',
        Date_Join:'',
        Cust_Name:'',
        TickOrd:'',
        Location:'',
        Price:'',   
    })
    
    //update data function
    const handleEditFormChange = (event) => {
        event.preventDefault();   
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
       
    };
    //Cencel button to same data
    const handleCancelClick = () => {
        setEditContactId(null);    
    };
    
	return(
		<>
			<div className="page-titles">
				<ol className="breadcrumb">
					<li className="breadcrumb-item active"><Link to={"#"}>Müştəri</Link></li>
					<li className="breadcrumb-item"><Link to={"#"}>Müştəri siyahısı</Link></li>
				</ol>
			</div>
			<div className="row mb-5 align-items-center">
				<div className="col-lg-3 mb-4 mb-lg-0">
					<Link to={"#"} className="btn btn-primary light  btn-lg btn-block rounded " onClick={()=> setAddItem(true)}> +Yeni müştəri</Link>
				</div>
				<div className="col-lg-9">
					<div className="card m-0 ">
						<div className="card-body py-3 py-md-2">
							<div className="row align-items-center">
								<div className="col-md-5 mb-3 mb-md-0">
									<div className="media align-items-end">
										<span className="mr-2 mb-1">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0)">
												<path d="M21 24H3C2.73478 24 2.48043 23.8946 2.29289 23.7071C2.10536 23.5196 2 23.2652 2 23V22.008C2.00287 20.4622 2.52021 18.9613 3.47044 17.742C4.42066 16.5227 5.74971 15.6544 7.248 15.274C7.46045 15.2219 7.64959 15.1008 7.78571 14.9296C7.92182 14.7583 7.9972 14.5467 8 14.328V13.322L6.883 12.206C6.6032 11.9313 6.38099 11.6036 6.22937 11.2419C6.07776 10.8803 5.99978 10.4921 6 10.1V5.96201C6.01833 4.41693 6.62821 2.93765 7.70414 1.82861C8.78007 0.719572 10.2402 0.0651427 11.784 5.16174e-06C12.5992 -0.00104609 13.4067 0.158488 14.1603 0.469498C14.9139 0.780509 15.5989 1.2369 16.1761 1.81263C16.7533 2.38835 17.2114 3.07213 17.5244 3.82491C17.8373 4.5777 17.999 5.38476 18 6.20001V10.1C17.9997 10.4949 17.9204 10.8857 17.7666 11.2495C17.6129 11.6132 17.388 11.9426 17.105 12.218L16 13.322V14.328C16.0029 14.5469 16.0784 14.7586 16.2147 14.9298C16.351 15.1011 16.5404 15.2221 16.753 15.274C18.251 15.6548 19.5797 16.5232 20.5298 17.7424C21.4798 18.9617 21.997 20.4624 22 22.008V23C22 23.2652 21.8946 23.5196 21.7071 23.7071C21.5196 23.8946 21.2652 24 21 24ZM4 22H20C19.9954 20.8996 19.6249 19.8319 18.9469 18.9651C18.2689 18.0983 17.3219 17.4816 16.255 17.212C15.6125 17.0494 15.0423 16.6779 14.6341 16.1558C14.2259 15.6337 14.0028 14.9907 14 14.328V12.908C14.0001 12.6428 14.1055 12.3885 14.293 12.201L15.703 10.792C15.7965 10.7026 15.8711 10.5952 15.9221 10.4763C15.9731 10.3574 15.9996 10.2294 16 10.1V6.20001C16.0017 5.09492 15.5671 4.03383 14.7907 3.24737C14.0144 2.46092 12.959 2.01265 11.854 2.00001C10.8264 2.04117 9.85379 2.47507 9.1367 3.21225C8.41962 3.94943 8.01275 4.93367 8 5.96201V10.1C7.99979 10.2266 8.0249 10.352 8.07384 10.4688C8.12278 10.5856 8.19458 10.6914 8.285 10.78L9.707 12.2C9.89455 12.3875 9.99994 12.6418 10 12.907V14.327C9.99724 14.9896 9.77432 15.6325 9.3663 16.1545C8.95827 16.6766 8.3883 17.0482 7.746 17.211C6.67872 17.4804 5.73137 18.0972 5.05318 18.9642C4.37498 19.8313 4.00447 20.8993 4 22Z" fill="#fff"/>
												</g>
												<defs>
												<clipPath id="clip0">
												<rect width="24" height="24" fill="white"/>
												</clipPath>
												</defs>
											</svg>
										</span>
										<div className="media-body ml-1">
											<p className="mb-1 fs-14">Ümumi müştərilər</p>
											<h3 className="mb-0 font-w600 fs-20">0 nəfər</h3>
										</div>
									</div>
								</div>
								<div className="col-md-7 text-md-right">
									<Link to={"#"} className="btn btn-outline-primary rounded btn-sm px-4">Aktivlər</Link>
									<Link to={"#"} className="btn btn-secondary rounded ml-2 btn-sm px-4">Dəyişikliklər</Link>
									<Link to={"#"} className="btn btn-danger rounded ml-2 btn-sm px-4">Sil</Link>
								</div>
							</div>							
						</div>
					</div>
                    {/* <!-- Modal --> */}
                    <Modal className="modal fade" id="addContactModal" show={addItem} onHide={setAddItem}>
                        <div className="" role="document">
                            <div className="">
                                <form >
                                    <div className="modal-header">
                                        <h4 className="modal-title fs-20">Yeni kontakt</h4>
                                        <button type="button" className="close" data-dismiss="modal" onClick={()=> setAddItem(false)}><span>&times;</span></button>
                                    </div>
                                    <div className="modal-body">
                                        <i className="flaticon-cancel-12 close" data-dismiss="modal"></i>
                                        <div className="add-contact-box">
                                            <div className="add-contact-content">
                                                <div className="form-group">
                                                    <label className="text-black font-w500">Müştədi İd</label>
                                                    <div className="contact-name">
                                                        <input type="text" className="form-control" name="Cust_Id" required="required" placeholder="Enter a id" 
                                                            onChange={handleAddFormChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-black font-w500">Qoşulma Tarixi</label>
                                                    <div className="contact-name">
                                                        <input type="text" className="form-control" name="Date_Join" required="required" placeholder="Enter a date" 
                                                            onChange={handleAddFormChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-black font-w500">Müştəri Adı</label>
                                                    <div className="contact-name">
                                                        <input type="text" className="form-control" name="Cust_Name" required="required" placeholder="Enter a name" 
                                                            onChange={handleAddFormChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-black font-w500">Sifariş</label>
                                                    <div className="contact-name">
                                                        <input type="text" className="form-control" name="TickOrd" required="required" placeholder="Enter a Summary" 
                                                            onChange={handleAddFormChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-black font-w500">Lokasiya</label>
                                                    <div className="contact-name">
                                                        <input type="text" className="form-control" name="Location" required="required" placeholder="Enter a location" 
                                                            onChange={handleAddFormChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-black font-w500">Qiymət</label>
                                                    <div className="contact-name">
                                                        <input type="text" className="form-control" name="Price" required="required" placeholder="Enter a price" 
                                                            onChange={handleAddFormChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button"  className="btn btn-danger" onClick={()=> setAddItem(false)}> <i className="flaticon-delete-1"></i> İmtina et</button>
                                        <button type="submit" onClick={handleAddFormSubmit} className="btn btn-primary">Əlavə et</button> 
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Modal>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<div className="table-responsive dataTables_wrapper">
                        <form onSubmit={handleEditFormSubmit}>
                            <table	className='table display mb-4 fs-14 dataTable no-footer'>
                                <thead>
                                    <tr role='row'>
                                        <th>Müştəri İd</th>
                                        <th>Qoşulma tarixi</th>
                                        <th>Müştəri adı</th>
                                        <th>Sifariş</th>
                                        <th>Lokasiya</th>
                                        <th>Ümumi xərc</th>
                                        <th>Dəyiş/Sil</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {contacts.map((contact, index)=>(
                                        <>
                                            {editContactId === contact.id ? 
                                                ( <EditableRow  editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/> ) : 
                                                (  
                                                    <tr role='row' key={index}>
                                                        <td>{contact.Cust_Id}</td>
                                                        <td>{contact.Date_Join}</td>
                                                        <td>{contact.Cust_Name}</td>
                                                        <td>{contact.TickOrd}</td>
                                                        <td>{contact.Location}</td>
                                                        <td className="text-primary font-w500">{contact.Price}</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <Link to={"#"} 
                                                                    onClick={(event) => handleEditClick(event, contact)} 
                                                                >
                                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M17.2557 2.99994C17.5201 2.73729 17.8341 2.52895 18.1796 2.38681C18.5251 2.24467 18.8954 2.17151 19.2694 2.17151C19.6433 2.17151 20.0136 2.24467 20.3591 2.38681C20.7046 2.52895 21.0186 2.73729 21.283 2.99994C21.5474 3.26258 21.7572 3.57438 21.9003 3.91754C22.0434 4.2607 22.1171 4.6285 22.1171 4.99994C22.1171 5.37137 22.0434 5.73917 21.9003 6.08233C21.7572 6.42549 21.5474 6.73729 21.283 6.99994L7.69086 20.4999L2.15332 21.9999L3.66356 16.4999L17.2557 2.99994Z" stroke="#A0A0A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    </svg>
                                                                </Link>
                                                                <Link to={"#"} className="ml-4" onClick={()=>handleDeleteClick(contact.id)}>
                                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M3.50195 5.99994H5.5156H21.6248" stroke="#A0A0A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                        <path d="M8.5361 5.99994V3.99994C8.5361 3.46951 8.74826 2.9608 9.12589 2.58573C9.50352 2.21065 10.0157 1.99994 10.5498 1.99994H14.5771C15.1111 1.99994 15.6233 2.21065 16.0009 2.58573C16.3786 2.9608 16.5907 3.46951 16.5907 3.99994V5.99994M19.6112 5.99994V19.9999C19.6112 20.5304 19.399 21.0391 19.0214 21.4142C18.6438 21.7892 18.1316 21.9999 17.5975 21.9999H7.52928C6.99522 21.9999 6.48304 21.7892 6.10541 21.4142C5.72778 21.0391 5.51563 20.5304 5.51562 19.9999V5.99994H19.6112Z" stroke="#A0A0A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    </svg>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </>    
                                    ))}							 */}
                                </tbody> 
                            </table>	
                        </form>    
					</div>
				</div>
			</div>
		</>
		
	)
}
export default Customers;