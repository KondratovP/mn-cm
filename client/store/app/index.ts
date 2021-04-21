export type INITIAL_STORE<T extends Record<string, any> = {}> = T;
const initialState = {
  init: false,
} as INITIAL_STORE;

const appReducer = (state = initialState, action: { type: any; }) => {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        init: true,
      }
    default:
      return state
  }
}

export {
  appReducer
};