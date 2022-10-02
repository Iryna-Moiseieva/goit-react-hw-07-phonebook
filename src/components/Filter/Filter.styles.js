import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: var(--font-size-300);
  color: var(--color-gray-300);
`;

export const FilterInput = styled.input.attrs(() => ({
  type: 'search',
  name: 'filter',
  autoComplete: 'off',
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
