// src/screens/SongPlayerScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const SongPlayerScreen = ({ route, navigation }) => {
    const { song } = route.params;
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    const handlePlayPause = async () => {
        if (!sound) {
            console.log('Loading Sound');
            const { sound: newSound } = await Audio.Sound.createAsync(
                { uri: song.song_url },
                { shouldPlay: true }
            );
            setSound(newSound);
            setIsPlaying(true);
        } else {
            if (isPlaying) {
                console.log('Pausing Sound');
                await sound.pauseAsync();
            } else {
                console.log('Playing Sound');
                await sound.playAsync();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>

            <View style={styles.songArtContainer}>
                <Image source={{ uri: song.image_url }} style={styles.songArt} />
            </View>

            <Text style={styles.title}>{song.title}</Text>

            <View style={styles.controlsContainer}>
                <TouchableOpacity onPress={handlePlayPause}>
                    <Ionicons
                        name={isPlaying ? 'ios-pause-circle' : 'ios-play-circle'}
                        size={70}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    backButton: {
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginTop: 10,
    },
    songArtContainer: {
        marginVertical: 32,
    },
    songArt: {
        width: 300, // Your image width
        height: 300, // Your image height
        borderRadius: 150, // Half the size of the width to create a circle
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 24,
    },
    sliderContainer: {
        width: '80%', // Slider width
        justifyContent: 'center',
    },
    slider: {
        height: 40, // Slider height
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
    },
    controlIcon: {
        marginHorizontal: 32,
    },
});

export default SongPlayerScreen;
