/**
 * A component for statistics displayed in the profile screen like Overall and Matches
 */

import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const ButtonContainer = styled.TouchableOpacity`
  margin-horizontal: 20px;
  align-self: center;
`;

const Number = styled.Text`
  font-size: 40px;
  align-self: center;
`;

const Title = styled.Text`
  font-size: 16px;
  align-self: center;
  font-weight: 300;
`;

const ProfileStats = ({number, title}) => (
  <ButtonContainer>
    <Number>{number}</Number>
    <Title>{title}</Title>
  </ButtonContainer>
);

export default ProfileStats;
