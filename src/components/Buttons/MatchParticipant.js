/**
 * Button component to display match participants in the Match Information screen
 */

import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const ButtonContainer = styled.TouchableOpacity`
  border: solid white 0.5px;
  background: #f0f0f0;
  padding-vertical: 10px;
  padding-horizontal: 12px;
  height: 52px;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: black;
  align-self: flex-start;
`;

const MatchParticipant = ({onPress, title, styleT, styleC}) => (
  <ButtonContainer onPress={onPress} style={styleC}>
    <ButtonText style={styleT}>{title}</ButtonText>
  </ButtonContainer>
);

export default MatchParticipant;
