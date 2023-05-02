import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native';

function HomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/AV_background.png')}
        >
            <View style={styles.aquariumblock}>
                <View style={styles.row}>
                <TouchableOpacity 
                    style={styles.aquariumbutton}
                    onPress={() => {
                        console.log('You tapped the button!');}}>
                        
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.aquariumbutton}
                    onPress={() => {
                        console.log('You tapped the button!');}}>
                        
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.aquariumbutton}
                    onPress={() => {
                        console.log('You tapped the button!');}}>
                        
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.aquariumbutton}
                    onPress={() => {
                        console.log('You tapped the button!');}}>
                        
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.aquariumbutton}
                    onPress={() => {
                        console.log('You tapped the button!');}}>
                        
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.aquariumbutton}
                    onPress={() => {
                        console.log('You tapped the button!');}}>
                        
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.aquariumbutton}
                    onPress={() => {
                        console.log('You tapped the button!');}}>
                        
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.aquariumbutton}
                    onPress={() => {
                        console.log('You tapped the button!');}}>
                        
                </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    aquariumblock:{
        flex: 0,
        justifyContent:'space-evenly',
        width: '95%',
        height: 240,
        backgroundColor: '#b8baba',
        borderRadius:8,
        padding: 5
    },
    aquariumbutton:{
        borderRadius: 100,
        backgroundColor: 'black',
        width:70,
        height:70,
        margin:10,
    },
    row:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    linkcontainer:{

    }


});
export default HomeScreen;