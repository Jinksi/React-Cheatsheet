import { combineReducers } from 'redux';

import SnippetsReducer from './reducer-snippets';

const rootReducer = combineReducers({
  snippets: SnippetsReducer
});

export default rootReducer;
