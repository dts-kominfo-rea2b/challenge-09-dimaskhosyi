// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = ({data}) => {

    return (
        <div id='contact-card'>
            <div>
                <img src={data.photo} />    
            </div>
            <div id='border'>
                <p>{data.name}</p>
                <p>{data.phone}</p>
                <p>{data.email}</p>
            </div>
        </div>
    )
}

export default Contact;