import React, { Component } from 'react';
import { Image, 
        View, 
        ScrollView,
        StyleSheet,
        AsyncStorage,
        FlatList
      } from 'react-native';
import { Container, 
        Header, 
        Content, 
        Footer, 
        Left,
        Right,
        FooterTab, 
        Button, 
        Icon, 
        Text, 
        Badge,
        Item,
        Input,
        DatePicker,
        ListItem,
        Body,
        Spinner
       } from 'native-base';
 import { CheckBox } from 'react-native-elements'
import Axios from 'axios';

       
export default class ListBookingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenDate: new Date(),
      isLoading : true,
      mybooking : undefined,
   };
    
    AsyncStorage.getItem('token')
    .then(res => {
      this.getmybooking(res)
    })
    .catch(err => alert(err))

    

    this.setDate = this.setDate.bind(this);
    this.backToHomePage = this.backToHomePage.bind(this)
  }


  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  static navigationOptions = {
    header: null
  }


  backToHomePage() {
    const { navigate } = this.props.navigation;
    navigate('explore');
  }

// get booking list

  getmybooking(res){
    Axios.get("https://mamikos.herokuapp.com/api/v1/mybooking",{
      
      headers : {
        "Authorization" : `Bearer ${res}`
      }
    }).then(result => {
      this.setState({
        mybooking : result.data,
        isLoading : false

      })
    }).catch(err => {
      alert(err)
    })
  }

  render() {

    
    
    if(this.state.isLoading == false){

      
      return (
        <Container>
          {/* HEADER */}
          <Header searchBar rounded style={{backgroundColor: '#0baa56', elevation: 0, borderBottomWidth: 0}} androidStatusBarColor="#0baa56">
            <Left style={{marginLeft: -10}}>
              <Button style={{backgroundColor: '#0baa56', elevation: 0}} onPress={() => this.backToHomePage()}>
              <Icon style={{color: 'white'}} name="arrow-back" />
              </Button>
            </Left>
            <Item style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#0baa56'}}>
              <Text style={{color: 'white', fontFamily: 'Lato-Semibold', marginLeft: -100, fontSize: 18}}>Booking</Text>
            </Item>
          </Header>
          <View style={{backgroundColor: 'white', height: 1}}/>



          <Content>
          
            <ScrollView vertical>

              {/* display all list */}
              <FlatList
              data = {this.state.mybooking}
              renderItem = { ( {item} ) => (
                <View style={{backgroundColor: 'white', height: 190}}> 
                    <View elevation={10} style={{marginHorizontal: 20, backgroundColor: 'white', height: 150, marginTop: 20, borderRadius: 10, flexDirection: 'row'}}>
                    <Image source={{uri : `https://mamikos.herokuapp.com/static/${item.kostID.photos}`}} style={{width: "100%", height: '100%', resizeMode: "cover", flex: 1, borderRadius: 10}}/>
                      <View style={{backgroundColor: 'white', flex: 2.2, borderRadius: 10, flexDirection: 'column'}}>
                        <View style={{backgroundColor: 'white', flex: 1, borderRadius: 10}}>
                        <Text ellipsizeMode='tail' numberOfLines={1}  style={{fontFamily: 'Lato-Bold', marginTop: 20, marginLeft: 10, fontSize: 14}}>
                        {item.kostID.title}
                        </Text>
                        </View>
                        <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'row'}}>
                        <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column'}}>
                        <Text style={{fontFamily: 'Lato-Regular', marginTop: 7, marginLeft: 10, fontSize: 13}}>
                        Booking
                        </Text>
                        <Text style={{fontFamily: 'Lato-Regular', marginTop: 0, marginLeft: 10, fontSize: 13}}>
                        {item.datebook}
                        </Text>
                        </View>
                        <View style={{backgroundColor: 'white', flex: 1.3, flexDirection: 'column'}}>
                        <Text style={{fontFamily: 'Lato-Regular', marginTop: 7, marginLeft: 10, fontSize: 13}}>
                        Durasi Sewa
                        </Text>
                        <Text style={{fontFamily: 'Lato-Regular', marginTop: 0, marginLeft: 10, fontSize: 13}}>
                        1 bulan
                        </Text>
                        </View>
                        </View>
                        <View style={{backgroundColor: 'white', flex: 1, borderRadius: 10}}>
                        <Button style={{borderRadius: 10, height: 30, width: 160, marginRight:5, marginTop: 10, marginLeft: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: '#0baa56'}}>
              <Text style={{color: '#0baa56', fontSize: 14, fontFamily: 'Lato-Semibold', justifyContent: 'center', textAlign: 'center', alignItems: 'center'}} uppercase={false}>
                {item.status}
              </Text>
            </Button>
                        </View>
                      </View>   
                    </View>
                </View>
              )}/>
                
            </ScrollView>   
          </Content>
        </Container>
      );
    }else{

      return(
        <Container>
          <Header searchBar rounded style={{backgroundColor: '#0baa56', elevation: 0, borderBottomWidth: 0}} androidStatusBarColor="#0baa56">
            <Left style={{marginLeft: -10}}>
              <Button style={{backgroundColor: '#0baa56', elevation: 0}} onPress={() => this.backToHomePage()}>
              <Icon style={{color: 'white'}} name="arrow-back" />
              </Button>
            </Left>
            <Item style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#0baa56'}}>
              <Text style={{color: 'white', fontFamily: 'Lato-Semibold', marginLeft: -100, fontSize: 18}}>Booking</Text>
            </Item>
          </Header>
            <Content>
                 <Spinner/>
              </Content>
         </Container>
      )

    }
  }
}

const styles = StyleSheet.create({
  textsemibold: {
    fontFamily: 'Lato-Semibold'
  },

  textbold: {
    fontFamily: 'Lato-Bold'
  },
  
  textabu: {
    fontFamily: 'Lato-Regular',
    color: '#727272'
  },

  textcheckboxijo: {
    fontFamily: 'Lato-Regular',
    color: '#0baa56',
    justifyContent: 'center', 
    alignItems: 'center',
    textDecorationLine: 'underline'
  },

  textcheckbox: {
    fontFamily: 'Lato-Regular',
    justifyContent: 'center', 
    alignItems: 'center' 
  },


});

