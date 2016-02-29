export const FETCH_SNIPPETS = 'FETCH_SNIPPETS';

import snippetData from '../data/data.json';

export function fetchSnippets(){
  return {
    type: FETCH_SNIPPETS,
    payload: snippetData
  };
}
