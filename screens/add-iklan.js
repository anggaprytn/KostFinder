import React, { Component } from 'react';
// import MapView from 'react-native-maps';
import { Container,
	Header,
	Left,
	Body,
	Right,
	Button,
	Icon,
	Title,
	Text,
	Content,
	Form,
	Item,
	Input,
	Label,
	Textarea,
	Picker,
	Radio,
	ListItem,
	Footer,
	FooterTab,
	CheckBox,
   } from 'native-base';

import {View,TouchableOpacity,ScrollView,StyleSheet,Image,TextInput,AsyncStorage} from 'react-native';
import ImagePicker from "react-native-image-picker";
import Map from './map';
import axios from 'axios';

const options = {
	title: "Select a photo",
	takePhotoButtonTitle: "Take a photo",
	chooseFromLibraryButtonTitle: "Choose from gallery",

	storageOptions: {
		skipBackup: true,
		path: 'images',
	  },
};


export default class AddAdvertisementPage extends Component {

	constructor(props){
		super(props)
		AsyncStorage.getItem('token')
		.then( res => {
			this.setState({
				token : res
			})
		}).catch(err => alert('app error please restart the app'))

		this.state = {
			title : null,
			price : null,
			description : null,
			location : null,
			city : null,
			photos : null,
			contact : null,
			availablerooms : null,
			seller : null,
			gender : null,
			large: null,
			facility : null,
			create_by: 9,
			itemOne: false,
			itemTwo: false,
			itemThree: false, 
			itemFour: false,
			selected2: undefined,
			avatarSource: null,
			latitude : '0',
			longitude : '0',
			token : '',
			fulladdress : null

			
		}

		this.uploadimg = this.uploadimg.bind(this)
		this.handleMapMarker = this.handleMapMarker.bind(this)
		this.getFullAddress = this.getFullAddress.bind(this)
  
	}

	getFullAddress (a,b){
		this.setState({
			fulladdress : a,
			city : b
		})
	}

	handleMapMarker(a,b){
		this.setState({
			latitude : a,
			longitude : b,
		})
	}


	uploadimg(){
		const body = new FormData();
		body.append('myimg', {
			uri : this.state.imginfo.uri,
			type : 'image/png',
			name : `${Date.now()}${this.state.imginfo.fileName}`
		})
		body.append('title',this.state.title)
		body.append('price', this.state.price)
		body.append('description', this.state.description)
		body.append('location',`${this.state.latitude}|${this.state.longitude}`)
		body.append('city',this.state.city)
		body.append('photos',`${Date.now()}${this.state.imginfo.fileName}`)
		body.append('seller',this.state.seller)
		body.append('contact',this.state.contact)
		body.append('gender',this.state.gender)
		body.append('availablerooms',this.state.availablerooms)
		body.append('large',this.state.large)
		body.append('facility',`${this.state.itemOne},${this.state.itemTwo},${this.state.itemThree},${this.state.itemFour}`)

		console.log(`file name is : ${Date.now()}${this.state.imginfo.fileName}`)
		const config = { headers: { 'Content-Type': 'multipart/form-data',"Authorization" : `Bearer ${this.state.token}` } };


	
 
		axios.post("https://mamikos.herokuapp.com/api/v1/uploadimg",body,config).then(response => {
			
			// if you need a complete output for debug
			console.log({"respon data":response.data});
			// console.log("respon status : "+response.status);
			// console.log("respon status text : "+response.statusText);
			// console.log({"respon headers":response.headers});
			// console.log({"root respon":+response});
			
			alert(response.data.status)
			this.props.navigation.navigate('searchkost')
		}).catch(function (error) {
			if (error.response) {
			  
			
			//   console.log({"ini error respon " : error.response.data});
			//   console.log({"ini error respon status " : error.response.status});
			//   console.log({"ini error respon headers" : error.response.headers});
			} else if (error.request) {
			  // The request was made but no response was received
			  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			  // http.ClientRequest in node.js
			  console.log({"ini error request" :error.request});
			} else {
			  // Something happened in setting up the request that triggered an Error
			  console.log({'Error ' : error.message});
			}
			console.log({"ini error config " : error.config});
		  });

		
	}
	
	handleChoosePhoto = () => {
		
		// alert('clicked');
		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);
		  
