export const Types = {
  STORE_REQUEST: '@STORE_USERS/REQUEST',
  STORE_SUCCESS: '@STORE_USERS/SUCCESS',
  STORE_FAILURE: '@STORE_USERS/FAILURE',
};

export function actionStoreUsersRequest(data) {
  return {
    type: Types.STORE_REQUEST,
    payload: {
      data,
    },
  };
}

export function actionStoreUsersSuccess(data) {
  return {
    type: Types.STORE_SUCCESS,
    payload: {
      data,
    },
  };
}

export function actionStoreUsersFailure(error) {
  return {
    type: Types.STORE_FAILURE,
    payload: {
      error,
    },
  };
}
