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
      <button onClick={onSave} css={styles.saveButton}>
        Save
      </button>
      <button onClick={onCancel} css={styles.cancelButton}>
        Cancel
      </button>
    </Fragment>
  );
};

const CompleteTask = ({ completed, onComplete }) => {
  if (completed) {
    return (
      <IconButton
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

  const saveTask = () => {
    updateTodo({ id, text: todoText });
    return setEditMode(false);
  };

  const onFocus = () => {
    if (editMode) {
      return null;
    }

    return setEditMode(!editMode);
  };

  const onEnterKeyPress = evt => {
    const isEnterKey = evt.key === 'Enter';
    const isValidInput = todoText.length > 0;
    const isSameInput = todoText === text;

    if (!isEnterKey) {
      return null;
    }

    setEditMode(false);
    evt.target.blur();

    if (isSameInput) {
      return null;
    }

    if (!isValidInput) {
      setTodoText(text);
    }

    setTodoText(evt.target.value);

    return updateTodo({ id, text: todoText });
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
          value={todoText}
          onTextChange={evt => setTodoText(evt.target.value)}
          onKeyDown={onEnterKeyPress}
          variant="none"
          onFocus={onFocus}
        />
        {!completed && (
          <IconButton
            style={styles.deleteIcon}
            onClick={() => deleteTodo(id)}
            icon={icons.trash}
            hoverColor={colors.red}
            color={colors.lightGray}
          />
        )}
      </div>
      <UpdateTask enabled={editMode} onCancel={() => setEditMode(false)} onSave={saveTask} />
    </div>
  );
};

export default Todo;
