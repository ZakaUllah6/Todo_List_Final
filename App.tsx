import { useState } from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todosList, setTodosList] = useState([]);

  function addTodoText(enteredTodoText) {
    if (enteredTodoText != "") {
      setTodosList([
        ...todosList,
        { text: enteredTodoText, id: Math.random().toString() },
      ]);
    }
  }

  return (
    <View style={styles.container}>
      <TodoInput onTodoAdded={addTodoText} />

      {/* <FlatList
        style={styles.todoList}
        data={todosList}
        renderItem={(todoItem) => {
          return <TodoItem text={todoItem.item.text} />;
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      /> */}
      {/* <ScrollView style={styles.todoList}>
        {todosList.map((todoItem) => (
          <TodoItem key={todoItem.id} text={todoItem.text} />
        ))}
      </ScrollView> */}
      <View style={styles.todoList}>
        {todosList.map((todoItem) => (
          <TodoItem key={todoItem.id} text={todoItem.text} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  todoList: {
    borderColor: "#cccccc",
    borderWidth: 1,
    fontSize: 24,
    marginVertical: 10,
    textAlign: "center",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
