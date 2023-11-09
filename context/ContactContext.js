import React, { createContext, useState } from 'react';


export const ContactContext = createContext();
const ContactProvider = (props)  => {
  const [contact, setContact] = useState([{name: "a", email: "a@", phone: "123  "},{name: "a", email: "a@", phone: "123  "}]);
    return (
        <ContactContext.Provider value={{ contact, setContact }}>
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactProvider;
