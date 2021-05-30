/**
 * A general title text to be reused
 */

import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const TextQuestionEntry = styled.Text`
  color: black;
  font-size: 20px;
`;

const QuestionEntry = (props) => (
  <View>
    <TextQuestionEntry style={props.style}>{props.text}</TextQuestionEntry>
  </View>
);

export default QuestionEntry;
