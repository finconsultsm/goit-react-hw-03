import "./App.css";
import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components//ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

const initialContacts = localStorage.getItem("contacts")
  ? JSON.parse(localStorage.getItem("contacts"))
  : [];

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [query, setQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSearch = (e) => {
    const value = e.target.value;
    const normalizedFilter = value.toLowerCase().trim();
    setQuery(normalizedFilter);
  };

  const filterContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query)
    );
  };

  const handleRemoveContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm setContacts={setContacts} />
      <SearchBox query={query} handleSearch={handleSearch} />
      <ContactList
        contacts={filterContacts()}
        handleRemoveContact={handleRemoveContact}
      />
    </div>
  );
}

export default App;
