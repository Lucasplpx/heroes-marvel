import React from 'react';

import { ContainerItem, TextComic, Title } from './styles';

const ListItem = ({ item, title }) => {
  return (
    <>
      <Title>{title} #</Title>
      {item.map((item) => (
        <ContainerItem key={item.name}>
          <TextComic>{item.name}</TextComic>
        </ContainerItem>
      ))}
    </>
  );
};
export default ListItem;
