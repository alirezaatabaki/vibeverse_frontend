// src/screens/SongListScreen.js

import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SongCard from '../components/SongCard';
import ApiService from '../utils/ApiService';

const SongListScreen = ({ navigation, route }) => {
    const [songs, setSongs] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const categoryId = route.params?.categoryId; // Retrieve the passed category ID

    const fetchSongs = async () => {
        if (categoryId) {
            try {
                const data = await ApiService.fetchSongsByCategory(categoryId);
                setSongs(data);
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        fetchSongs();
    }, [categoryId]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchSongs().then(() => {
            setRefreshing(false);
        });
    }, [categoryId]);

    const renderSongItem = ({ item }) => {
        return (
            <SongCard
                title={item.title}
                imageUrl={item.image_url}
                onPress={() => navigation.navigate('SongPlayer', { song: item })}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
            <FlatList
                data={songs}
                renderItem={renderSongItem}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 10,
    },
    backButton: {
        marginLeft: 10,
        marginBottom: 10,
    },
});

export default SongListScreen;
