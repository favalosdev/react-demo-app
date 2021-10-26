export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    case 'delete':
      return state.filter(todo => !(todo.id === action.id));

    case 'toggle':
      return state.map((todo) => {
        if (todo.id === action.id) {
          todo.done = !action.done;
          console.log(todo.done);
        }

        return todo;
      })
      
    default:
      return state;
  }
};
