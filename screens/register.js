import React, { Component } from 'react';
import {View , Image, Text,TextInput,StyleSheet,KeyboardAvoidingView,TouchableOpacity, StatusBar} from 'react-native';
import { Container, Header, Left, Body, Right, Title,Button,Form,Item,Icon,Input,Label,ScrollView} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios'
import AddAdvertisement from './add-iklan';

class RegisterPage extends Component {


  constructor(props){
    super(props)

    this.state = {
      username : '',
      password : '',
    }

    
    this.register = this.register.bind(this)
  }

  static navigationOptions = {
    header: null
  }

  // store data to database as users
  register(){

    const { username,password } = this.state
    axios.post('https://mamikos.herokuapp.com/api/v1/regis',{
      username : username,
      password : password
    }).then( (response) => {

      response.data.status == "success" ? alert('Registration successfully completed! Thank you <3') : alert('ada kesalahan saat pendafataran')
    }).catch( (error) => alert(error))

  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={{flex:1,backgroundColor: 'white'}}>
        <StatusBar backgroundColor="#119a51"/>
        
          
        <Image source={require('../src/img/register.png')} style={{width:'100%',height: 370}}/>
          <View style= {styles.container}>
            {/*Input Login*/}

          
              <Form style={styles.form}>

                <Item style={styles.item} floatingLabel>
                  <Label style={styles.labelText}>Username</Label>
                  <Input
                  onChangeText = {(e) => this.setState({username:e})} />
                </Item>
                <Item style={styles.item} floatingLabel>
                  <Label style={styles.labelText}>Password</Label>
                  <Input
                  onChangeText = {(e) => this.setState({password:e})} secureTextEntry={true} />
                </Item>
              </Form>
              

            <Button onPress={() => this.register()} style={styles.button}>
                <Text style={styles.loginText}>Register</Text>    
            </Button>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.policy2}> Do you have an account ? </Text>
            <TouchableOpacity onPress={ () => this.props.navigation.goBack()}>
              <Text style={styles.policy}>Login</Text >
             </TouchableOpacity>
            </View>
          </View>
          
        </View>
      </KeyboardAwareScrollView>
      
      
    );
  }
}


export default RegisterPage

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
      borderBottomWidth: 1
    },

    labelText : {color:'#a6a6a6'},

    button : {
      
      width: 260,
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