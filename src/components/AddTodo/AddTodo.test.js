import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AddTodoComponent } from './AddTodo.component';

function setupAddTodo() {
  const createTodoMock = jest.fn();
  const { getByRole, getByDisplayValue } = render(
    <AddTodoComponent createTodo={createTodoMock} initialValue="poptarts" />
  );

  const input = getByDisplayValue('poptarts');
  const addButton = getByRole('button');

  fireEvent.focus(input);

  return { input, addButton, createTodoMock };
}

describe('AddTodo', () => {
  afterEach(cleanup);

  it('should call createTodo when the enter key is pressed', () => {
    const { input, createTodoMock } = setupAddTodo();

    fireEvent.change(input, { target: { value: 'buy poptarts' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 13 });

    expect(createTodoMock).toHaveBeenCalledTimes(1);
    expect(createTodoMock).toHaveBeenCalledWith('buy poptarts');
  });

  it('should call createTodo when the addButton is clicked', () => {
    const { input, createTodoMock, addButton } = setupAddTodo();

    fireEvent.change(input, { target: { value: 'eat poptarts' } });
    fireEvent.click(addButton);

    expect(createTodoMock).toHaveBeenCalledTimes(1);
    expect(createTodoMock).toHaveBeenCalledWith('eat poptarts');
  });
});
