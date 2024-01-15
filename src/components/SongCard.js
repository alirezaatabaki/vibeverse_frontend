// src/components/SongCard.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SongCard = ({ title, imageUrl, onPress }) => {
    const imageSource = { uri: imageUrl };

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.buttonText}>Listen Now</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1c1c1e',
        borderRadius: 6,
        overflow: 'hidden',
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    title: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

export default SongCard;
