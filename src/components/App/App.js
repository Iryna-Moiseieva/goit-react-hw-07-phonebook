import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Section from 'components/Section';
import { TitleProject } from './App.styles';

export default function App() {
  const [filter, setFilter] = useState('');

  return (
    <div>
      <TitleProject>Phonebook</TitleProject>
      <Section>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} setFilter={setFilter} />
        <ContactList filter={filter} />
      </Section>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div>
  );
}
