/**
 * Small Button Component
 */

import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const ButtonContainer = styled.TouchableOpacity`
  border: solid white 1px;
  background: #50e2c2;
  border-radius: 10px;
  padding-vertical: 10px;
  padding-horizontal: 12px;
  width: 100px;
`;

const ButtonText = styled.Text`
  font-size: 12px;
  color: white;
  align-self: center;
  text-transform: uppercase;
`;

const ButtonSmall = ({onPress, title, styleT, styleC}) => (
  <ButtonContainer onPress={onPress} style={styleC}>
    <ButtonText style={styleT}>{title}</ButtonText>
  </ButtonContainer>
);

export default ButtonSmall;
