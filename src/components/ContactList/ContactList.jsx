import {
  useDeleteContactMutation,
} from 'redux/contactsOperation';
import { ContactCard, Contact, Button } from './ContactList.Styled';
import { ImCross } from "react-icons/im";


export const ContactList = ({ contacts }) => {
  const [deleteContacts, { isLoading: isDeleting }] =
  useDeleteContactMutation();

  return (
    <>
    {contacts.length > 0 ? (
      <ContactCard>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id}>
            <p>
              {name}: {number}
            </p>
            <Button
              type="button"
              disabled={isDeleting}
              onClick={() => deleteContacts(id)}
            >
            <ImCross width="20px" height="20px" fill="#CD5C5C"/>
            </Button>
          </Contact>
        ))}
      </ContactCard>
    ) : (
      <p>No contacts...</p>
    )}
  </>
  );
};
