import { useState } from 'react';
import { SearchCard, Lable, Button } from './Form.Styled';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'components/redux/contactApi';

export function Form() {
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const formReset = () => {
      setName('');
      setNumber('');
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.error(`${name} is already in contacts!`);
    }
    toast.success(`${name} is added!`);
    addContact(newContact);
    formReset();
  };

  
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Lable htmlFor="name">Name</Lable>
      <SearchCard
        type="text"
        value={name}
        id="name"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <Lable htmlFor="number">Number</Lable>
      <SearchCard
        type="tel"
        value={number}
        name="number"
        id="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <Button type="submit">Add contact</Button>
    </form>
  );
}
