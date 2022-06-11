import React, { useContext, useState } from 'react';
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
import { UserContext } from './UserProvider';
import DecodeTokenJWT from '../Functions/DecodeTokenJWT';

function LogIn({ navigation }) {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('test');

  const login = () => {
    if (document.cookie === '') {
      document.cookie = `email=${email}`;
      document.cookie = `mdp=${mdp}`;
    }

    const cArray = document.cookie.split(';');
    const cemail = cArray[0].split('=')[1];
    const cmdp = cArray[1].split('=')[1];

    console.log(document.cookie);

    const loginForm = {
      email: cemail,
      password: cmdp,
    };

    const headerRequest = new Headers();
    headerRequest.append('Content-Type', 'application/json');
    headerRequest.append('Accept', 'application/json');

    const postOptions = {
      method: 'POST',
      body: JSON.stringify(loginForm),
      headers: headerRequest,
      cache: 'default',
    };

    const requete = new Request('http://localhost:8000/api/login');

    fetch(requete, postOptions).then((res) => {
      if (res.status < 400) {
        res.json().then((token) => {
          const payLoadToken = DecodeTokenJWT(token.token);
          const dateNaissance = new Date(payLoadToken.dateNaissance.date);

          setUser({
            id: payLoadToken.id,
            email,
            token: token.token,
            nom: payLoadToken.nom,
            prenom: payLoadToken.prenom,
            adresse: payLoadToken.adresse,
            dateNaissance: dateNaissance,
            Coin: payLoadToken.coin,
          });
        });
      } else {
        document.cookie = 'email=;expires=Thu, 01 Jan 1970 00:00:00 UTC';
        document.cookie = 'mdp=;expires=Thu, 01 Jan 1970 00:00:00 UTC';
      }
    });
  };
  if (document.cookie !== '') {
    login();
  }

  console.log(document.cookie);
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

          <View style={styles.buttonLog_container}>
            <TouchableHighlight
              style={styles.touchableHome_container}
              activeOpacity={0.6}
              underlayColor="#1A4301"
              onPress={() => login()}
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
