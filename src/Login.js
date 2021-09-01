import React, { Component } from 'react';
import {
  Platform,StyleSheet,Text,View,TextInput,TouchableOpacity
} from 'react-native';

export default  class Login extends Component<Props>{
 constructor(props){
   super(props);
   this.state={
     name:'',
     password:'',
   }
 }

  myfun=()=>{
    const {name,password} = this.state;
    alert(name);
    alert(password);
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          Login
        </Text>

        <TextInput placeholder="Enter Name"
        style={styles.textbox}
        keyboardType='default'
        returnKeyType="go"
        autoCapitalize='none'
        maxLength={10}
        onChangeText={
          name => this.setState({name})
        }></TextInput>

        <TextInput placeholder="Enter Password"
        style={styles.textbox}
        returnKeyType="next"
        autoCapitalize='none'
        secureTextEntry={true}
        keyboardType='default'
        maxLength={8}
        onChangeText={
          password => this.setState({password})
        }></TextInput>

        <TouchableOpacity style={styles.btn} onPress={this.myfun}>
        <Text style={styles.txt}>Login</Text>
        </TouchableOpacity>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    backgroundColor: 'lavender',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textbox:{
    borderWidth:1,
    borderColor:'#ccc',
    width:250,
    padding:10, margin:5
  },
  txt:{
    textAlign:'center',color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  btn:{
    backgroundColor:'blue',width:250,
    padding:10,
    margin:10
  }

});