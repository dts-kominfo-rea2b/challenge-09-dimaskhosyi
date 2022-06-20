// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = ({name, email, image, phone}) => {

    return (
        <div id='contact-card'>
            <div>
                <img src={image} />    
            </div>
            <div id='border'>
                <p className='name'>{name}</p>
                <p className='phone'>{phone}</p>
                <p className='email'>{email}</p>
            </div>
        </div>
    )
}

export default Contact;