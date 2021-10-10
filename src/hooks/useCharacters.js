import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  apiFilterCharacterByName,
  apiListCharacters,
  apiListNextPageCharacters,
  editCharacter,
} from '../store/modules/marvel/character/index/sagas';

const useCharacters = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.characters);

  const [characters, setCharacters] = useState([]);

  useMemo(() => {
    setCharacters(data.results);
  }, [data]);

  const listCharactesAPI = () => {
    dispatch(apiListCharacters());
  };

  const listNextPageCharactesAPI = () => {
    dispatch(apiListNextPageCharacters({ offset: data.limit + data.offset }));
  };

  const callEditCharacter = ({ id, name, description }) => {
    dispatch(editCharacter({ id, name, description }));
  };

  const filterCharacterByName = (name) => {
    dispatch(apiFilterCharacterByName(name));
  };

  return {
    listNextPageCharactesAPI,
    listCharactesAPI,
    callEditCharacter,
    filterCharacterByName,
    loading,
    characters,
  };
};

export default useCharacters;
