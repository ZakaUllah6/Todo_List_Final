import { useState } from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import { Image } from "react-native";

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
      <View>
        <Image source={require("./assets/favicon.png")} style={styles.images} />
      </View>
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
    // padding: 10,
    // paddingHorizontal: 20,
  },

  todoList: {
    padding: 10,
    borderColor: "#cccccc",
    borderWidth: 1,
    fontSize: 24,
    marginVertical: 10,
    textAlign: "center",
    borderRadius: 10,
    // paddingTop: 10,
    // paddingBottom: 10,
  },
  images: {
    width: 30, 
    height: 30, 
    resizeMode: "contain",
    marginTop:25,
    marginLeft: "40%",
    marginBottom: 8,
  },
  
});
