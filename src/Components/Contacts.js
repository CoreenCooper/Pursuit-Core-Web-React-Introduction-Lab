import React from 'react';
import ContactUserCard from './ContactUserCard'
import '../Styles/Contacts.css'

const Contacts = () => {
    return(
        <section id="Contacts">
            <h3>Contacts</h3>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </section>
    )
}

export default Contacts;