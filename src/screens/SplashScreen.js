import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login'); // Replace 'Login' with the actual name of
            // your login screen
        }, 2000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Splash-screen.png')} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        resizeMode: 'contain',
    },
});

export default SplashScreen;
