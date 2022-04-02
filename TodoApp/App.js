import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';

const initialTodos = [
  { 
    id: 1,
    text: '작업환경 설정',
    done: true
  },
  { 
    id: 2,
    text: 'react native 공부',
    done: false
  },
  { 
    id: 3,
    text: 'todoList 생성',
    done: false
  },
]


const App = () => {
  const today = new Date();

  const [todos, setTodos] = useState(initialTodos);

  const onInsert = text => {
    const nextId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

    const newTodo = {
      id: nextId,
      text,
      done: false
    }

    setTodos(todos.concat(newTodo))
  }

  const onToggle = id => {
    const updatedTodos = todos.map(todo => todo.id === id ? 
      { ...todo, done: !todo.done } 
      : todo
    );

    setTodos(updatedTodos);
  }

  const onRemove = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);

    setTodos(updatedTodos);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={[ 'bottom' ]} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: 'padding', android: undefined })}
          style={styles.avoid}
        >
          <DateHead date={today}/>
          {todos.length === 0 ? 
            <Empty/> : 
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}
          />}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  avoid: {
    flex: 1,
  }
});

export default App;