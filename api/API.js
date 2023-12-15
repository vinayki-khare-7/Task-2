import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const API = (props) => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://your-mock-api.com/api/items');
      setItems(response.data);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleApiError = (error) => {
    if (error.response) {
      // The request was made, but the server responded with a status code outside the range of 2xx
      const errorMessage = `Server error: ${error.response.status}`;
      console.error(errorMessage);
      showToast(errorMessage, 'error');
    } else if (error.request) {
      // The request was made, but no response was received
      const errorMessage = 'No response from the server';
      console.error(errorMessage);
      showToast(errorMessage, 'error');
    } else {
      // Something happened in setting up the request that triggered an Error
      const errorMessage = `Error setting up the request: ${error.message}`;
      console.error(errorMessage);
      showToast(errorMessage, 'error');
    }
  };

  const showToast = (message, type) => {
    Toast.show({
      type: type, // 'success', 'error', 'info', or 'custom'
      position: 'bottom',
      text1: 'Error',
      text2: message,
      visibilityTime: 3000,
      autoHide: true,
    });
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <ScrollView>
        <Text>HELLO</Text>
      </ScrollView>
    </View>
  );
};



export default API;
