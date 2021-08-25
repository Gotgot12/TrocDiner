import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Profile({ route }) {
  const { user, commande } = route.params;
  console.log(commande);
  const dateNaissanceSplit = user.dateNaissance.split('T');

  return (
    <View style={styles.main_container}>
      <View style={styles.title_container}>
        <Text style={styles.title_text}>Profil de l&apos;utilisateur</Text>
      </View>
      <View style={styles.infoUser_container}>
        <View style={styles.infoPerso_container}>
          <Icon name="account" size={35} color="black" />
          <Text style={styles.infoPerso_text}>
            {user.prenom} {user.nom}
          </Text>
          <Text style={styles.infoPerso_text}>
            Date de naissance :{' '}
            {`${dateNaissanceSplit[0].split('-')[2]}/${
              dateNaissanceSplit[0].split('-')[1]
            }/${dateNaissanceSplit[0].split('-')[0]}`}{' '}
          </Text>
          <Text style={styles.infoPerso_text}>Adresse : {user.adresse}</Text>
          <Text style={styles.infoPerso_text}>E-Mail : {user.email}</Text>
          <Text style={styles.infoPerso_text}>
            Moyenne de ses notes : {user.notes}
          </Text>
        </View>
        <View style={styles.histoInfoPlat_container}>
          <Text style={styles.histo_text}>Historique des plats :</Text>
          <ScrollView>
            <View style={styles.infoAllPlat_container}>
              {commande.map((plat) => (
                <View style={styles.infoPlat_container} key={plat.id}>
                  <Text style={styles.infoPerso_text}>{plat.plat}</Text>
                  <Text style={styles.infoPerso_text}>
                    Le{' '}
                    {`${plat.dateLivraison.split('T')[0].split('-')[2]}/${
                      plat.dateLivraison.split('T')[0].split('-')[1]
                    }/${plat.dateLivraison.split('T')[0].split('-')[0]}`}{' '}
                    à{' '}
                    {`${plat.dateLivraison.split('T')[1].split(':')[0]}h${
                      plat.dateLivraison.split('T')[1].split(':')[1]
                    }`}
                  </Text>
                  <Text style={styles.infoPerso_text}>
                    {plat.part} {plat.part > 1 ? 'parts' : 'part'}
                  </Text>
                  <Text style={styles.infoPerso_text}>
                    Détails du plat : {plat.detailsCommande}
                  </Text>
                </View>
              ))}
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
