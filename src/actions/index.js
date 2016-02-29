import _ from 'lodash';

import snippetData from '../data/data.json';

export const FETCH_SNIPPETS = 'FETCH_SNIPPETS';


export function fetchSnippets(){
  // convert json to array
  const snippetArr = _.toArray(snippetData.data);
  return {
    type: FETCH_SNIPPETS,
    payload: snippetArr
  };
}
