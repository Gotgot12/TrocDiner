import React from "react";
import { StyleSheet, View, Text } from "react-native";

class TopHeader extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.titre_container}>
          <Text style={styles.titre_text}>
            Troc Dîner
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    main_container: {
        flexDirection: "row",
        marginTop: 20,
        paddingBottom: 10,
        alignItems: "center",
        backgroundColor: "#008037",
    },

    titre_container: {
        flex: 1, 
        alignItems: "center",
    },

    titre_text: {
        fontSize: 40,
        fontFamily: "DancingScript",
        color: "white",
    },

});

export default TopHeader;