			if (response.didCancel) {
			  console.log('User cancelled image picker');
			} else if (response.error) {
			  console.log('ImagePicker Error: ', response.error);
			} else {
			  const source = { uri: response.uri };
		  
			  // You can also display the image using data:
			  // const source = { uri: 'data:image/jpeg;base64,' + response.data };
		  
			  this.setState({
				avatarSource: source,
				imginfo : response,
				data : {
					photos :source
				}
			  });
			}
		  });
	}

	static navigationOptions = {
    header: null
  }


	

	onValueChange2(value: string) {
		this.setState({
		  gender: value
		});
	  }

	previousPage(){
		const { goBack } = this.props.navigation
		goBack()
	}
	
	



    render() {
    return (
		
      <Container>
        <Header style={styles.header}  androidStatusBarColor="#0baa56">
          <Left>
            <Button transparent onPress={ () => this.previousPage()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Item>
            <Text style={{fontSize: 20, fontFamily: 'Lato-Semibold', color: 'white'}} numberOfLines={1}>Tambah Data Iklan</Text>
			</Item>
          <Right>
            <Button  onPress={() => alert('coming soon')} style={{borderRadius: 10, height: 40, marginRight:5 , backgroundColor: '#0baa56', justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: 'white'}}>
              <Text  style={{fontSize: 15, fontFamily: 'Lato-Semibold', color: 'white'}} numberOfLines={1} uppercase={false}>Tanya CS</Text>
            </Button>
          </Right>
        </Header>
		<ScrollView showsVerticalScrollIndicator={false}>
        <Content style={styles.content}>
        	

		{/*Form Barang Dan Jasa*/}
				<View style={{marginLeft: 0}}>
	        		
					<Form style={styles.form}>
					<View style={{marginLeft: 15}}>
					<Label style={styles.label}>Judul Iklan</Label>
					</View>
	        		<Item  style={{borderBottomColor: '#0baa56'}}>
	        			<TextInput  style={{marginLeft: -5}} placeholderTextColor="#bcbcbc" placeholder="Masukan judul iklan kost"
						onChangeText={(e) => {
							this.setState({
								title : e
							})
						}}
						value={this.state.kostname}/>
	        		</Item>
					<View style={{marginLeft: 15}}>
	        		<Label style={styles.label}>Harga Kost Perbulan</Label>
					</View>
	        		<Item style={{borderBottomColor: '#0baa56'}}>
	        			<Input style={{marginLeft: -5}} placeholderTextColor="#bcbcbc"  placeholder="Masukan harga kost, misalnya: 80000" keyboardType={'numeric'}
						onChangeText={(e) => {
							this.setState({
								price : e
							})
						}}/>
	        		</Item>
						<View style={{marginLeft: 10}}>
	        			<Label style={styles.label}>Deskripsi Kost</Label>
						</View>
	        			<Textarea  rowSpan={3.5} placeholderTextColor="#bcbcbc"  placeholder="Masukan Deskripsi Kost, misalnya: Kost sudah termasuk kasur, dekat dengan Bootcamp Arkademy, listrik ditanggung lucinta " style={styles.textarea}
						onChangeText={(e) => {
							this.setState({
								description : e
							})
						}}/>


		       		<Label style={{marginTop: 20, fontFamily: 'Lato-Semibold', fontSize: 20, marginLeft: 10}}>Lokasi Kost</Label>
		       		<Item style={{borderBottomColor: '#0baa56'}}>
		       			<Icon name='ios-search'/>
		    			<Input style={{ fontFamily: 'Lato-Semibold', fontSize: 16}} placeholderTextColor="#bcbcbc" placeholder="Search"
						value={this.state.fulladdress}/>
		       		</Item>
		       	</Form>

		       	<View style={styles.map} >
		       		<Map sendData={this.handleMapMarker} getlocation={this.getFullAddress} Mode={'getdata'}/>
		       	</View>

				{/* LONG LAT */}
				<View style={{backgroundColor: 'transparent', height: 55, flexDirection: 'row'}}>
					<View style={{flex: 1, backgroundColor: 'transparent', marginTop: 5}}>
						<Item style={styles.item} floatingLabel>
						<Label style={styles.labelText}>Masukan Latitude...</Label>
						<Input value={this.state.latitude}/>
						</Item>
					</View>
					<View style={{flex: 1, backgroundColor: 'transparent', marginTop: 5}}>
						<Item style={styles.item} floatingLabel>
						<Label style={styles.labelText}>Masukan Longitude...	</Label>
						<Input value={this.state.longitude}/>
						</Item>
					</View>
				</View>

		       {/*Form detail penjual*/}
		       <Form style={styles.form}>
			       <View style={{marginLeft: 10}}>
		       		<Label style={styles.label}>Tuliskan alamat lengkap penjual</Label>
					</View>
		       		<Item style={{borderBottomColor: '#0baa56'}}>
		       			<Input rowSpan={4} style={{marginLeft: -10}} placeholderTextColor="#bcbcbc" placeholder="Masukan alamat misalnya: jalan, kecamatan" 
						onChangeText={(e) => {
							this.setState({
								location : e
							})
						}}/>
		       		</Item>

					
					<View style={{marginLeft: 10}}>

					{/* MASUKAN FOTO */}	
					
					<View>
		       		<Label style={styles.label}>Masukkan Foto</Label>
					  
					   
					   
					   
		       			{ this.state.avatarSource === null ? <TouchableOpacity tittle={"Choose Photo"} onPress={this.handleChoosePhoto} style={{width: 100,height: 100, flexDirection: 'row'}}>
					   	<Image source={require('../src/icon/addimage.png')} style={{width: 138,height:110,resizeMode: 'contain',marginTop: 10, marginBottom: 20}}/></TouchableOpacity>  :
						<TouchableOpacity onPress={this.handleChoosePhoto}>
              				<Image style={{width: 138,height:110,resizeMode: 'contain',marginTop: 10, marginBottom: 20, marginLeft: 20}} source={this.state.avatarSource} />
						</TouchableOpacity>
            }
					</View>
					   
		       		  

					{/* JUMLAH KAMAR */}
					<Label style={{fontFamily: 'Lato-Semibold', fontSize: 19, marginTop: 40}}>
						Jumlah Kamar
					</Label>
		       		<Item style={{ marginLeft: -5, borderBottomColor: '#0baa56'}}>
		       			<Input  placeholderTextColor="#bcbcbc" placeholder='Masukan jumlah kamar' keyboardType={'numeric'}
						onChangeText={(e) => {
							this.setState({
								availablerooms : e
							})
							}}/>
		       		</Item>

					{/* LUAS KAMAR */}
					<Label style={{fontFamily: 'Lato-Semibold', fontSize: 19, marginTop: 25}}>
						Luas Kamar
					</Label>
					<View style={{backgroundColor: 'transparent', height: 55, flexDirection: 'row', marginLeft: -15}}>
						<View style={{flex: 1, backgroundColor: 'transparent', marginTop: -15}}>
							<Item style={styles.item} floatingLabel >
							<Label numberOfLines={1} style={styles.labelText}>Masukan Luas...</Label>
							<Input keyboardType={'numeric'}
							onChangeText={(e) => {
								this.setState({
									large : e
								})
							}}/>
							</Item>
						</View>
						<Text style={{marginTop: 30, fontFamily: 'Lato-Semibold', marginHorizontal: 10}}>X</Text>
						<View style={{flex: 1, backgroundColor: 'transparent', marginTop: -15, marginLeft: -10}}>
							<Item style={styles.item} floatingLabel>
							<Label numberOfLines={1} style={styles.labelText}>Masukan Lebar...</Label>
							<Input keyboardType={'numeric'}
							onChangeText={(e) => {
								this.setState({
									large : this.state.large + "x" + e
								})
							}}/>
							</Item>
						</View>
					</View>

					{/* GENDER KOST */}
					<Label style={{fontFamily: 'Lato-Semibold', fontSize: 19, marginTop: 25}}>Gender Kost</Label>
					<Picker
						mode="dropdown"
						iosIcon={<Icon name="arrow-down" />}
						style={{ width: undefined }}
						placeholder="Select your SIM"
						placeholderStyle={{ color: "#bfc6ea" }}
						placeholderIconColor="#007aff"
						selectedValue={this.state.selected2}
						onValueChange={this.onValueChange2.bind(this)}
					>
						<Picker.Item label="Campur" value="Campur" />
						<Picker.Item label="Putra" value="Putra" />
						<Picker.Item label="Putri" value="Putri" />
					</Picker>

					
					{/* FASILITAS KOST */}
					<Label style={{fontFamily: 'Lato-Semibold', fontSize: 19, marginTop: 20}}>
						Fasilitas Kost
					</Label>
					<View style={{marginLeft: -15}}>
					<ListItem style={{ borderBottomColor: '#0baa56' }} onPress={() => this.setState({ itemOne: !this.state.itemOne })} >
              <CheckBox color={'#0baa56'} style={{borderRadius: 5}} checked={this.state.itemOne} onPress={() => {
				  this.setState({ itemOne: !this.state.itemOne,
				facility : this.state.facility + '-kasur' })
			  }} />
              <Body>
                <Text>Kasur</Text>
              </Body>
            </ListItem>
            <ListItem style={{ borderBottomColor: '#0baa56' }} onPress={() => this.setState({ itemTwo: !this.state.itemTwo })} >
              <CheckBox color={'#0baa56'} style={{borderRadius: 5}} checked={this.state.itemTwo} onPress={() => {
				  this.setState({ itemTwo: !this.state.itemTwo,
				facility : this.state.facility + '-wifi' })
			  }} />
              <Body>
                <Text>Wifi - Internet</Text>
              </Body>
            </ListItem>
            <ListItem style={{ borderBottomColor: '#0baa56' }}   onPress={() => this.setState({ itemThree: !this.state.itemThree })}>
              <CheckBox color={'#0baa56'} style={{borderRadius: 5}} checked={this.state.itemThree} onPress={() => this.setState({ itemThree: !this.state.itemThree })} />
              <Body>
                <Text>Akses kunci 24 Jam</Text>
              </Body>
            </ListItem>
            <ListItem style={{ borderBottomColor: '#0baa56' }} onPress={() => this.setState({ itemFour: !this.state.itemFour })}>
              <CheckBox color={'#0baa56'} style={{borderRadius: 5}} checked={this.state.itemFour} onPress={() => this.setState({ itemFour: !this.state.itemFour })} />
              <Body>
                <Text>Kamar mandi dalam</Text>
              </Body>
            </ListItem>
      </View>


						{/* NAMA LENGKAP */}
					   <Label style={{fontFamily: 'Lato-Semibold', fontSize: 19, marginTop: 25}}>Nama Lengkap</Label>
		       		<Item style={{ marginLeft: -5, borderBottomColor: '#0baa56'}}>
		       			<Input  placeholderTextColor="#bcbcbc" placeholder='Masukan nama lengkap atau sapaan anda'
						onChangeText={(e) => {
							this.setState({
								seller : e
							})
						}}/>
		       		</Item>

					   {/* NOMOR TELEPON */}
					   <Label style={{fontFamily: 'Lato-Semibold', fontSize: 19, marginTop: 25}}>Nomor Telepon</Label>
		       		<Item style={{ marginLeft: -5, borderBottomColor: '#0baa56'}}>
		       			<Input  placeholderTextColor="#bcbcbc" placeholder='Masukan nomor telepon yg bisa dihubungi' keyboardType={'numeric'}
						onChangeText={(e) => {
							this.setState({
								contact : e
							})
						}}/>
		       		</Item>
					</View>
		       		


		       </Form>

			   {/* KAKI */}
			   <View style={{justifyContent: 'center', alignItems: 'center'}}>
			   <Button
				onPress={() => this.uploadimg()}  
			   style={{marginTop: 50, marginBottom: 50, justifyContent: 'center', alignItems: 'center', width: 300, backgroundColor: '#0baa56', borderRadius: 10}}><Text>Submit</Text></Button>
			   </View>


			   </View>

		  
        </Content>
		</ScrollView>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
	header:{
		backgroundColor: '#0baa56'
	},
	content:{
		marginHorizontal:20
	},
	form : {
		marginLeft: -10,
		width:'100%',
		justifyContent:'center'
	},
	textarea : {
		width: "100%",
		borderBottomWidth: 1,
		borderBottomColor: '#0baa56',
		fontFamily: 'Lato-Semibold',
		fontSize: 16,
		marginLeft: 0
	},

	
	radiocontainer : {
		height:40,
		justifyContent:'space-between',
		flexDirection:'row'
	},

	RowContainer: {
		flex:1,
		flexDirection:'row'
	},

	map : {
		height: 200,
		width: '100%',
		marginTop:20,
		elevation: 1
	},

	labelText : {
		color:'#a6a6a6',
		fontFamily: 'Lato-Regular'
	  },

	  item : {
		borderBottomColor: '#0baa56',
		borderBottomWidth: 1, 
	  },
	
	label:{
		marginTop: 20,
		fontFamily: 'Lato-Semibold',
		fontSize: 19,
		marginLeft: 0,


	}
})