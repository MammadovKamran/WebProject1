import React,{useState} from 'react';
import {nanoid} from 'nanoid';
import data from './tabledata.json';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

//  https://www.youtube.com/watch?v=dYjdzpZv5yc

const Table = () => {
    
    // Add function default data loop
    const [contacts, setContacts] = useState(data);
    
    //Add data 
    const [addFormData, setAddFormData ] = useState({
        fullName:'',
        address:'',
        phoneNumber:'',
        email:'',
    }); 
    
   // edit  data  
    const [editFormData, setEditFormData] = useState({
        fullName:'',
        address:'',
        phoneNumber:'',
        email:'',    
    })
    
    // Add contact function
    const handleAddFormChange = (event) => {
        event.preventDefault();    
        
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };
    
    const handleAddFormSubmit = (event)=> {
        event.preventDefault(); 
        
        const newContact = {
            id: nanoid(),
            fullName: addFormData.fullName,
            address:  addFormData.address  ,
            phoneNumber: addFormData.phoneNumber,
            email:  addFormData.email,
        };
        //console.log(newContact);
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    }; 
    
    
    // edit form data submit
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        
        const editedContact = {
            id: editContactId,
            fullName: editFormData.fullName,
            address: editFormData.address,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email,
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
    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);
        
        const formValues = {
            fullName: contact.fullName,
            address: contact.address,
            phoneNumber: contact.phoneNumber,
            email: contact.email,
        }
        setEditFormData(formValues);
    };
    
    //update data function
    const handleEditFormChange = (event) => {
        event.preventDefault();   
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    };
    
    const handleCancelClick = () => {
        setEditContactId(null);    
    };
    
    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];    
        const index = contacts.findIndex((contact)=> contact.id === contactId);
        newContacts.splice(index, 1);
        setContacts(newContacts);
    }
    
    return(
        <>
            <div className="app-container">
                <form onSubmit={handleEditFormSubmit}>
                    <table>
                        <thead>
                            <tr>
                                 <th>Name</th>   
                                 <th>Address</th>   
                                 <th>Phone Number</th>   
                                 <th>Email</th>   
                                 <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact) => ( 
                                <>
                                    {editContactId === contact.id ? 
                                        ( <EditableRow  editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/> ) : 
                                        ( 
                                            <ReadOnlyRow  
                                                contact ={contact}  
                                                handleEditClick = {handleEditClick}  
                                                handleDeleteClick = {handleDeleteClick}
                                            />    
                                        )
                                    }
                                </>    
                            ))}
                        </tbody>
                    </table>
                </form>
                <h2>Add a Contact</h2>
                <form onSubmit={handleAddFormSubmit}>
                    <input type="text" name="fullName" required="required" placeholder="Enter a name .." 
                        onChange={handleAddFormChange}
                    /> 
                    
                    <input type="text" name="address" required="required" placeholder="Enter a address .." 
                        onChange={handleAddFormChange}
                    /> 
                    
                    <input type="text" name="phoneNumber" required="required" placeholder="Enter a phone .."
                        onChange={handleAddFormChange}
                    /> 
                    
                    <input type="text" name="email" required="required" placeholder="Enter a email .."
                        onChange={handleAddFormChange}
                    /> 
                    
                    <button type="submit"> Add</button>
                </form>
            </div>
        </>
    )
}
export default Table;