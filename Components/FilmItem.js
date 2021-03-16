//Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class FilmItem extends React.Component {
    render() {
        const film = this.props.film
        console.log(film)
        return(
            <View style={styles.main_container}>
                <Image style={styles.image} source={{uri: "image"}}/>
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{film.title}</Text>
                        <Text style={styles.vote_text}>{film.vote_average}</Text>
                    </View>                  
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date_text}>Sortie le {film.release_date}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },

    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'grey'
    },

    content_container: {
        flexDirection: 'column',
        marginTop: 5,
        marginBottom: 5,
        flex: 1,
    },

    header_container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        padding: 5
    },

    title_text: {
        fontSize: 16,
    },

    vote_text: {
        fontSize: 11,
    },

    description_container: {
        flex: 7,
        justifyContent: 'center',
    },

    description_text: {
        padding: 5
    },

    date_container: {
        flex: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },

    date_text: {
        fontSize: 14
    },

})

export default FilmItem
