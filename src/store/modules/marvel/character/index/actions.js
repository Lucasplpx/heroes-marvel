export const Types = {
  INDEX_REQUEST: '@INDEX_CHARACTERS/REQUEST',
  INDEX_SUCCESS: '@INDEX_CHARACTERS/SUCCESS',
  INDEX_FAILURE: '@INDEX_CHARACTERS/FAILURE',
  INDEX_PAGES: '@INDEX_CHARACTERS/PAGES',
  INDEX_EDIT_CHARACTER: '@INDEX_CHARACTERS/EDIT_CHARACTER',
  INDEX_FILTER_CHARACTER: '@INDEX_CHARACTERS/FILTER_CHARACTER',
};

export function actionIndexCharactersRequest(data) {
  return {
    type: Types.INDEX_REQUEST,
    payload: {
      data,
    },
  };
}

export function actionIndexCharactersSuccess(data) {
  return {
    type: Types.INDEX_SUCCESS,
    payload: {
      data,
    },
  };
}

export function actionIndexCharactersFailure(error) {
  return {
    type: Types.INDEX_FAILURE,
    payload: {
      error,
    },
  };
}

export function actionIndexCharactersPages(data) {
  return {
    type: Types.INDEX_PAGES,
    payload: {
      data,
    },
  };
}

export function actionEditCharacter(data) {
  return {
    type: Types.INDEX_EDIT_CHARACTER,
    payload: {
      data,
    },
  };
}

export function actionFilterCharacter(data) {
  return {
    type: Types.INDEX_FILTER_CHARACTER,
    payload: {
      data,
    },
  };
}
