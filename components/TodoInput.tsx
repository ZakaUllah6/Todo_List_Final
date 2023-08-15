import { StyleSheet } from "react-native";
import { useState } from "react";
import { TextInput, View,Button } from "react-native";

const TodoInput  = (props) => {
    const [enteredTodoText, setEnteredTodoText] = useState('');

    function enterTodoText(enteredText: string){
        setEnteredTodoText(enteredText);
      }
      function onPress(){
        props.onTodoAdded(enteredTodoText);
        setEnteredTodoText('');

      }
    return ( 
        <View style={styles.flexForTodo}>
        <TextInput style = {styles.textInput} onChangeText={enterTodoText} value= {enteredTodoText} placeholder='Write Your Todos Here '/>
        <Button title='TODO' color={'#FF0079FF'}  onPress={onPress}/>
      </View>
     );
}
 
export default TodoInput;

const styles = StyleSheet.create ({
    flexForTodo: {
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        paddingBottom: 20,
        marginBottom: 20,
        paddingRight: 10,
       
      },
      textInput: {
        borderColor: '#cccccc',
        width: "80%",
        borderWidth:1,
        marginRight: 20,
        borderRadius: 200,
        fontSize: 20,
        paddingLeft: 15,
      },
})