import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Text } from 'react-native';

function AccountScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/AV_background.png')}
        >
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,

    },
    linkcontainer:{

    }


});
export default AccountScreen;