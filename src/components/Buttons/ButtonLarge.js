/**
 * Large Button Component
 */

import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const ButtonContainer = styled.TouchableOpacity`
  border: solid #50e2c2 1px;
  border-radius: 15px;
  padding-vertical: 10px;
  padding-horizontal: 12px;
  width: 200px;
  background: rgba(80, 200, 196, 0.6);
  align-self: center;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  align-self: center;
  text-transform: uppercase;
`;

const ButtonLarge = ({onPress, title, style}) => (
  <ButtonContainer onPress={onPress} style={style}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

export default ButtonLarge;
