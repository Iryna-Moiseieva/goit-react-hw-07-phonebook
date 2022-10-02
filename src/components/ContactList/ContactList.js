import PropTypes from 'prop-types';
import { getVisibleContacts } from '../../redux/contacts/selectors';
import { useGetContactsQuery } from '../../redux/contacts/slice';
import ContactItem from 'components/ContactItem';
import Loader from '../Loader';
import { Container } from './ContactList.styles';

export default function ContactList({ filter }) {
  const { contacts, isFetching, isError, error } = useGetContactsQuery(
    undefined,
    {
      selectFromResult: ({ data, isFetching, isError, error }) => ({
        contacts: data && getVisibleContacts(data, filter),
        isFetching,
        isError,
        error,
      }),
    }
  );

  let contactsElements = null;

  if (contacts) {
    contactsElements = contacts.map(({ id, name, number }, index) => {
      return (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          index={index}
        />
      );
    });
  }

  return (
    <Container>
      {isError && <p>{error.data}</p>}
      {contactsElements}
      {isFetching && <Loader />}
    </Container>
  );
}

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
};
