import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const habits = [
  { id: '1', title: 'Drink Water' },
  { id: '2', title: 'Morning Exercise' },
  // Add more habits here
];

function HabitListScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  itemContainer: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemText: {
    fontSize: 18,
  },
});

export default HabitListScreen;
