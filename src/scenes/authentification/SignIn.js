import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {useState, useContext} from 'react';
import TextInputEntry from '../../components/TextInputEntry';
import QuestionEntry from '../../components/QuestionEntry';
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

const SignIn = () => {
  const SignIn_Text = 'Insert your email and password';
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const {login} = useContext(AuthContext);

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
          onPress={() => login(userEmail, userPassword)}
          title="Confirm"
          style={{marginTop: 30, width: '95%'}}
        />
      </View>
    </View>
  );
};

export default SignIn;

//{error !== '' ? <Text>{error}</Text> : null}
