import { url_auth_api } from '../../../../../config/ApiMarvelConfig';
import { api } from '../../../../../services/api';

import {
  actionIndexCharactersRequest,
  actionIndexCharactersSuccess,
  actionIndexCharactersFailure,
  actionIndexCharactersPages,
  actionEditCharacter,
  actionFilterCharacter,
} from './actions';

export const apiListCharacters = () => {
  return (dispatch) => {
    dispatch(actionIndexCharactersRequest());

    api
      .get(`/characters?${url_auth_api}&limit=10`)
      .then((res) => {
        dispatch(actionIndexCharactersSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(actionIndexCharactersFailure(err.message));
      });
  };
};

export const apiListNextPageCharacters = ({ offset }) => {
  return (dispatch) => {
    dispatch(actionIndexCharactersRequest());

    api
      .get(`/characters?${url_auth_api}&limit=10&offset=${offset}`)
      .then((res) => {
        dispatch(actionIndexCharactersPages(res.data.data));
      })
      .catch((err) => {
        dispatch(actionIndexCharactersFailure(err.message));
      });
  };
};

export const apiFilterCharacterByName = (name) => {
  return (dispatch) => {
    dispatch(actionIndexCharactersRequest());

    api
      .get(`/characters?${url_auth_api}&nameStartsWith=${name}`)
      .then((res) => {
        dispatch(actionFilterCharacter(res.data.data));
      })
      .catch((err) => {
        dispatch(actionIndexCharactersFailure(err.message));
      });
  };
};

export const editCharacter = ({ id, name, description }) => {
  return (dispatch) => {
    dispatch(actionEditCharacter({ id, name, description }));
  };
};
