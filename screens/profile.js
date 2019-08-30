import React , {Component} from 'react';
import {View,Text,Image, StatusBar,AsyncStorage} from 'react-native';
import {Container , Header,TouchableOpacity, Left,Thumbnail,Button,Card,CardItem,Body,Content,List,ListItem,Title,Icon, Footer, FooterTab, Fab, Form} from 'native-base';
export default class ProfilePage extends Component{

	constructor(props){
		super(props);

		this.changePage = this.changePage.bind(this)
	}
	static navigationOptions = {
    	header: null
	  }
	  
	  changePage(to){
		  const { navigate } = this.props.navigation
		  navigate(to)
	  }

	  async getToken(key){
		  token = await AsyncStorage.getItem('token')
		  alert(token)
	  }

	  async removeItemValue(key) {
		try {
	
			alert('sukses')
			await AsyncStorage.removeItem(key)
			this.props.navigation.navigate('login')
			  
		  
		  return true;
		  
		}
		catch(exception) {
		  return false;
		}
	  }

	render(){
		return(
			
			<View style={{flex:1,backgroundColor: '#f2f2f2'}} >
				<StatusBar backgroundColor="#0baa56"></StatusBar>
				<View style={{height:180,borderBottomRightRadius: 80,borderBottomLeftRadius: 80, zIndex:0,backgroundColor: '#0baa55',alignItems: 'center'}}>
					

					{/*Header & thumbnail*/}
					<View style={{ height: '50%',width: '100%',flexDirection:'row',justifyContent:'space-between'}} >
						

						{/*Thumbnail & name*/}
						
						<View>
						<View style={{flexDirection:'row',color:'white',justifyContent:'center'}}>
							<Thumbnail style={{width: 60, height: 60, marginTop: 10, marginLeft: 10}} source={require('../src/img/user.jpg')}/>
							<Text style={{marginTop:25, color: '#FFFFFF', marginLeft: 10,  fontFamily: 'Lato-Semibold', fontSize: 17}}>John Doe</Text>
						</View>
						</View>

						
						<Button hasText transparent style={{paddingRight:20, marginTop: 13}}>
							<Text style={{color:'#FFFFFF', fontFamily: 'Lato-Semibold', fontSize: 16}}>
								Edit profile
							</Text> 

						</Button>
					</View>
					

					{/* button navigation card*/}

					<Card style={{width:'95%',height: '80%', borderRadius: 10}}>
						<CardItem header>
							<Text style={{ fontFamily: 'Lato-Semibold', fontSize: 15, color: '#727272'}}>Kost saya </Text>
						</CardItem>
						<CardItem style={{height: '100%'}}>
							<Body style={{justifyContent:'center',flexDirection:'row', marginRight: -20}}>
								<Button transparent style={{flex:1,flexDirection:'column'}} onPress={() => alert('anjay mabar 1')}><Image source={require('../src/img/kontrak.png')} style={{width: 25,height: 25}}/><Text style={{textAlign:'center'}}>Kontrak</Text></Button>
								<Button transparent style={{flex:1,flexDirection:'column'}} onPress={() => alert('anjay mabar 2')}><Image source={require('../src/img/tagihan.png')} style={{width: 25,height: 25}} /><Text style={{textAlign:'center'}}>Tagihan</Text></Button>
								<Button transparent style={{flex:1,flexDirection:'column'}}><Image source={require('../src/img/komplain.png')} style={{width: 25,height: 25}} /><Text style={{textAlign:'center'}}>Komplain</Text></Button>
								<Button transparent style={{flex:1,flexDirection:'column'}}><Image source={require('../src/img/kios.png')} style={{width: 25,height: 25}} /><Text style={{textAlign:'center'}}>Kios</Text></Button>
							</Body>
						</CardItem>
					</Card>	
				</View>
					{/* end navigation card */}



			{/*  List Card */}
				<View style={{marginTop:'12%',backgroundColor: '#f2f2f2',flex:1,alignItems:'center'}}>
					<Card style={{marginTop:10,elevation:0, width:'95%'}}>
						<CardItem header button onPress={() => this.getToken()}>
							<Image source={require('../src/img/historyl.png')} resizeMode='contain' style={{width:25,height:25}}/>
							<Text style={{marginLeft:10, fontFamily: 'Lato-Regular', fontSize: 15}}> History Booking </Text>
						</CardItem>
					</Card>
					<Card style={{marginTop:10,elevation:0, width:'95%'}}>
						<CardItem header button onPress={() => alert('wow')}>
							<Image source={require('../src/img/barangjasa.png')} resizeMode='contain' style={{width:25,height:25}}/>
							<Text style={{marginLeft:10, fontFamily: 'Lato-Regular', fontSize: 15}}> Barang Dan Jasa </Text>
						</CardItem>
					</Card>
					<Card style={{marginTop:10,elevation:0, width:'95%'}}>
						<CardItem header button onPress={() => alert('wow')}>
							<Image source={require('../src/img/verifikasi.png')} resizeMode='contain' style={{width:25,height:25}}/>
							<Text style={{marginLeft:10, fontFamily: 'Lato-Regular', fontSize: 15}}> Verifikasi Akun </Text>
						</CardItem>
					</Card>

				{/* List Card Without margin*/}

				<Card style={{marginTop:20,elevation:0, width:'95%'}}>
						<CardItem header button onPress={() => alert('wow')}>
							
							<Image source={require('../src/img/pengaturanl.png')} resizeMode='contain' style={{width:25,height:25}}/>
							<Text style={{marginLeft:10, fontFamily: 'Lato-Regular', fontSize: 15}}> Pengaturan </Text>
							
						</CardItem>
						
						<CardItem header button onPress={() => alert('wow')}>
							<Image source={require('../src/img/hubungics.png')} resizeMode='contain' style={{width:25,height:25}}/>
							<Text style={{marginLeft:10, fontFamily: 'Lato-Regular', fontSize: 15}}> Hubungi CS </Text>
						</CardItem>
						<CardItem header button>
							<Image source={require('../src/img/syarat.png')} resizeMode='contain' style={{width:25,height:25}}/>
							<Text style={{marginLeft:10, fontFamily: 'Lato-Regular', fontSize: 15}}> Syarat dan Ketentuan </Text>
						</CardItem>
						<CardItem header button onPress={() => this.removeItemValue('token')}>
							<Image source={require('../src/img/syarat.png')} resizeMode='contain' style={{width:25,height:25}}/>
							<Text style={{marginLeft:10, fontFamily: 'Lato-Regular', fontSize: 15}}> Keluar </Text>
						</CardItem>
					</Card>
					
					

				</View>

				{/* FOOTER */}
				<View>
					<Footer style={{backgroundColor: 'white', borderColor: '#f2f2f2', borderWidth: 1}}>
					<FooterTab style={{backgroundColor: 'white'}}>
					<Button vertical onPress={ () => this.changePage('explore')}>
					<Icon name="md-home" style={{color: '#9E9E9E'}} />
					<Text style={{color: '#9E9E9E', fontFamily: 'Lato-Semibold', fontSize: 11}}>EXPLORE</Text>
					</Button>
					<Button vertical onPress={ () => this.changePage('searchkost')}>
					<Icon name="md-search" style={{color: '#9E9E9E'}} />
					<Text style={{color: '#9E9E9E', fontFamily: 'Lato-Semibold', fontSize: 11}}>SEARCH</Text>
					</Button>
					<Button vertical onPress={ () => this.changePage('listbooking')}>
					<Icon name="md-calendar" style={{color: '#9E9E9E'}} />
					<Text style={{color: '#9E9E9E', fontFamily: 'Lato-Semibold', fontSize: 11}}>BOOKING</Text>
					</Button>
					<Button vertical onPress={ () => this.changePage('profilePage')}>
					<Icon name="md-person" style={{color: '#0baa56'}} />
					<Text style={{color: '#0baa56', fontFamily: 'Lato-Semibold', fontSize: 11}}>PROFILE</Text>
					</Button>
					</FooterTab>
					</Footer>
				</View>

			</View>
			
		)
	}
}