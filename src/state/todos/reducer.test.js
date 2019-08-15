import * as actions from './actions';
import todosReducer, { INITIAL_STATE } from './reducer';

describe('Todos Reducer', () => {
  describe('TODO_CREATE', () => {
    it('should push a new todo object to the end of the list', () => {
      const action = actions.createTodo('Hulk smash!');

      const result = todosReducer(INITIAL_STATE, action);
      const newTodo = result[result.length - 1];

      expect(result).toHaveLength(3);
      expect(newTodo.text).toEqual('Hulk smash!');
      expect(newTodo).toHaveProperty('id');
      expect(newTodo).toHaveProperty('completed', false);
    });
  });

  describe('TODO_UPDATE', () => {
    it('should update a property on the todo', () => {
      const action = actions.updateTodo({
        id: '0368eeb9-8526-4dc8-999c-e2fe165c4cf3',
        text: 'Cook lunch'
      });

      const result = todosReducer(INITIAL_STATE, action);
      const updatedTodo = result.find(todo => todo.id === '0368eeb9-8526-4dc8-999c-e2fe165c4cf3');

      expect(updatedTodo.text).toEqual('Cook lunch');
    });
  });

  describe('TODO_DELETE', () => {
    it('should delete a todo', () => {
      const action = actions.deleteTodo('0368eeb9-8526-4dc8-999c-e2fe165c4cf3');

      const result = todosReducer(INITIAL_STATE, action);
      const removedTodo = result.find(todo => todo.id === '0368eeb9-8526-4dc8-999c-e2fe165c4cf3');

      expect(result).toHaveLength(1);
      expect(removedTodo).toBeUndefined();
    });
  });

  describe('default', () => {
    it('should return state', () => {
      const result = todosReducer(INITIAL_STATE, { type: 'NOTANACTION' });
      expect(result).toEqual(INITIAL_STATE);
    });
  });
});
