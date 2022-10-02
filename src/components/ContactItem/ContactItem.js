import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/slice';
import Loader from '../Loader';
import {
  ButtonDelete,
  IndexNumber,
  Container,
  Name,
  Number,
} from './ContactItem.styles';

export default function ContactItem({ id, name, number, index }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Container>
      <IndexNumber>{`${index + 1}.`}</IndexNumber>
      <Name>{name}: </Name>
      <Number>{number}</Number>
      <ButtonDelete onClick={() => deleteContact(id)} disabled={isLoading}>
        {isLoading ? <Loader size={10} /> : 'Delete'}
      </ButtonDelete>
    </Container>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
