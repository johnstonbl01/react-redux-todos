import uuid from "uuid/v4";
import { TODO_CREATE, TODO_UPDATE, TODO_DELETE } from "./actions";

const INITIAL_STATE = [
  {
    id: "0368eeb9-8526-4dc8-999c-e2fe165c4cf3",
    text: "Cook dinner",
    completed: false
  },
  {
    id: "920b2acf-a328-43af-acbb-6dca2b97ee35",
    text: "Take out trash",
    completed: false
  }
];

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TODO_CREATE:
      return [...state, { id: uuid(), completed: false, ...action.payload }];
    case TODO_UPDATE:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        }

        return todo;
      });
    case TODO_DELETE:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
