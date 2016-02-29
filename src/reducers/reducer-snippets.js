import { FETCH_SNIPPETS } from '../actions';

const INITIAL_STATE = {
  all: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case FETCH_SNIPPETS:
      return { ...state, all: action.payload };
    default:
      return state;
  }
};
