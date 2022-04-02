import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
      <FlatList
        data={todos}
        style={styles.list}
		keyExtractor={item => item.id.toString()}
		renderItem={({ item }) => (
			<TodoItem 
				id={item.id}
				text={item.text}
				done={item.done}
				onToggle={onToggle}
				onRemove={onRemove}
			/>
		)}
		ItemSeparatorComponent={() => 
			<View style={styles.separator}/>
		}
      />
  );
};

const styles = StyleSheet.create({
	list: {
		flex: 1,
	},
	separator: {
		backgroundColor: '#e0e0e0',
		height: 1
	}
})

export default TodoList;