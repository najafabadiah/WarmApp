/**
 * A component for player name and favorite position
 */

import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 10px;
  padding-horizontal: 12px;
  margin-top: 20px;
  align-self: auto;
`;

const Name = styled.Text`
  font-size: 16px;
  align-self: flex-start;
  margin-vertical: 10px;
  padding-horizontal: 14px;
`;

const Position = styled.Text`
  font-size: 16px;
  align-self: flex-start;
  padding-horizontal: 14px;
  color: grey;
`;

const ProfileTitle = ({name, position}) => (
  <ButtonContainer>
    <Name>{name}</Name>
    <Position>I like to play as {position}</Position>
  </ButtonContainer>
);

export default ProfileTitle;
