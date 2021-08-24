import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import TopHeader from '../Components/TopHeaderLogSign';

function LogIn({ navigation }) {
  const [email, setEmail] = useState('gotgot-il@hotmail.fr');
  const [mdp, setMdp] = useState('test');

  const login = {
    email,
    password: mdp,
  };

  return (
    <View style={styles.main_container}>
      <TopHeader />

      <View style={styles.title_container}>
        <Text style={styles.title_text}>Connexion</Text>
      </View>

      <ScrollView>
        <View style={styles.scroll_container}>
          <View style={styles.form_container}>
            <Text style={styles.form_text}>E-Mail</Text>
            <TextInput
              style={styles.form_input}
              placeholder="Adresse email ISEP"
              onChangeText={() => setEmail(email)}
              defaultValue={email}
            />
          </View>

          <View style={styles.form_container}>
            <Text style={styles.form_text}>Mot de passe</Text>
            <TextInput
              style={styles.form_input}
              placeholder="Votre plus beau mot de passe"
              onChangeText={() => setMdp(mdp)}
              defaultValue={mdp}
              secureTextEntry
            />
          </View>

          <View style={styles.buttonLog_container}>
            <TouchableHighlight
              style={styles.touchableHome_container}
              activeOpacity={0.6}
              underlayColor="#1A4301"
              onPress={() =>
                navigation.navigate('VerifLogIn', {
                  login,
                })
              }
            >
              <Text style={styles.touchableHome_text}>SE CONNECTER</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>

      <View style={styles.description_container}>
        <TouchableOpacity
          style={styles.touchableSign_container}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.touchableSign_text}>
            Pour vous inscrire c&apos;est par ici !
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonLog_container: {
    alignItems: 'center',
    flex: 1,
  },

  description_container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 15,
  },

  form_container: {
    alignItems: 'center',
    flex: 1,
  },

  form_input: {
    backgroundColor: '#008037',
    borderRadius: 5,
    color: 'white',
    fontFamily: 'OpenSansLight',
    height: 40,
    marginBottom: 10,
    paddingLeft: 10,
    width: 200,
  },

  form_text: {
    fontFamily: 'ScopeOne',
    fontSize: 18,
  },

  main_container: {
    alignItems: 'center',
    flex: 1,
  },

  scroll_container: {
    flex: 2.5,
  },

  title_container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },

  title_text: {
    fontFamily: 'ScopeOne',
    fontSize: 25,
    textDecorationLine: 'underline',
  },

  touchableHome_container: {
    alignItems: 'center',
    backgroundColor: '#008037',
    borderRadius: 10,
    flex: 1,
    height: 50,
    justifyContent: 'center',
    marginTop: 10,
    width: '60%',
  },

  touchableHome_text: {
    color: 'white',
    fontFamily: 'ScopeOne',
    fontSize: 16,
  },

  touchableSign_container: {},

  touchableSign_text: {
    fontFamily: 'OpenSansItalic',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LogIn;
