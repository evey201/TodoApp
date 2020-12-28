/* eslint-disable prettier/prettier */
import React  from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';


 const TodoItem = ({ item, pressHandler }) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style= {styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
};

export default TodoItem;


const styles = StyleSheet.create({
    item: {
        padding: 16,
        borderColor: '#bbb',
        marginTop: 16,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})