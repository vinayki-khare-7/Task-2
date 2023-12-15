// Home.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet, Text, TouchableOpacity, TextInput, Modal, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListItem from '../../components/ListItem';
import DetailScreen from '../../components/DetailScreen';


const Home = ({ navigation }) => {
    const [items, setItems] = useState([
        { id: '1', title: 'Item 1', description: 'Description 1', image: 'https://placekitten.com/200/200' },
        { id: '2', title: 'Item 2', description: 'Description 2', image: 'https://placekitten.com/200/200' },
        { id: '3', title: 'Item 3', description: 'Description 3', image: 'https://placekitten.com/200/200' },
    ]);

    const [newItem, setNewItem] = useState({ title: '', description: '', image: '' });
    const [isModalVisible, setModalVisible] = useState(false);

    const removeItem = (itemId) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

    const addItem = () => {
        if (newItem.title && newItem.description && newItem.image) {
            setItems((prevItems) => [...prevItems, { id: String(prevItems.length + 1), ...newItem }]);
            setNewItem({ title: '', description: '', image: '' });
            setModalVisible(false); // Close the modal after adding an item
        }
    };

    const handleItemPress = (item) => {
        // Navigate to DetailScreen and pass the selected item
        navigation.navigate('DetailScreen', { item });
    };

    return (
        <View>
            <ScrollView>

                <FlatList
                    data={items}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.listItemContainer}>

                            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}
                                onPress={() => navigation.navigate('Detail', { item })}
                            >
                                <View style={styles.container}>
                                    <View>
                                        <Image source={{ uri: item.image }} style={styles.image} />
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.description}>{item.description}</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity
                                            style={styles.removeButton}
                                            onPress={() => removeItem(item.id)}>
                                            <Text style={styles.removeButtonText}>Remove Item</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </TouchableOpacity>
                        </View>
                    )}
                />
                <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.addButtonText}>Add Item</Text>
                </TouchableOpacity>

                <Modal
                    visible={isModalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Add New Item</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Title"
                                placeholderTextColor="#888"
                                value={newItem.title}
                                onChangeText={(text) => setNewItem({ ...newItem, title: text })}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Description"
                                placeholderTextColor="#888"                                value={newItem.description}
                                onChangeText={(text) => setNewItem({ ...newItem, description: text })}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Image URL"
                                placeholderTextColor="#888"                                value={newItem.image}
                                onChangeText={(text) => setNewItem({ ...newItem, image: text })}
                            />
                            <TouchableOpacity style={styles.modalButton} onPress={addItem}>
                                <Text style={styles.modalButtonText}>Add Item</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                                <Text style={styles.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#eee',
        marginVertical: 5,
        justifyContent:"space-evenly"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        flexDirection: "column",
        textAlign: "center"
    },
    title: {
        fontSize: 15,
        color: "black",
        fontWeight: 'bold',
    },
    description: {
        fontSize: 15,
        color: "black",
        color: '#888',
    },
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    splashImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    splashText: {
        marginTop: 10,
        fontSize: 18,
    },
    addButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        margin: 20,
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    listItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 5,
    },
    removeButton: {
        backgroundColor: '#FF5733',
        padding: 5,
        borderRadius: 3,
        marginLeft:10
    },
    detailButton: {
        backgroundColor: "gray",
        padding: 5,
        borderRadius: 3,
        marginTop: 15,
    },
    detailButtonText: {
        color: '#fff',
        textAlign: "center"
    },
    removeButtonText: {
        color: '#fff',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    modalButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 5,
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Home;