import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class TopHeader extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.iconSidebar_container}>
          <Icon name="page-layout-sidebar-left" size={35} color="white" />
        </View>
        <View style={styles.titre_container}>
          <Text style={styles.titre_text}>
            Troc Dîner
          </Text>
        </View>
        <View style={styles.iconProfile_container}>
          <Icon name="account" size={35} color="white" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: "row",
        marginTop: 20,
        paddingBottom: 10,
        alignItems: "center",
        backgroundColor: "#008037",
    },

    iconSidebar_container: {
        flex: 1, 
        alignItems: "flex-start",
    },

    titre_container: {
        flex: 2, 
        alignItems: "center",
    },

    titre_text: {
        fontSize: 40,
        fontFamily: "DancingScript",
        color: "white",
    },

    iconProfile_container: {
        flex: 1, 
        alignItems: "flex-end",
    }

});

export default TopHeader;
