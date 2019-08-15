import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import TextInput from '../TextInput/TextInput.component';
import IconButton from '../IconButton/IconButton.component';
import { createTodo } from '../../state/todos/actions';
import colors from '../../theme/colors';
import icons from '../../theme/icons';
import * as styles from './AddTodo.styles';

const mapDispatchToProps = { createTodo };

export const AddTodoComponent = props => {
  const [todoText, setTodoText] = useState(props.initialValue || '');

  const addTodo = () => {
    if (todoText.length > 0) {
      props.createTodo(todoText);
      setTodoText('');
    }
  };

  const onEnterKeyPress = evt => {
    if (evt.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <Fragment>
      <label htmlFor="todo" css={styles.label}>
        New task:
      </label>
      <div css={styles.addTodo}>
        <TextInput
          name="todo"
          value={todoText}
          inputStyle={styles.input}
          onTextChange={evt => setTodoText(evt.target.value)}
          onKeyDown={onEnterKeyPress}
        />
        <IconButton
          label="create-todo"
          disabled={todoText.length < 1}
          icon={icons.plus}
          color={colors.secondary}
          style={styles.button}
          width="1.5rem"
          onClick={addTodo}
        />
      </div>
    </Fragment>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodoComponent);
