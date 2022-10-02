import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const IndexNumber = styled.span`
  margin-right: 5px;
  color: var(--color-blue-200);
`;

export const Name = styled.span`
  margin-right: 5px;
  color: var(--color-blue-200);
`;

export const Number = styled.span`
  margin-right: 5px;
  color: var(--color-gray-300);
`;

export const ButtonDelete = styled.button.attrs(() => ({
  type: 'button',
}))`
  display: block;
  margin: 0;
  min-width: 100px;
  height: 30px;
  padding: 5px;
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
