import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import TopHeader from '../Components/TopHeader';
import { UserContext } from './UserProvider';

function Settings() {
  const { user, setUser } = useContext(UserContext);

  const [nom, setNom] = useState(user.nom);
  const [prenom, setPrenom] = useState(user.prenom);
  const [adresse, setAdresse] = useState(user.adresse);
  const [dateNaissance, setDateNaissance] = useState(user.dateNaissance);

  const userForm = {
    nom: nom,
    prenom: prenom,
    adresse: adresse,
    dateNaissance: dateNaissance,
  };
  console.log(userForm);

  const modifProfile = () => {
    const headerRequest = new Headers();
    headerRequest.append('Content-Type', 'application/json');
    headerRequest.append('Accept', 'application/json');
    headerRequest.append('Authorization', `Bearer ${user.token}`);

    const postOptions = {
      method: 'PUT',
      body: JSON.stringify(userForm),
      headers: headerRequest,
      cache: 'default',
    };

    const requete = new Request(`http://localhost:8000/api/users/${user.id}`);

    fetch(requete, postOptions).then((res) => {
      if (res.status < 400) {
        res.json().then((change) => {
          setUser({
            id: user.id,
            email: user.email,
            token: user.token,
            nom: change.nom,
            prenom: change.prenom,
            adresse: change.adresse,
            dateNaissance: change.dateNaissance,
          });
        });
      }
    });
  };
  return (
    <View style={styles.global_container}>
      <TopHeader />
      <View style={styles.main_container}>
        <View style={styles.title_container}>
          <Text style={styles.title_text}>Paramètres</Text>
        </View>

        <View style={styles.form_container}>
          <View style={styles.group_container}>
            <Text style={styles.group_text}>Prénom</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(prenom) => setPrenom(prenom)}
              defaultValue={prenom}
            />
          </View>
          <View style={styles.group_container}>
            <Text style={styles.group_text}>Nom</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(nom) => setNom(nom)}
              defaultValue={nom}
            />
          </View>
          <View style={styles.group_container}>
            <Text style={styles.group_text}>Adresse</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(adresse) => setAdresse(adresse)}
              defaultValue={adresse}
            />
          </View>
          <View style={styles.group_container}>
            <Text style={styles.group_text}>Date de naissance</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(dateNaissance) => setDateNaissance(dateNaissance)}
              defaultValue={dateNaissance}
            />
          </View>
          <TouchableHighlight
            onPress={() => modifProfile()}
            activeOpacity={0.5}
            underlayColor="#1A4301"
            style={styles.touch_container}
          >
            <Text style={styles.touch_text}>Modifier votre profil</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form_container: {
    flex: 15,
  },

  group_container: {
    alignItems: 'center',
    flex: 0.4,
  },

  group_text: {
    fontFamily: 'ScopeOne',
    fontSize: 20,
    marginBottom: 6,
  },

  main_container: {
    alignItems: 'center',
    flex: 1,
  },

  textInput: {
    borderColor: '#008037',
    borderRadius: 7,
    borderWidth: 1,
    flex: 0.7,
    fontFamily: 'OpenSansItalic',
    fontSize: 14,
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center',
    width: 200,
  },

  title_container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 10,
    marginTop: 10,
  },

  title_text: {
    fontFamily: 'ScopeOne',
    fontSize: 25,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },

  touch_container: {
    alignItems: 'center',
    backgroundColor: '#008037',
    borderRadius: 10,
    flex: 0.2,
    justifyContent: 'center',
    marginBottom: '3%',
  },

  touch_text: {
    color: 'white',
    fontFamily: 'ScopeOne',
    fontSize: 16,
  },
});

/*
const styles = StyleSheet.create({
  global_container: {
    flex: 1,
  },

  main_container: {
    alignItems: 'center',
    flex: 1,
  },

  title_container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
    marginTop: 10,
  },

  title_text: {
    fontFamily: 'ScopeOne',
    fontSize: 25,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
});
*/
export default Settings;
