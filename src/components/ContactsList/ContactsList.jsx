import { useSelector, useDispatch } from 'react-redux';
import css from './ContactsList.module.css';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

 const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <>
      <ul className={css.contactsList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={css.contactsItem} key={id}>
            <p className={css.contactsText}>
              {name}: {number}
            </p>
            <button
              className={css.contactsButton}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}