import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todo, { validateInput } from './Todo.component';
import colors from '../../../theme/colors';

function setupInputEditMode() {
  const updateTodoMock = jest.fn();

  const { getByDisplayValue, queryByText } = render(
    <Todo id="1" text="bacon" completed={false} updateTodo={updateTodoMock} deleteTodo={() => {}} />
  );

  const input = getByDisplayValue('bacon');
  fireEvent.focus(input);
  const saveButton = queryByText('Save');
  const cancelButton = queryByText('Cancel');

  return { input, saveButton, cancelButton, updateTodoMock };
}

describe('Todo', () => {
  it('should enter edit mode and have a border when focused', () => {
    const { getByDisplayValue } = render(
      <Todo id="1" text="bacon" completed={false} updateTodo={() => {}} deleteTodo={() => {}} />
    );

    const input = getByDisplayValue('bacon');
    fireEvent.focus(input);

    const styles = window.getComputedStyle(input);
    expect(styles.border).toEqual(`1px solid ${colors.gray}`);
  });

  describe('in edit mode', () => {
    afterEach(cleanup);

    describe('when enter is pressed', () => {
      it('should blur and set edit mode to false', () => {
        const { input } = setupInputEditMode();

        const editStyles = window.getComputedStyle(input);
        expect(editStyles.border).toEqual(`1px solid ${colors.gray}`);

        fireEvent.keyDown(input, { key: 'Enter', code: 13 });

        const defaultStyles = window.getComputedStyle(input);
        expect(defaultStyles.border).toEqual(`1px solid ${colors.white}`);
      });

      it('should blur and set edit mode to false if the current input matches the existing input', () => {
        const { input } = setupInputEditMode();
        fireEvent.change(input, { target: { value: 'bacon' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 13 });

        const defaultStyles = window.getComputedStyle(input);
        expect(defaultStyles.border).toEqual(`1px solid ${colors.white}`);
        expect(input.value).toEqual('bacon');
      });

      it('should blur, set edit mode to false and set the text to its original value if the input is empty', () => {
        const { input } = setupInputEditMode();
        fireEvent.change(input, { target: { value: '' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 13 });

        const defaultStyles = window.getComputedStyle(input);
        expect(defaultStyles.border).toEqual(`1px solid ${colors.white}`);
        expect(input.value).toEqual('bacon');
      });

      it('should blur, set edit mode to false, update the text value and dispatch updateTodo', () => {
        const { input, updateTodoMock } = setupInputEditMode();
        fireEvent.change(input, { target: { value: 'sausage' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 13 });

        const defaultStyles = window.getComputedStyle(input);
        expect(defaultStyles.border).toEqual(`1px solid ${colors.white}`);
        expect(input.value).toEqual('sausage');
        expect(updateTodoMock).toHaveBeenCalledTimes(1);
        expect(updateTodoMock).toHaveBeenCalledWith({ id: '1', text: 'sausage' });
      });
    });

    describe('when save is clicked', () => {
      afterEach(cleanup);

      it('should blur and set edit mode to false', () => {
        const { input, saveButton } = setupInputEditMode();

        const editStyles = window.getComputedStyle(input);
        expect(editStyles.border).toEqual(`1px solid ${colors.gray}`);

        fireEvent.click(saveButton);

        const defaultStyles = window.getComputedStyle(input);
        expect(defaultStyles.border).toEqual(`1px solid ${colors.white}`);
      });

      it('should blur and set edit mode to false if the current input matches the existing input', () => {
        const { input, saveButton } = setupInputEditMode();
        fireEvent.change(input, { target: { value: 'bacon' } });
        fireEvent.click(saveButton);

        const defaultStyles = window.getComputedStyle(input);
        expect(defaultStyles.border).toEqual(`1px solid ${colors.white}`);
        expect(input.value).toEqual('bacon');
      });

      it('should blur, set edit mode to false and set the text to its original value if the input is empty', () => {
        const { input, saveButton } = setupInputEditMode();
        fireEvent.change(input, { target: { value: '' } });
        fireEvent.click(saveButton);

        const defaultStyles = window.getComputedStyle(input);
        expect(defaultStyles.border).toEqual(`1px solid ${colors.white}`);
        expect(input.value).toEqual('bacon');
      });

      it('should blur, set edit mode to false, update the text value and dispatch updateTodo', () => {
        const { input, saveButton, updateTodoMock } = setupInputEditMode();
        fireEvent.change(input, { target: { value: 'sausage' } });
        fireEvent.click(saveButton);

        const styles = window.getComputedStyle(input);
        expect(styles.border).toEqual(`1px solid ${colors.white}`);
        expect(input.value).toEqual('sausage');
        expect(updateTodoMock).toHaveBeenCalledTimes(1);
        expect(updateTodoMock).toHaveBeenCalledWith({ id: '1', text: 'sausage' });
      });
    });

    describe('when cancel is clicked', () => {
      it('should exit edit mode', () => {
        const { input, cancelButton } = setupInputEditMode();

        const editStyles = window.getComputedStyle(input);
        expect(editStyles.border).toEqual(`1px solid ${colors.gray}`);

        fireEvent.click(cancelButton);

        const defaultStyles = window.getComputedStyle(input);
        expect(defaultStyles.border).toEqual(`1px solid ${colors.white}`);
      });
    });
  });
});

describe('validateInput()', () => {
  const inputValue = 'I am batman';
  const originalValue = 'I am a fluffy unicorn';

  it('should return null if the event key is not "Enter"', () => {
    const event = { key: 'Backspace' };

    const result = validateInput(inputValue, originalValue, event);
    expect(result).toBeNull();
  });

  it('should return the original value if the input value is empty', () => {
    const result = validateInput('', originalValue, {});

    expect(result).toEqual(originalValue);
  });

  it('should return the inputValue by default', () => {
    const event = { key: 'Enter' };
    const result = validateInput(inputValue, originalValue, event);

    expect(result).toEqual(inputValue);
  });
});
