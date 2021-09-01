import React, {useEffect} from 'react';
import {Text , View, TextInput,TouchableOpacity} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { bold } from 'chalk';



function App() {
    useEffect(() => {
     messaging().onMessage(async remoteMessage => {
        console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      });
      messaging().onNotificationOpenedApp(remoteMessage=> {
        console.log('onNotificationOpenedApp:', JSON.stringify(remoteMessage));
        
      });
  
      messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            JSON.stringify(remoteMessage),
          );
          
        }
    
      });
  }, []);
  
  return(
    <View style={{flex:1, alignItems:'center',justifyContent:'center', marginBottom:130}}>
      <Text style={{fontSize:20}}>Login</Text>
     
      <TextInput style={{borderWidth:2,borderColor:'#ccc',width:250,padding:10, margin:5}} placeholder="Enter Name"
        
        keyboardType='default'
        returnKeyType="go"
        autoCapitalize='none'
        maxLength={10}></TextInput>

<TextInput style={{borderWidth:2,borderColor:'#ccc',width:250,padding:10, margin:5}} placeholder="Enter Password"
        returnKeyType="next"
        autoCapitalize='none'
        secureTextEntry={true}
        keyboardType='default'
        maxLength={8}
       
        ></TextInput>

<TouchableOpacity >
        <Text style={{backgroundColor:'blue',width:250,height:40,alignItems:'center',justifyContent:'center',margin:20,color:'white',
      textAlign:'center'}}>Login</Text>
        </TouchableOpacity>   

    </View>
  );
  }
  export default App;