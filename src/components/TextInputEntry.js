/**
 * A text input component for authentification
 */

import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const StyledTextInput = styled.TextInput`
  border: solid #dadae8 1px;
  margin: 12px;
  height: 50px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 10px;
`;

const TextInputEntry = (props) => (
  <View>
    <StyledTextInput
      onChangeText={props.onChangeText}
      keyboardType={props.keyboardType}
      maxLength={40}
      secureTextEntry={props.secureTextEntry}
      placeholder={props.placeholder}
      autoCapitalize={props.autoCapitalize}
      autoCorrect={props.autoCorrect}
      autoCompleteType={props.autoCompleteType}
    />
  </View>
);

export default TextInputEntry;
