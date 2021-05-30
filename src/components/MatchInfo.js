/**
 * An information component created for the Match Information screen
 */

import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

TouchableOpacity.defaultProps = {activeOpacity: 1};

const Container = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.Text`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.7);
`;

const Icon = styled.View`
  align-items: center;
`;

const MatchInfo = (props) => (
  <Container onPress={props.onPress}>
    <Icon>
      <Ionicons name={props.icon} size={30} color={'rgba(0, 0, 0, 0.4)'} />
    </Icon>
    <Title> {props.text}</Title>
  </Container>
);

export default MatchInfo;
