import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useState } from 'react';
import {
  useGetContactsQuery,
} from 'redux/contactsOperation';
import { Toaster } from 'react-hot-toast';

export default function ContactsPage() {
  const [filteredItems, setFilteredItems] = useState('');
  const { data } = useGetContactsQuery();
  
  const changeFilter = e => {
    setFilteredItems(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filteredItems.toLowerCase();
    return data.filter(el => el.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <div>
      <Form />
      <Toaster />
      <Filter value={filteredItems} onChange={changeFilter} />
      {data ? (
        <ContactList
          contacts={getVisibleContacts()}
        />
      ) : (
        <p> loading </p>
      )}
    </div>
  );
}
