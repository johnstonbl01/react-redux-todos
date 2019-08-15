import React, { useState, Fragment } from 'react';
import TextInput from '../../TextInput/TextInput.component';
import IconButton from '../../IconButton/IconButton.component';
import icons from '../../../theme/icons';
import colors from '../../../theme/colors';
import * as styles from './Todo.styles';

const UpdateTask = ({ enabled, onCancel, onSave }) => {
  if (!enabled) {
    return null;
  }

  return (
    <Fragment>
      <button aria-label="save" onClick={onSave} css={styles.saveButton}>
        Save
      </button>
      <button aria-label="cancel" onClick={onCancel} css={styles.cancelButton}>
        Cancel
      </button>
    </Fragment>
  );
};

const CompleteTask = ({ completed, onComplete }) => {
  if (completed) {
    return (
      <IconButton
        label="complete-todo"
        onClick={onComplete}
        style={styles.completeIcon}
        icon={icons.checkCircle}
        color={colors.gray}
        hoverColor={colors.gray}
        viewBox="0 0 512 512"
      />
    );
  }

  return (
    <IconButton
      label="complete-todo"
      onClick={onComplete}
      style={styles.completeIcon}
      viewBox="0 0 512 512"
      icon={icons.circle}
      color={colors.lightGray}
      hoverColor={colors.gray}
      hoverIcon={icons.checkCircle}
    />
  );
};

const Todo = ({ id, text, completed, updateTodo, deleteTodo }) => {
  const [todoText, setTodoText] = useState(text);
  const [editMode, setEditMode] = useState(false);

  const onTaskSave = evt => {
    const updateValue = validateInput(todoText, text, evt);

    if (!updateValue) {
      return null;
    }

    setEditMode(false);
    evt.target.blur();

    if (todoText === text) {
      return null;
    }

    setTodoText(updateValue);
    return updateTodo({ id, text: updateValue });
  };

  return (
    <div css={styles.todo}>
      <div css={[styles.todoContent, editMode && styles.editContent]}>
        <CompleteTask
          completed={completed}
          onComplete={() => updateTodo({ id, completed: !completed })}
        />
        <TextInput
          inputStyle={[
            styles.input,
            editMode && styles.editInput,
            completed && styles.completedFontColor
          ]}
          name={`task-${id}`}
          value={todoText}
          onTextChange={evt => setTodoText(evt.target.value)}
          onKeyDown={onTaskSave}
          variant="none"
          onFocus={() => setEditMode(!editMode)}
        />
        {!completed && (
          <IconButton
            label="delete-todo"
            style={styles.deleteIcon}
            onClick={() => deleteTodo(id)}
            icon={icons.trash}
            hoverColor={colors.red}
            color={colors.lightGray}
          />
        )}
      </div>
      <UpdateTask enabled={editMode} onCancel={() => setEditMode(false)} onSave={onTaskSave} />
    </div>
  );
};

export function validateInput(inputValue, originalValue, event) {
  const isEnterKey = event.key && event.key === 'Enter';
  const isValidInput = inputValue.length > 0;

  if (event.key && !isEnterKey) {
    return null;
  }

  if (!isValidInput) {
    return originalValue;
  }

  return inputValue;
}

export default Todo;
