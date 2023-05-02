import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

function RegisterScreen({navigation}) {
    return (
        <LinearGradient
                colors={['#1A5B6C','#22383E' ,'#243033']}
                style={styles.linearGradient}
            >
                
                <TextInput style={styles.input} placeholder="Email" keyboardType="email-address"/>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}/>
                <TouchableOpacity 
                    style={styles.registerbutton}
                    onPress={()=>navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
            
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: 'center',    
    },
    input:{
        width: '90%',
        height: 50,
        backgroundColor: "white",
        marginBottom: 30,
        borderRadius:5,
    },
    registerbutton:{
        width: '90%',
        height: 70,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 40,
        backgroundColor:"#F0FEFF",
    },
    buttonText: {
        alignSelf: 'center',
        color: '#337485',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
});

export default RegisterScreen;