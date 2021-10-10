import produce from 'immer';

import { Types } from './actions';

const INITIAL_STATE = {
  loading: false,
  data: {
    offset: 0,
    limit: 0,
    total: 1559,
    count: 0,
    results: [],
  },
  error: '',
};

export default function characterList(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.INDEX_REQUEST: {
        draft.loading = true;
        draft.error = '';
        break;
      }
      case Types.INDEX_SUCCESS: {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }
      case Types.INDEX_PAGES: {
        draft.loading = false;
        draft.data.limit = action.payload.data.limit;
        draft.data.offset += draft.data.limit;
        draft.data.results.push(...action.payload.data.results);
        draft.data.count = draft.data.results.length;
        break;
      }
      case Types.INDEX_EDIT_CHARACTER: {
        const { id, name, description } = action.payload.data;
        draft.data.results = draft.data.results.map((char) => {
          if (char.id === id) {
            char.name = name;
            char.description = description;
          }
          return char;
        });
        break;
      }
      case Types.INDEX_FILTER_CHARACTER: {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }
      case Types.INDEX_FAILURE: {
        draft.loading = false;
        draft.error = '';
        draft.error = action.payload.error;
        break;
      }
      default:
        break;
    }
  });
}
