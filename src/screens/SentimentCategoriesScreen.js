// src/screens/SentimentCategoriesScreen.js

import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, TouchableOpacity, Dimensions, RefreshControl } from 'react-native';
import ApiService from '../utils/ApiService';

const { width } = Dimensions.get('window');

const SentimentCategoriesScreen = ({ navigation }) => {
    const [categories, setCategories] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchCategories = async () => {
        const fetchedCategories = await ApiService.fetchCategories();
        setCategories(fetchedCategories);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchCategories().then(() => {
            setRefreshing(false);
        });
    }, []);

    const renderCategoryItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => navigation.navigate('SongList', { categoryId: item.id })}>
                <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2} // Layout in two columns
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
        padding: 10,
    },
    categoryItem: {
        width: (width / 2) - 20, // Adjust for padding and margin
        height: 100,
        margin: 10,
        backgroundColor: '#333',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    categoryText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default SentimentCategoriesScreen;

