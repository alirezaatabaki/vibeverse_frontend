// src/utils/ApiService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api'; // Base URL of Django backend

const ApiService = {
    // Fetches categories from the backend
    fetchCategories: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/categories/`);
            return response.data;
        } catch (error) {
            console.error('Error fetching categories:', error);
            return [];
        }
    },

    // Fetches songs for a given category
    fetchSongsByCategory: async (categoryId) => {
        try {
            const response = await axios.get(`${BASE_URL}/songs/?category_id=${categoryId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching songs:', error);
            return [];
        }
    },

    fetchSongDetails: async (songId) => {
        try {
            const response = await axios.get(`${BASE_URL}/songs/${songId}/`);
            return response.data;
        } catch (error) {
            console.error('Error fetching song details:', error);
            return null;
        }
    },
};

export default ApiService;
