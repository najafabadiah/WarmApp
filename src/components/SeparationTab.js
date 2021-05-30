/**
 * A simple separation bar used, for example, in the Profile screen
 */

import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const SeparationTabContainer = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: -30px;
  height: 10px;
  width: 120%;
  background-color: rgba(0, 0, 0, 0.03);
`;

const SeparationTab = () => <SeparationTabContainer />;

export default SeparationTab;
