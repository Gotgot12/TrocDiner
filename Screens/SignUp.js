import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TopHeader from '../Components/TopHeaderLogSign';

function SignUp({ navigation }) {
  const [email, setEmail] = useState('horty@gmail.com');
  const [mdp, setMdp] = useState('test');
  const [confMdp, setConfMdp] = useState('test');

  const signupForm = {
    email,
    password: mdp,
  };

  const signup = () => {
    if (mdp === confMdp) {
      const headerRequest = new Headers();
      headerRequest.append('Content-Type', 'application/json');
      headerRequest.append('Accept', 'application/json');

      const postOptions = {
        method: 'POST',
        body: JSON.stringify(signupForm),
        headers: headerRequest,
        cache: 'default',
      };

      const requete = new Request('http://localhost:8000/api/users');

      fetch(requete, postOptions).then((res) => {
        if (res.status < 400) {
          res.json().then((connect) => {
            console.log(connect);
            navigation.navigate('LogIn');
          });
        }
      });
    }
  };

  return (
    <View style={styles.main_container}>
      <TopHeader />
      <View style={styles.title_container}>
        <Text style={styles.title_text}>Inscription</Text>
      </View>

      <ScrollView>
        <View style={styles.content_container}>
          <View style={styles.form_container}>
            <Text style={styles.form_text}>E-Mail</Text>
            <TextInput
              style={styles.form_input}
              placeholder="Adresse email ISEP"
              onChangeText={(email) => setEmail(email)}
              defaultValue={email}
            />
          </View>

          <View style={styles.form_container}>
            <Text style={styles.form_text}>Mot de passe</Text>
            <TextInput
              style={styles.form_input}
              placeholder="Votre plus beau mot de passe"
              onChangeText={(mdp) => setMdp(mdp)}
              defaultValue={mdp}
              secureTextEntry
            />
          </View>

          <View style={styles.form_container}>
            <Text style={styles.form_text}>Confirmation du mot de passe</Text>
            <TextInput
              style={styles.form_input}
              placeholder="Confirmez le !"
              onChangeText={(confMdp) => setConfMdp(confMdp)}
              defaultValue={confMdp}
              secureTextEntry
            />
          </View>

          <View style={styles.buttonSign_container}>
            <TouchableHighlight
              style={styles.touchableHome_container}
              activeOpacity={0.6}
              underlayColor="#1A4301"
              onPress={() => signup()}
            >
              <Text style={styles.touchableHome_text}>S&apos;INSCRIRE</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>

      <View style={styles.description_container}>
        <Text style={styles.description_text}>
          Vous allez pouvoir renseigner plus d&apos;informations dans votre
          profil pas d&apos;inquiétude !
        </Text>
        <TouchableOpacity
          style={styles.touchableLog_container}
          onPress={() => navigation.navigate('LogIn')}
        >
          <Text style={styles.touchableLog_text}>
            Vous avez déjà un compte ? Venez par là !
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSign_container: {
    alignItems: 'center',
    flex: 1,
  },

  content_container: {
    flex: 3,
  },

  description_container: {
    alignItems: 'center',
    flex: 0.8,
    justifyContent: 'flex-end',
    marginBottom: 15,
  },

  description_text: {
    fontFamily: 'OpenSansItalic',
    fontSize: 12,
    textAlign: 'center',
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

  title_container: {
    flex: 0.8,
    justifyContent: 'center',
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
    flex: 0.8,
    justifyContent: 'center',
    width: '50%',
  },

  touchableHome_text: {
    color: 'white',
    fontFamily: 'ScopeOne',
    fontSize: 16,
  },

  touchableLog_container: {},

  touchableLog_text: {
    fontFamily: 'OpenSansItalic',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default SignUp;
