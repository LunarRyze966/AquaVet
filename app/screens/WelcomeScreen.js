import React from 'react';
import {StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

function WelcomeScreen({navigation}) {
    return (
            <LinearGradient
                colors={['#1A5B6C','#22383E' ,'#243033']}
                style={styles.linearGradient}
            >
                <Image style={styles.logo} source={require("../assets/AV_logo.png")}></Image>
                <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.loginbutton}
                    onPress={()=>navigation.navigate('Login')}>
                        <Text style={styles.lbuttonText}>LOG IN</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.registerbutton}
                    onPress={()=>navigation.navigate('Register')}>
                        <Text style={styles.rbuttonText}>REGISTER</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.registerbutton}>
                        <Text style={styles.rbuttonText}>CONTINUE AS GUEST</Text>
                </TouchableOpacity>
                
                </View> 
                
            </LinearGradient>    
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: 'center'    
    },
    buttonContainer:{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        alignItems: "center",
        marginBottom:30,
    },
    loginbutton:{
        width: '90%',
        height: 60,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor:"#337485",
    },
    lbuttonText: {
        alignSelf: 'center',
        color: '#F0FEFF',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    registerbutton:{
        width: '90%',
        height: 60,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor:"#F0FEFF",
    },
    rbuttonText: {
        alignSelf: 'center',
        color: '#337485',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    logo:{
        width: 350,
        height: 100,
        position: 'absolute',
        top: 100,
    },
});

export default WelcomeScreen;