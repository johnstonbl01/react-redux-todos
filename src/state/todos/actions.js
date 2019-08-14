export const TODO_CREATE = "TODO/CREATE";
export const TODO_UPDATE = "TODO/UPDATE";
export const TODO_DELETE = "TODO/DELETE";

export const createTodo = text => ({ type: TODO_CREATE, payload: { text } });
export const deleteTodo = id => ({ type: TODO_DELETE, payload: { id } });
export const updateTodo = updatedTodo => ({
  type: TODO_UPDATE,
  payload: updatedTodo
});
