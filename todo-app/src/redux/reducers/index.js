import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SORT_TODO } from "../actions";

const initState = {
  todos: [],
};

const generateUniqueId = () => {
  const timestamp = new Date().getTime().toString();
  const randomStr = Math.random().toString(36).substring(2);
  return `${timestamp}${randomStr}`;
};

const toDoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: generateUniqueId(),
            text: action.payload,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((task) => {
          if (task.id === action.payload) {
            return { ...task, completed: !task.completed };
          } else {
            return task;
          }
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((task) => task.id !== action.payload),
      };

    case SORT_TODO:
      const completedTasks = state.todos.filter((task) => task.completed);
      const uncompletedTasks = state.todos.filter((task) => !task.completed);
      const sortedTasks = [...uncompletedTasks, ...completedTasks];
      return { ...state, todos: sortedTasks };

    default:
      return state;
  }
};

export default toDoReducer;
