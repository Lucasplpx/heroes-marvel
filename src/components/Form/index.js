import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { TextError } from '../Messages';
import { Container } from './styles';
import RoundedButton from '../Button';
import Input from '../Input';
import InputArea from '../InputArea';
import useCharacters from '../../hooks/useCharacters';

const Form = ({ character, handleGoBackPage }) => {
  const { callEditCharacter } = useCharacters();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue('id', character.id);
    setValue('name', character.name);
    setValue('description', character.description);
  }, []);

  const onSubmit = (data) => {
    callEditCharacter(data);
    handleGoBackPage();
  };

  return (
    <Container>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            icon="tag-faces"
            placeholder="Type a name hero"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
        defaultValue=""
      />
      {errors.name && <TextError>Name hero is required.</TextError>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputArea
            icon="description"
            placeholder="Type a description"
            onBlur={onBlur}
            multiline={true}
            numberOfLines={8}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="description"
        defaultValue=""
      />

      <RoundedButton
        style={{ width: '100%' }}
        title="Edit Character"
        fontSize={16}
        onPress={handleSubmit(onSubmit)}
      />
    </Container>
  );
};

export default Form;
