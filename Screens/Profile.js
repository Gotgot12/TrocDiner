import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Profile({ route }) {
  const { profile } = route.params;
  const dateSplit = profile.dateLivraison.split(' ');
  return (
    <View style={styles.main_container}>
      <View style={styles.title_container}>
        <Text style={styles.title_text}>Profil de l&apos;utilisateur</Text>
      </View>
      <View style={styles.infoUser_container}>
        <View style={styles.infoPerso_container}>
          <Icon name="account" size={35} color="black" />
          <Text style={styles.infoPerso_text}>
            {profile.prenom} {profile.nom}
          </Text>
          <Text style={styles.infoPerso_text}>
            Date de naissance : {profile.dateNaissance}
          </Text>
          <Text style={styles.infoPerso_text}>Adresse : {profile.adresse}</Text>
          <Text style={styles.infoPerso_text}>E-Mail : {profile.email}</Text>
          <Text style={styles.infoPerso_text}>
            Moyenne de ses notes : {profile.notes}
          </Text>
        </View>
        <View style={styles.histoInfoPlat_container}>
          <Text style={styles.histo_text}>Historique des plats :</Text>
          <ScrollView>
            <View style={styles.infoPlat_container}>
              <Text style={styles.infoPerso_text}>{profile.plat}</Text>
              <Text style={styles.infoPerso_text}>
                Le{' '}
                {`${dateSplit[0].split('-')[2]}/${dateSplit[0].split('-')[1]}/${
                  dateSplit[0].split('-')[0]
                }`}{' '}
                à{' '}
                {`${dateSplit[1].split(':')[0]}h${dateSplit[1].split(':')[1]}`}
              </Text>
              <Text style={styles.infoPerso_text}>
                {profile.part} {profile.part > 1 ? 'parts' : 'part'}
              </Text>
              <Text style={styles.infoPerso_text}>
                Détails du plat : {profile.detailsCommande}
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  histoInfoPlat_container: {
    alignItems: 'center',
    flex: 2,
    marginTop: 10,
  },

  histo_text: {
    fontFamily: 'ScopeOne',
    fontSize: 21,
  },

  infoPerso_container: {
    alignItems: 'center',
    borderColor: '#008037',
    borderWidth: 1,
    flex: 1.1,
    marginLeft: 20,
    marginRight: 20,
  },

  infoPerso_text: {
    fontFamily: 'ScopeOne',
    fontSize: 17,
    textAlign: 'center',
  },

  infoPlat_container: {
    alignItems: 'center',
    borderColor: '#008037',
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 3,
    paddingBottom: 5,
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 5,
  },

  infoUser_container: {
    flex: 10,
  },

  main_container: {
    alignItems: 'center',
    flex: 1,
  },

  title_container: {
    flex: 1,
    marginTop: 10,
  },

  title_text: {
    fontFamily: 'ScopeOne',
    fontSize: 25,
    textDecorationLine: 'underline',
  },
});

export default Profile;
