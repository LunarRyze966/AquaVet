import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

function CommunityScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/AV_background.png')}
        >
            <View> 
                
            </View>
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
export default CommunityScreen;