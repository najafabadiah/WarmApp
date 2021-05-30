/**
 * Text-Button Component that executes a function once clicked
 */

import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const ButtonContainer = styled.TouchableOpacity``;

const ButtonText = styled.Text`
  font-size: 17px;
  color: rgba(80, 200, 196, 1);
  font-weight: 500;
`;

const ButtonLink = ({onPress, title, style}) => (
  <ButtonContainer style={style} onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

export default ButtonLink;
