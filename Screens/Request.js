import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../Components/Card';
import { UserContext } from './UserProvider';
import BuyRequest from '../Functions/BuyRequest';
import Coin from '../Components/Coin';

function Request({ route, navigation }) {
  const { userSeller, commande, plat } = route.params;
  const { user, setUser } = useContext(UserContext);

  const [count, setCount] = useState(1);

  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const plus = () => {
    if (count < plat.part) {
      setCount(count + 1);
    }
  };

  return (
    <View style={styles.main_container}>
      <View style={styles.title_container}>
        <Text style={styles.title_text}>Votre commande</Text>
        <Coin />
      </View>
      <Card
        userSeller={userSeller}
        commande={commande}
        navigation={navigation}
      />
      <View style={styles.recap_container}>
        <View style={styles.infos_container}>
          <View style={styles.profileText_container}>
            <Text style={styles.infos_text}>{plat.plat}</Text>
          </View>
          <View style={styles.dateLiv}>
            <Text style={styles.infos_text}>
              {plat.dateLivraison.toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            </Text>
            <Text style={styles.infos_text}>
              {`${plat.dateLivraison.getHours()}:${`0${plat.dateLivraison.getMinutes()}`.slice(
                -2
              )}`}
            </Text>
          </View>
        </View>
        <View style={styles.counter_container}>
          <TouchableHighlight underlayColor="#DDDDDD" onPress={() => minus()}>
            <Icon name="minus-circle" color="#008037" size={50} />
          </TouchableHighlight>
          <Text style={styles.text}>{count}</Text>
          <TouchableHighlight underlayColor="#DDDDDD" onPress={() => plus()}>
            <Icon name="plus-circle" color="#008037" size={50} />
          </TouchableHighlight>
        </View>
        <View style={styles.addButton_container}>
          <TouchableHighlight
            style={styles.touchable_container}
            onPress={() => BuyRequest(userSeller, user, setUser, plat, count)}
          >
            <Text style={styles.touchable_text}>COMMANDER</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.details_container}>
        <Text style={styles.titledetails_text}>Détails de la commande :</Text>
        <Text style={styles.lorem_text}>{plat.detailsCommande}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton_container: {
    alignItems: 'center',
    flex: 0.7,
  },

  counter_container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
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

  text: {
    fontFamily: 'ScopeOne',
    fontSize: 40,
    marginLeft: 10,
    marginRight: 10,
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
