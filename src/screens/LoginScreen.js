// src/screens/LoginScreen.js

// src/screens/LoginScreen.js

import React from 'react';
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native';

const LoginScreen = ({ navigation }) => {
    // Function to handle guest login
    const continueAsGuest = () => {
        navigation.navigate('SentimentCategories'); // Replace with the name of your main app
        // screen
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>VibeVerse</Text>
            <Text style={styles.subtitle}>Discover music that matches your mood!</Text>

            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" />
            <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.orText}>or</Text>

            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.buttonSocial}>
                    <Text style={styles.buttonText}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSocial}>
                    <Text style={styles.buttonText}>Google</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={continueAsGuest}>
                <Text style={styles.continueAsGuest}>Continue as guest</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        color: '#fff',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#aaa',
        marginBottom: 32,
    },
    input: {
        width: '100%',
        backgroundColor: '#333',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        color: '#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        flex: 1,
        padding: 15,
        backgroundColor: '#555',
        alignItems: 'center',
        borderRadius: 8,
        marginHorizontal: 5,
        marginBottom: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    orText: {
        color: '#aaa',
        marginBottom: 15,
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 15,
    },
    buttonSocial: {
        flex: 1,
        padding: 15,
        backgroundColor: '#555',
        alignItems: 'center',
        borderRadius: 8,
        marginHorizontal: 5,
    },
    continueAsGuest: {
        color: '#fff',
        textDecorationLine: 'underline',
    },
});

export default LoginScreen;
