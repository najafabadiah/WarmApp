/**
 * The button in the map screen for adding the match.
 */

import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const ButtonContainer = styled.TouchableOpacity`
  border: solid white 1px;
  background: rgba(80, 200, 196, 0.6);
  border-radius: 70px;
  width: 70px;
  height: 70px;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-size: 40px;
  padding 5px;
  color: white;
  align-self: center;
  text-transform: uppercase;
`;

const AddMatch = ({onPress, title, styleT, styleC}) => (
  <ButtonContainer onPress={onPress} style={styleC}>
    <ButtonText style={styleT}>{title}</ButtonText>
  </ButtonContainer>
);

export default AddMatch;
