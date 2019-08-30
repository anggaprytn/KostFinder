import React , {Component} from 'react';
import {View,Text,Image} from 'react-native';
import {Container , Header,TouchableOpacity, Left,Thumbnail,Button,Card,CardItem,Body,Content,List,ListItem,Title,Icon} from 'native-base';
import MapView from 'react-native-maps';
export default class Home extends Component{
	render(){
		return(

			<View style={{flex:1,backgroundColor: '#f2f2f2'}}>

				<View style={{height:180,borderBottomRightRadius: 80,borderBottomLeftRadius: 80, zIndex:0,backgroundColor: '#0baa55',alignItems: 'center'}}>
					

					{/*Header & thumbnail*/}
					<View style={{ height: '50%',width: '100%',flexDirection:'row',justifyContent:'space-between'}}>
						

						{/*Thumbnail & name*/}
						<View style={{flexDirection:'row',color:'white',justifyContent:'center'}}>
							{/*<Thumbnail source={require('./user.png')}/>*/}
							<Text style={{marginTop:20, color: '#FFFFFF',fontweight:'bold'}}> niki ganteng </Text>
						</View>

						<Button hasText transparent style={{paddingRight:20}}>
							<Text style={{color:'#FFFFFF'}}>
								Edit profile
							</Text> 

						</Button>
					</View>

					{/* button navigation card*/}

					<Card style={{width:'95%',height: '80%'}}>
						<CardItem header>
							<Text>Kost saya </Text>
						</CardItem>
						<CardItem style={{height: '100%'}}>
							<Body style={{justifyContent:'center',flexDirection:'row'}}>
								<Button transparent style={{flex:1,flexDirection:'column'}} onPress={() => alert('anjay mabar 1')}><Image source={require('./kontrak.png')} style={{width: 25,height: 25}}/><Text style={{textAlign:'center'}}>Kontrak</Text></Button>
								<Button transparent style={{flex:1,flexDirection:'column'}} onPress={() => alert('anjay mabar 2')}><Image source={require('./tagihan.png')} style={{width: 25,height: 25}} /><Text style={{textAlign:'center'}}>tagihan</Text></Button>
								<Button transparent style={{flex:1,flexDirection:'column'}}><Image source={require('./komplain.png')} style={{width: 25,height: 25}} /><Text style={{textAlign:'center'}}>Komplain & Perbaikan</Text></Button>
								<Button transparent style={{flex:1,flexDirection:'column'}}><Image source={require('./kios.png')} style={{width: 25,height: 25}} /><Text style={{textAlign:'center'}}>Kios</Text></Button>

							</Body>
						</CardItem>
					</Card>	
				</View>
					{/* end navigation card */}



			{/*  List Card */}
				<View style={{marginTop:'12%',backgroundColor: '#f2f2f2',flex:1,alignItems:'center'}}>
					<Card style={{marginTop:10,elevation:0, width:'95%'}}>
						<CardItem header button onPress={() => alert('wow')}>
							<Image source={require('./historyl.png')} resizeMode='contain' style={{width:25,height:25}}/>
							<Text style={{marginLeft:10}}> History Booking </Text>
						</CardItem>
					</Card>
					<Card style={{marginTop:10,elevation:0, width:'95%'}}>
						<CardItem header button onPress={() => alert('wow')}>
							<Image source={require('./barangjasa.png')} resizeMode='contain' style={{width:25,height:25}}/>
							<Text style={{marginLeft:10}}> Barang Dan Jasa </Text>
						</CardItem>
					</Card>
					<Card style={{marginTop:10,elevation:0, width:'95%'}}>
						<CardItem header button onPress={() => alert('wow')}>
							<Image source={require('./verifikasi.png')} resizeMode='contain' style={{width:25,height:25}}/>
							<Text style={{marginLeft:10}}> Verifikasi Akun </Text>
						</CardItem>
					</Card>

				{/* List Card Without margin*/}

				<Card style={{marginTop:20,elevation:0, width:'95%'}}>
						<CardItem header button onPress={() => alert('wow')}>
							
							<Image source={require('./pengaturanl.png')} resizeMode='contain' style={{width:25,height:25}}/>
							<Text style={{marginLeft:10}}> Pengaturan </Text>
							
						</CardItem>
						
						<CardItem header button onPress={() => alert('wow')}>
							<Image source={require('./hubungics.png')} resizeMode='contain' style={{width:25,height:25}}/>
							<Text style={{marginLeft:10}}> Hubungi CS </Text>
						</CardItem>
						<CardItem header button onPress={() => alert('wow')}>
							<Image source={require('./syarat.png')} resizeMode='contain' style={{width:25,height:25}}/>
							<Text style={{marginLeft:10}}> Syarat dan Ketentuan </Text>
						</CardItem>
					</Card>
					
					

				</View>


			</View>
		)
	}
}