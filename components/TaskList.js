// /components/TaskList.js
import React from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskList = ({ tasks, onToggleComplete }) => {
  const renderTaskItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={item.completed ? styles.taskCompleted : styles.task}>
        {item.text}
      </Text>
      <TouchableOpacity onPress={() => onToggleComplete(item.id)} style={styles.checkButton}>
        <Text>{item.completed ? '✔️' : '⬜️'}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderTaskItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  task: {
    fontSize: 18,
  },
  taskCompleted: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: '#888',
  },
  checkButton: {
    padding: 5,
  },
});

export default TaskList;
