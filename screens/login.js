import React, { Component } from 'react';
import {View , Image, Text,TextInput,StyleSheet,TouchableOpacity,ScrollView, StatusBar,AsyncStorage} from 'react-native';
import { Container, Header, Left, Body, Right, Title,Button,Form,Item,Icon,Input,Label} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios'

// redux requirement
import {connect} from 'react-redux'
import * as getUserAction from './../redux/actions/getuser'



import RegisterPage from './register'

class LoginPage extends Component {

  constructor(props){
    super(props)
    AsyncStorage.getItem('token').then((res) => {
      if(res !== null ){
        this.props.navigation.navigate('explore')
      }
    })
    this.state = {
      username : '',
      password : '',
    }

    

    this.login = this.login.bind(this)
    
  }

  static navigationOptions = {
    header: null
  }

  

  login(){

    const {username,password} = this.state
    const {navigate} = this.props.navigation
    
    
    // send request if user exist
    axios.post("https://mamikos.herokuapp.com/api/v1/login",{
      username : username,
      password : password,

    }).then( (response) => {
      
      if(response.data.status == "success"){
        const token =  response.headers.authorization.split(' ');
        AsyncStorage.setItem('token',token[1]).then(str => alert('token save')).catch(err => alert(err))
        navigate('explore')
        

      }else{
        alert(response.data.msg)
      }

    }).catch( (error) => {
      alert(error)
    })

  }

 
 

  


  render() {
    return (
      
      <KeyboardAwareScrollView>
      <ScrollView>
        <View style={{flex:1,backgroundColor: 'white'}} >
        <StatusBar backgroundColor="#119a51"/>
        
          
          <Image source={require('../src/img/login.png')} style={{width:'100%',height: 370}}/>
          <View style= {styles.container} >
            {/*Input Login*/}

            
              <Form style={styles.form}>

                <Item style={styles.item} floatingLabel>
                  <Label style={styles.labelText}>Username</Label>
                  <Input
                  onChangeText = {(e) => this.setState({username:e})} />
                </Item>
                
                <Item style={styles.item} floatingLabel>
                <Label style={styles.labelText} >Password</Label>
                  <Input
                    onChangeText = { (e) => this.setState({password:e}) }
                    secureTextEntry={true} />
                </Item>
              </Form>
            

            <Button onPress={() => this.login()} style={styles.button}>
                <Text style={styles.loginText}>Login</Text>    
            </Button>
            <View style={{flexDirection: 'row',marginBottom: 20}}>
              <Text style={styles.policy2}> Don't have an account ? </Text>
                <TouchableOpacity onPress={ () => this.props.navigation.navigate('register')}>
                  <Text style={styles.policy}>Register</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      </KeyboardAwareScrollView>
      
      
    );
  }
}





export default LoginPage

const styles = StyleSheet.create({
  container : { 
    flex:1,
    alignItems:'center',
    backgroundColor:'white'
    },

    banner : {
      width: '100%',
      height: '45%'
    },

    form : { width: 260, marginLeft: -20 },

    item : {
      marginTop: 50,
      borderBottomColor: '#0baa56',
      borderBottomWidth: 1, 
    },

    labelText : {
      color:'#a6a6a6',
      fontFamily: 'Lato-Regular'
    },

    button : {
      width: '65%',
      flex:0.8,
      backgroundColor: '#39bd77',
      marginTop:'20%',
      borderRadius: 20,
      justifyContent:'center',
      alignItems:'center',
      elevation: 5
    },

    loginText : {
      fontFamily: 'Lato-Regular',
      color:'white',
      fontSize: 20,
      marginBottom: 8
    },

    policy : {
      fontFamily: 'Lato-Regular',
      color:'#0baa56',
      textDecorationLine:'underline',
      marginTop:20
    },

    policy2 : {
      fontFamily: 'Lato-Regular',
      color:'gray',
      marginTop:20
    }

})