import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { TodoListComponent } from './TodoList.component';

function setupTodoList() {
  const { getByText, getByRole } = render(
    <TodoListComponent activeTasks={[]} completeTasks={[]} />
  );
  const textNode = getByText(/completed/i);
  const completedButton = getByRole('button');

  return { textNode, completedButton };
}

describe('TodoList', () => {
  afterEach(cleanup);

  it('should have a "Show completed" button when completed tasks are hidden', () => {
    const { textNode } = setupTodoList();

    expect(textNode.textContent).toEqual('Show completed');
  });

  it('should have a "Show completed" button when completed tasks are hidden', () => {
    const { textNode, completedButton } = setupTodoList();

    fireEvent.click(completedButton);

    expect(textNode.textContent).toEqual('Hide completed');
  });
});
