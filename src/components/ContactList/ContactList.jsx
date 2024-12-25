import sc from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, handleRemoveContact }) => {
  return (
    <ul className={sc.contactList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleRemoveContact={handleRemoveContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
