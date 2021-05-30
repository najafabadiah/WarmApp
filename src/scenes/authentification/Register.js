import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import {useContext, useState} from 'react';
import QuestionEntry from '../../components/QuestionEntry';
import TextInputEntry from '../../components/TextInputEntry';
import ButtonLarge from '../../components/Buttons/ButtonLarge';
import {AuthContext} from '../../firebase/authentification';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 30,
  },
  title: {
    marginBottom: 40,
    alignSelf: 'center',
  },
});

const Register = () => {
  const SignIn_Text = 'Welcome new friend ! ';
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <QuestionEntry text={SignIn_Text} />
      </View>
      <TextInputEntry
        onChangeText={(UserEmail) => setUserEmail(UserEmail)}
        keyboardType="email-address"
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
      />

      <TextInputEntry
        onChangeText={(UserPassword) => setUserPassword(UserPassword)}
        secureTextEntry={true}
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
      />
      <View>
        <ButtonLarge
          onPress={() => register(userEmail, userPassword)}
          title="Confirm"
          style={{marginTop: 30, width: '95%'}}
        />
      </View>
    </View>
  );
};

export default Register;
