/**
 * Javascript solution for the radar graph in the Profile screen
 * https://gist.github.com/brianfoody/49e22e66ffff3709904e5e17981c2a4a
 */

import React from 'react';
import {View} from 'react-native';
import Svg, {Circle, Line, Point, Polygon, Text} from 'react-native-svg';
import times from 'lodash.times';

function degToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

const svgY = (degrees: number) => degrees + 180;

const edgePointCalculatorFor = (center: number, radius: number) => (
  degree: number,
  scale: number = 1,
): Point => {
  const degreeInRadians = degToRadians(degree);
  const degreeInRadiansY = degToRadians(svgY(degree));
  return [
    center + Math.cos(degreeInRadians) * radius * scale,
    center + Math.sin(degreeInRadiansY) * radius * scale,
  ];
};

export const ProfileRadar = (props) => {
  const viewBoxSize = 120;
  const viewBoxCenter = viewBoxSize * 0.5;
  const radius = viewBoxSize * 0.4;

  const calculateEdgePointText = edgePointCalculatorFor(60, 53);
  const calculateEdgePoint = edgePointCalculatorFor(60, 48);

  function getData(playerData) {
    const labels = [];
    const data = [];
    const group = [];
    const threshold =
      playerData.gk_speed +
      playerData.gk_positioning +
      playerData.gk_reflexes +
      playerData.gk_diving +
      playerData.gk_handling +
      playerData.gk_kicking;
    if (threshold < 40) {
      data.push(playerData.pace || 0);
      data.push(playerData.dribbling || 0);
      data.push(playerData.defending || 0);
      data.push(playerData.physic || 0);
      data.push(playerData.passing || 0);
      data.push(playerData.shooting || 0);
      labels.push('Pace');
      labels.push('Dribbling');
      labels.push('Defending');
      labels.push('Physic');
      labels.push('Passing');
      labels.push('Shooting');
    } else {
      data.push(playerData.gk_speed || 0);
      data.push(playerData.gk_reflexes || 0);
      data.push(playerData.gk_handling || 0);
      data.push(playerData.gk_diving || 0);
      data.push(playerData.gk_kicking || 0);
      data.push(playerData.gk_positioning || 0);
      labels.push('Speed');
      labels.push('Reflexes');
      labels.push('Handling');
      labels.push('Diving');
      labels.push('Kicking');
      labels.push('Positioning');
    }
    group.push(data);
    group.push(labels);
    return group;
  }

  const radar = getData(props.playerData);
  const radarData = radar[0];
  const radarLabel = radar[1];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Svg
        height="100%"
        width="100%"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
        <Circle
          cx={viewBoxCenter}
          cy={viewBoxCenter}
          r={radius}
          stroke="black"
          strokeOpacity="0.03"
          strokeWidth="0.5"
          fill="#F0F0F0"
        />

        {times(3).map((i) => (
          <Text
            key={i + 3}
            fill="black"
            stroke="none"
            fontSize="4"
            fontFamily="Montserrat"
            fontWeight="light"
            x={calculateEdgePointText(i * 60 + 180)[0]}
            y={calculateEdgePointText(i * 60 + 180)[1]}
            textAnchor="middle">
            {radarLabel[i + 3]}
          </Text>
        ))}

        {times(3).map((i) => (
          <Text
            key={i}
            fill="black"
            stroke="none"
            fontSize="4"
            fontFamily="Montserrat"
            fontWeight="light"
            x={calculateEdgePointText(i * 60)[0]}
            y={calculateEdgePointText(i * 60)[1]}
            textAnchor="middle">
            {radarLabel[i]}
          </Text>
        ))}

        {times(3).map((i) => (
          <Circle
            key={`circle_outline_${i}`}
            cx={viewBoxCenter}
            cy={viewBoxCenter}
            r={(i + 1) * radius * 0.25}
            stroke="black"
            strokeOpacity="0.03"
            strokeWidth="0.5"
            fill="transparent"
          />
        ))}
        {times(3).map((i) => (
          <Line
            key={`crosshair_${i}`}
            x1={calculateEdgePoint(i * 60)[0]}
            y1={calculateEdgePoint(i * 60)[1]}
            x2={calculateEdgePoint(i * 60 + 180)[0]}
            y2={calculateEdgePoint(i * 60 + 180)[1]}
            stroke="black"
            strokeOpacity="0.03"
            strokeWidth="0.5"
            fill="transparent"
          />
        ))}

        <Polygon
          stroke={'#50E2C2'}
          strokeWidth={0.2}
          fill={'#50E2C2'}
          fillOpacity={0.3}
          points={`${radarData.map((r, i) => {
            const edgePoint = calculateEdgePoint(i * 60, radarData[i] / 100);
            return `${edgePoint[0]},${edgePoint[1]}`;
          })}`}
        />
      </Svg>
    </View>
  );
};
