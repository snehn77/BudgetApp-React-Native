import React from 'react'
import { View, StyleSheet , StatusBar } from 'react-native'
import { Title } from 'react-native-paper'


export default function Header({titleText}) {
    return (
    <View style={styles.headerContainer}>
            <Title style={styles.title}>{titleText}</Title>
    </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#0B0C10',
        marginTop:StatusBar.currentHeight,
        height:70,
        alignItems:'center',
        justifyContent:'center',
    },
    title: {
        color: '#fff',
    }
})
