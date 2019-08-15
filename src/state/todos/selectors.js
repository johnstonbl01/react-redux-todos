import { createSelector } from 'reselect';

export const todosSelector = state => state.todos;

export const activeTasksSelector = createSelector(
  todosSelector,
  tasks => tasks.filter(task => !task.completed)
);

export const completeTasksSelector = createSelector(
  todosSelector,
  tasks => tasks.filter(task => task.completed)
);
