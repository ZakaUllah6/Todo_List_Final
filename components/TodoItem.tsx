import { StyleSheet,Text,  } from "react-native";



const todoItem = (props) => {
    return ( 
        <Text style = {styles.todo}>{props.text}</Text> 

     );
}
 
export default todoItem;

const styles = StyleSheet.create({
    todo: {
        borderWidth: 1,
        borderColor: '#cccccc',
        marginVertical: 5,
        textAlign: 'center',
        backgroundColor: '#FF0079FF',
        color: 'white',
        borderRadius:1000,
        fontSize: 24,
        // flexDirection: 'row-reverse',
      },
})