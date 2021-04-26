import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import TopHeader from '../Components/TopHeader';

function Add() {
    const [plat, setPlat] = useState('');
    const [parts, setParts] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');


    return (
      <View style={styles.main_container}>
        <TopHeader/>
            <View style={styles.main_container}>
                <KeyboardAvoidingView behavior='height'>

                    <View style={styles.title_container}>
                        <Text style={styles.title_text}>Ajouter un plat</Text>
                    </View>

                    <View style={styles.form_container}>

                        <View style={styles.group_container}>
                            <Text style={styles.group_text}>Plat</Text>
                            <TextInput style={styles.textInput} placeholder="Quel plat ?" 
                                        onChangeText={plat => setPlat(plat)} defaultValue={plat} />
                        </View>
                        <View style={styles.group_container}>
                            <Text style={styles.group_text}>Nombre de parts</Text>
                            <TextInput style={styles.textInput} placeholder="Pour combien ?" 
                                        onChangeText={parts => setParts(parts)} defaultValue={parts} keyboardType={'number-pad'} />
                        </View>
                        <View style={styles.group_container}>
                            <Text style={styles.group_text}>Date et heure</Text>
                            <TextInput style={styles.textInput} placeholder="Quand goûter votre délice ?" 
                                        onChangeText={date => setDate(date)} defaultValue={date} keyboardType={'number-pad'}/>
                        </View>
                        <View style={styles.group_container}>
                            <Text style={styles.group_text}>Description du plat</Text>
                            <TextInput style={styles.textInput} placeholder="Petite description :)" multiline={true} numberOfLines={3}
                                        onChangeText={description => setDescription(description)} defaultValue={description} />
                        </View>
                        <TouchableHighlight onPress={() => alert("salut")} activeOpacity={0.5} underlayColor='#1A4301' style={styles.touch_container} >
                            <Text style={styles.touch_text}>AJOUTER VOTRE PLAT</Text>
                        </TouchableHighlight>

                    </View>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: "center",
    },

    title_container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },

    title_text: {
        fontFamily: "ScopeOne",
        fontSize: 25,
        textDecorationLine: "underline",
        marginBottom: 10,
    },

    form_container: {
        flex: 15,
    },

    group_container: {
        flex: 0.4,
        alignItems: 'center',
    },

    group_text: {
        fontFamily: 'ScopeOne',
        fontSize: 20,
        marginBottom: 6,
    },

    textInput: {
        fontFamily: 'OpenSansItalic',
        fontSize: 14,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#008037',
        borderRadius: 7,
        paddingLeft: 5,
        paddingRight: 5,
        flex: 0.7,
        justifyContent: 'center',
        width: 200,
    },

    touch_container: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#008037',
        borderRadius: 10,
        marginBottom: '3%'
    },

    touch_text: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'ScopeOne',
    }

})

export default Add