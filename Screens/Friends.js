import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from '../Components/Card';
import Search from '../Components/Search';
import TopHeader from '../Components/TopHeader';
import useFetchGet from '../Functions/useFetchGet';

function Friends({ navigation }) {
  const bddCommande = useFetchGet('http://127.0.0.1:8000/api/users');
  console.log(bddCommande);

  return (
    <View>
      <TopHeader />
      <ScrollView>
        <View style={styles.main_container}>
          <View style={styles.title_container}>
            <Text style={styles.title_text}>Vos amis</Text>
            <Search placeholder="Rechercher une personne" />
          </View>
          <View>
            {bddCommande.map((m) => (
              <View key={m.id} style={styles.card_container}>
                <Card user={m} commande={m.commandes} navigation={navigation} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card_container: {
    height: 100,
    width: 350,
  },

  main_container: {
    alignItems: 'center',
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

export default Friends;
