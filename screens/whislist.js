import React, { Component } from 'react';
import {View,Image,TouchableHighlight} from 'react-native'
import { Container, Header, Content, Tab, Tabs, Text, Left, Title, Body, Button} from 'native-base';


class FavoritTab extends Component {
	render(){
		return(
			<View style= {{flex:1,alignItems:'center', backgroundColor:'#F4F4F4' }}>
				<Image source={require('./pintu.png')} style={{width: '40%',height: '40%', marginTop:'10%',resizeMode: 'contain'}}/>
				<Text style={{textAlign:'center'}}>Kamu belum login nih, yuk login untuk menikmati fitur mamikos lebih banyak </Text>

				<Button onPress={() => alert('hello')} style={{width: '90%',height:60,backgroundColor: '#ff8000',marginTop:20}}>
					<View style={{ flex:1, justifyContent:'center',alignItems:'center'}}>
					
						<Text style={{color:'white'}}>Login</Text>
					
					</View>
				</Button>

			<Text style={{color:'gray',textDecorationLine:'underline', marginTop:20}}> Syarat dan Ketentuan </Text>
			</View>				
		)
	}
}

class DilihatTab extends Component {
	render(){
		return(
			<View style= {{flex:1,alignItems:'center', backgroundColor:'#F4F4F4' }}>
				<Image source={require('./src/dilihat-kosong.png')} style={{width:'30%',height: '40%',resizeMode:'contain'}}/>
				<Text style={{fontWeight:'bold', marginTop:0}}> Belum ada riwayat properti terbaru </Text>
				<Text style={{color:'gray', marginTop:5}}>Riwayat Properti yang pernah Anda lihat ada dihalaman ini </Text>

				<View style={{marginTop:40}}>
					<Button success>
					 	<Text>Cari Kost</Text> 
					 </Button>
				</View>
				

			</View>
		)
	}
}

export default class WhislistScreen extends Component {
  render() {
    return (
      <Container>
        <Header style = {{backgroundColor: 'white', paddingBottom: 4, elevation: 0,border:0}}>
        	<Body>
        		<Left />
        		<Title style = {{color: '#000000'}}> Wishlist </Title>
        	</Body>, 
        </Header>


        <Tabs>
          <Tab heading="Tab1" tabStyle={{backgroundColor: 'white'}}>
          	<FavoritTab />
          </Tab>
          <Tab heading="Tab2">
          	<DilihatTab /> 
          </Tab>
          
        </Tabs>
      </Container>
      
    );
  }
}