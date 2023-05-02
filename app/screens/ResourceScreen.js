import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

function ResourceScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/ResourceBackground.jpg')}
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
export default ResourceScreen;