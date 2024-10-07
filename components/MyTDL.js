// /components/MyTDL.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import TaskInput from './TaskInput';  // Import TaskInput component
import TaskList from './TaskList';    // Import TaskList component

const MyTDL = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleLogout = () => {
    // Navigate back to the Login screen
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyTDL</Text>
      
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleComplete={toggleComplete} />
      
      {/* Logout Button */}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default MyTDL;