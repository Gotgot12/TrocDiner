import * as React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Card from '../Components/Card';
import Counter from '../Components/Counter';

function Request({ route, navigation }) {
  const { profile } = route.params;
  const dateSplit = profile.dateLivraison.split(' ');
  return (
    <View style={styles.main_container}>
      <View style={styles.title_container}>
        <Text style={styles.title_text}>Votre commande</Text>
        <Text style={styles.token_text}>
          Petit rappel: Vous avez ... jetons
        </Text>
      </View>
      <Card profile={profile} navigation={navigation} />
      <View style={styles.recap_container}>
        <View style={styles.infos_container}>
          <View style={styles.profileText_container}>
            <Text style={styles.infos_text}>{profile.plat}</Text>
          </View>
          <View style={styles.dateLiv}>
            <Text style={styles.infos_text}>
              {`${dateSplit[0].split('-')[2]}/${dateSplit[0].split('-')[1]}/${
                dateSplit[0].split('-')[0]
              }`}
            </Text>
            <Text style={styles.infos_text}>
              {`${dateSplit[1].split(':')[0]}:${dateSplit[1].split(':')[1]}`}
            </Text>
          </View>
        </View>
        <Counter part={profile.part} />
        <View style={styles.addButton_container}>
          <TouchableHighlight
            style={styles.touchable_container}
            onPress={() => alert('Votre commande a été passée !')}
          >
            <Text style={styles.touchable_text}>COMMANDER</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.details_container}>
        <Text style={styles.titledetails_text}>Détails de la commande :</Text>
        <Text style={styles.lorem_text}>{profile.detailsCommande}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton_container: {
    alignItems: 'center',
    flex: 0.7,
  },

  dateLiv: {
    alignItems: 'center',
    marginLeft: 10,
  },

  details_container: {
    alignItems: 'center',
    flex: 1.5,
  },

  infos_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },

  infos_text: {
    fontFamily: 'ScopeOne',
    fontSize: 19,
    textAlign: 'center',
  },

  lorem_text: {
    fontFamily: 'OpenSansItalic',
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
  },

  main_container: {
    alignItems: 'center',
    flex: 1,
  },

  profileText_container: {
    flex: 1,
  },

  recap_container: {
    borderColor: '#008037',
    borderWidth: 1,
    flex: 3,
    width: 300,
  },

  title_container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 10,
  },

  title_text: {
    fontFamily: 'ScopeOne',
    fontSize: 25,
    textDecorationLine: 'underline',
  },

  titledetails_text: {
    fontFamily: 'ScopeOne',
    fontSize: 18,
    marginBottom: 5,
    marginTop: 10,
  },

  token_text: {
    fontFamily: 'OpenSansItalic',
    fontSize: 15,
  },

  touchable_container: {
    alignItems: 'center',
    backgroundColor: '#008037',
    borderRadius: 7,
    flex: 1,
    justifyContent: 'center',
    marginBottom: 5,
    width: '60%',
  },

  touchable_text: {
    color: 'white',
    fontFamily: 'ScopeOne',
    fontSize: 16,
  },
});

export default Request;
