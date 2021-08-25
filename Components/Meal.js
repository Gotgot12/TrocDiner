import React, { useContext } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Token from './Token';
import Search from './Search';
import useFetchGet from '../Functions/useFetchGet';
import { UserContext } from '../Screens/UserProvider';

function Meal({ navigation }) {
  const { user } = useContext(UserContext);

  console.log(user);

  const bddCommande = useFetchGet('http://127.0.0.1:8000/api/commandes');
  console.log(bddCommande);

  // if (bddCommande !== false) {
  //   console.log(bddCommande);
  // }

  return (
    <ScrollView>
      <View style={styles.footOfHead}>
        <Token />
        <Search placeholder="Recherche de plat" />
        <View style={styles.title_container}>
          <Text style={styles.title_text}>Les meilleurs plats !</Text>
        </View>
      </View>
      <View style={styles.main_container}>
        {bddCommande.map((m) => (
          <View style={styles.eachMeal} key={m.id}>
            <TouchableOpacity
              style={styles.account_container}
              onPress={() =>
                navigation.navigate('Profile', {
                  user: m.chief,
                  commande: bddCommande,
                })
              }
            >
              <Icon name="account" size={35} color="black" />
              <Text style={styles.account_text}>{m.chief.prenom}</Text>
            </TouchableOpacity>
            <View style={styles.descriptionMeal_container}>
              <Text style={styles.descriptionMeal_text}>{m.plat}</Text>
              <Text style={styles.descriptionMeal_text}>
                {m.part} {m.part > 1 ? 'parts' : 'part'}
              </Text>
              <Text style={styles.descriptionMeal_text}>
                {`${m.dateLivraison.split('T')[0].split('-')[2]}/${
                  m.dateLivraison.split('T')[0].split('-')[1]
                }/${m.dateLivraison.split('T')[0].split('-')[0]}`}
              </Text>
            </View>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#1A4301"
              style={styles.button_container}
              onPress={() =>
                navigation.navigate('Request', {
                  user: m.chief,
                  commande: bddCommande,
                  plat: m,
                })
              }
            >
              <Text style={styles.button_text}>COMMANDER</Text>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  account_container: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 2,
    justifyContent: 'center',
    marginLeft: -5,
  },

  account_text: {
    fontFamily: 'ScopeOne',
    fontSize: 13,
  },

  button_container: {
    alignItems: 'center',
    backgroundColor: '#008037',
    borderRadius: 7,
    flex: 2.5,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 5,
  },

  button_text: {
    color: 'white',
    fontFamily: 'ScopeOne',
    fontSize: 16,
  },

  descriptionMeal_container: {
    alignItems: 'center',
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  descriptionMeal_text: {
    fontFamily: 'ScopeOne',
    fontSize: 16,
    textAlign: 'center',
  },

  eachMeal: {
    borderColor: '#008037',
    borderWidth: 1.5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginTop: 10,
    paddingBottom: 5,
    paddingTop: 5,
  },

  footOfHead: {
    marginTop: 10,
  },

  main_container: {
    marginLeft: 10,
    marginRight: 10,
  },

  title_container: {
    alignItems: 'center',
    marginTop: 5,
  },

  title_text: {
    fontFamily: 'ScopeOne',
    fontSize: 25,
  },
});

export default Meal;
