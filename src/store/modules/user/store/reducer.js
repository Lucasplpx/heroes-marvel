import produce from 'immer';

import { Types } from './actions';

const INITIAL_STATE = {
  loading: false,
  data: {
    name: '',
    age: '',
  },
  error: '',
};

export default function users(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.STORE_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.STORE_SUCCESS: {
        draft.loading = false;
        draft.error = action.payload.error;
        break;
      }
      case Types.STORE_FAILURE: {
        draft.loading = false;
        draft.error = '';
        draft.data = action.payload.data;
        break;
      }
      default:
        break;
    }
  });
}
