import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Card({ userSeller, commande, navigation }) {
  return (
    <TouchableOpacity
      style={styles.main_container}
      onPress={() => navigation.navigate('Profile', { userSeller, commande })}
    >
      <View style={styles.account_container}>
        <Icon name="account" size={50} color="black" />
      </View>
      <View style={styles.text_container}>
        <View style={styles.info_container}>
          <Text style={styles.names_text}>
            {userSeller.prenom} {userSeller.nom}
          </Text>
          <Text style={styles.location_text}>{userSeller.adresse}</Text>
        </View>
        <Text style={styles.notes_text}>
          Moyenne de ses notes : {userSeller.notes}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  account_container: {
    alignItems: 'center',
    flex: 1,
  },

  info_container: {
    alignItems: 'flex-end',
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-between',
  },

  location_text: {
    flex: 1.5,
    fontFamily: 'ScopeOne',
    fontSize: 15,
    textAlign: 'center',
  },

  main_container: {
    alignItems: 'center',
    borderColor: '#008037',
    borderWidth: 1,
    flex: 2,
    flexDirection: 'row',
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
  },

  names_text: {
    alignSelf: 'center',
    flex: 2,
    fontFamily: 'ScopeOne',
    fontSize: 18,
  },

  notes_text: {
    flex: 2,
    fontFamily: 'ScopeOne',
    fontSize: 15,
  },

  text_container: {
    flex: 4,
    justifyContent: 'center',
    marginRight: 5,
  },
});

export default Card;
