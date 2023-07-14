import { useSelector, useDispatch } from 'react-redux';
import css from './ContactsList.module.css';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleContacts = getVisibleContacts();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <>
      <ul className={css.contactsList}>
        {visibleContacts.map(({ id, name, number }) => (
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