import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
} from 'react-native';
import TopHeader from '../Components/TopHeader';
import { UserContext } from './UserProvider';

function Add({ navigation }) {
  const { user } = useContext(UserContext);
  console.log(user);

  const [plat, setPlat] = useState('Quiche Salade');
  const [parts, setParts] = useState('4');
  const [dateLiv, setDateLiv] = useState('21-08-2021 21:00');
  const [description, setDescription] = useState('c super bon');

  const commande = {
    plat,
    part: parseInt(parts, 10),
    detailsCommande: description,
    dateLivraison: dateLiv,
  };
  console.log(commande);

  const commander = () => {
    const headerRequest = new Headers();
    headerRequest.append('Content-Type', 'application/json');
    headerRequest.append('Accept', 'application/json');
    headerRequest.append('Authorization', `Bearer ${user.token}`);

    const postOptions = {
      method: 'POST',
      body: JSON.stringify(commande),
      headers: headerRequest,
      cache: 'default',
    };

    const requete = new Request('http://127.0.0.1:8000/api/commandes');

    fetch(requete, postOptions).then((res) => {
      if (res.status < 400) {
        res.json().then(navigation.navigate('Meal'));
      }
    });
    alert('Votre plat a bien été ajouté');
    setPlat('');
    setParts('');
    setDateLiv('');
    setDescription('');
  };

  return (
    <View style={styles.main_container}>
      <TopHeader />
      <View style={styles.main_container}>
        <KeyboardAvoidingView behavior="height">
          <View style={styles.title_container}>
            <Text style={styles.title_text}>Ajouter un plat</Text>
          </View>

          <View style={styles.form_container}>
            <View style={styles.group_container}>
              <Text style={styles.group_text}>Plat</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Quel plat ?"
                onChangeText={(plat) => setPlat(plat)}
                defaultValue={plat}
              />
            </View>
            <View style={styles.group_container}>
              <Text style={styles.group_text}>Nombre de parts</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Pour combien ?"
                onChangeText={(parts) => setParts(parts)}
                defaultValue={parts}
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.group_container}>
              <Text style={styles.group_text}>Date et heure</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Quand goûter votre délice ?"
                onChangeText={(dateLiv) => setDateLiv(dateLiv)}
                defaultValue={dateLiv}
              />
            </View>
            <View style={styles.group_container}>
              <Text style={styles.group_text}>Description du plat</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Petite description :)"
                multiline
                numberOfLines={3}
                onChangeText={(description) => setDescription(description)}
                defaultValue={description}
              />
            </View>
            <TouchableHighlight
              onPress={() => commander()}
              activeOpacity={0.5}
              underlayColor="#1A4301"
              style={styles.touch_container}
            >
              <Text style={styles.touch_text}>AJOUTER VOTRE PLAT</Text>
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView>
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

export default Add;
