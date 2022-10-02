import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;
  margin: auto;
  padding: 15px;
`;

export const Label = styled.label`
  margin-bottom: 15px;
  font-weight: 600;
  font-size: var(--font-size-300);
  color: var(--color-blue-200);
`;

export const InputName = styled.input.attrs(() => ({
  type: 'text',
  name: 'name',
  autoComplete: 'off',
  required: true,
  pattern: `^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$`,
  title: `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`,
}))`
  display: block;
  margin-top: 5px;
  border: 2px solid var(--color-gray-200);
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px var(--color-gray-100);
  background-color: inherit;
  &::placeholder {
    font-family: inherit;
    font-size: var(--font-size-100);
    color: var(--color-gray-200);
  }
  &:hover,
  &:focus {
    outline: none;
    border-color: var(--color-blue-200);
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:not(:placeholder-shown) {
    color: var(--color-gray-200);
  }
`;

export const InputNumber = styled.input.attrs(() => ({
  type: 'tel',
  name: 'number',
  autoComplete: 'off',
  required: true,
  pattern: `\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}`,
  title: `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`,
}))`
  display: block;
  margin-top: 5px;
  border: 2px solid var(--color-gray-200);
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px var(--color-gray-100);
  background-color: inherit;
  &::placeholder {
    font-family: inherit;
    font-size: var(--font-size-100);
    color: var(--color-gray-200);
  }
  &:hover,
  &:focus {
    outline: none;
    border-color: var(--color-blue-200);
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:not(:placeholder-shown) {
    color: var(--color-gray-200);
  }
`;

export const ButtonSubmit = styled.button.attrs(() => ({
  type: 'submit',
}))`
  display: block;
  margin: 0;
  min-width: 150px;
  height: 40px;
  padding: 6px;
  text-align: center;
  text-decoration: none;
  color: var(--color-white);
  font-size: var(--font-size-200);
  background-color: var(--color-blue-200);
  border: 1px solid transparent;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: var(--color-blue-100);
  }
`;
