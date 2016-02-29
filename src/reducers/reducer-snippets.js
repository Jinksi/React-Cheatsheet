import { FETCH_SNIPPETS } from '../actions';

const INITIAL_STATE = {
  snippets: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case FETCH_SNIPPETS:
      return { ...state, snippets: action.payload.data };
    default:
      return state;
  }
};
