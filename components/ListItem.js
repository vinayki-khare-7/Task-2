// components/ListItem.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ListItem = ({ item,onPress}) => {

  const handleItemPress = (item) => {
    // Navigate to DetailScreen and pass the selected item
    navigation.navigate('DetailScreen', { item });
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View>
        <Image source={{ uri: item.image }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flexDirection:"column",
    textAlign:"center"
  },
  title: {
    fontSize: 15,
    color:"black",
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    color:"black",
    color: '#888',
  },
});

export default ListItem;
