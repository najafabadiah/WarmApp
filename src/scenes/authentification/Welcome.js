import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ButtonLarge from '../../components/Buttons/ButtonLarge';
import ButtonLink from '../../components/Buttons/ButtonLink';

const styles = StyleSheet.create({
  container: {
    height: '90%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginLeft: 30,
    marginRight: 30,
  },
  register_button: {
    marginBottom: 40,
  },

  sub_button: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.register_button}>
        <ButtonLarge
          onPress={() => navigation.navigate('Register')}
          title="For new members"
          style={{width: '80%', height: 50,alignSelf: 'center', justifyContent: 'center',}}
        />
      </View>
      <View style={styles.sub_button}>
        <Text> Do you already have an account ? </Text>
        <ButtonLink
          onPress={() => navigation.navigate('SignIn')}
          title="Log In"
        />
      </View>
    </View>
  );
};

export default Welcome;
