import React, { useState } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo/Todo.component';
import IconButton from '../IconButton/IconButton.component';
import { updateTodo, deleteTodo } from '../../state/todos/actions';
import * as styles from './TodoList.styles';
import icons from '../../theme/icons';
import colors from '../../theme/colors';

const mapStateToProps = state => ({
  activeTasks: state.todos.filter(todo => !todo.completed),
  completeTasks: state.todos.filter(todo => todo.completed)
});

const mapDispatchToProps = { updateTodo, deleteTodo };

const TodoList = ({ activeTasks, completeTasks, ...props }) => {
  const [showCompleted, setShowCompleted] = useState(false);

  return (
    <div css={styles.layout}>
      <IconButton
        style={styles.showCompletedButton}
        icon={icons.checkCircleOutline}
        color={colors.gray}
        viewBox="0 0 512 512"
        text={`${showCompleted ? 'Hide' : 'Show'} completed`}
        width="1.25rem"
        onClick={() => setShowCompleted(!showCompleted)}
      />
      <div css={styles.todoList}>{renderTodos(activeTasks, props)}</div>
      {showCompleted && <div css={styles.todoList}>{renderTodos(completeTasks, props)}</div>}
    </div>
  );
};

function renderTodos(todos, props) {
  return todos.map(todo => (
    <Todo key={todo.id} {...todo} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo} />
  ));
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);