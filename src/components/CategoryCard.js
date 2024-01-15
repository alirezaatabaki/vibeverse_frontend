// src/components/CategoryCard.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryCard = ({ title, imageUrl, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={imageUrl} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 10,
        height: 150, // Set height accordingly
        borderRadius: 10, // Adjust for rounded corners
        overflow: 'hidden', // Ensure the image is contained within the border radius
        elevation: 5, // Only works on Android for shadow
        // iOS shadow styles
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.8, // Adjust opacity
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 110, // Adjust based on the height of your card
    },
});

export default CategoryCard;
