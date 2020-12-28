/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,

} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';


export default function App() {

  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'Drink some coffee', key: '3'},
    {text: 'Bundle the app', key: '4'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos( (prevTodos) => {
      return [
        { text: text, key: Math.random().toString()},
        ...prevTodos
      ];
    })
  }

  return (
    <View style={styles.container} >
      {/* header */}
      <Header />
      <View style={styles.content}>
            {/* Todo Form */}
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
                <FlatList 
                  data={todos}
                  renderItem={({ item }) => (
                    <TodoItem item={ item } pressHandler={ pressHandler } />
                  )}
                />
            </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});


