import React, { Component } from "react";
import { Image, View, ScrollView, StyleSheet,AsyncStorage } from "react-native";
import {
  Container,
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
} from "native-base";
import { CheckBox } from "react-native-elements";
import Axios from "axios";

export default class BookingPage extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      chosenDate: new Date(),
      userID : undefined,
      isReady : false
   };

    AsyncStorage.getItem('token').then( (res) => {
      this.setState({
        token : res,
        isReady : true
      })
    })
    
    this.setDate = this.setDate.bind(this);
    this.booking = this.booking.bind(this);
    this.previousPage = this.previousPage.bind(this)
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  static navigationOptions = {
    header: null
  };



  booking(data,date) {
      const { navigate } = this.props.navigation; 
      this.setState({ isReady : false });
      Axios.post("https://mamikos.herokuapp.com/api/v1/booking",{
        kost_id : data.id,
        datebook: date,
        status : 'Tunggu konfirmasi'
      }, 
        {
          headers : {
            "Authorization" : `Bearer ${this.state.token}`
          }
        }
      ).then( (result) => {
        
        if(result.data.status == 'success'){
          alert('bokingan anda telah di tambahkan')
          
          navigate('listbooking')
          
        }else{
          console.log(result.data)
        }

      }).catch(err => alert(err.status))
  };

   previousPage() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  render() {

    // get data from previous page
    const { params } = this.props.navigation.state
    const { id,title,city,photos,price} = params

    if(this.state.isReady == true){
      return (
        <Container>
          {/* HEADER */}
          <Header
            searchBar
            rounded
            style={{
              backgroundColor: "#0baa56",
              elevation: 0,
              borderBottomWidth: 0
            }}
            androidStatusBarColor="#0baa56"
          >
            <Left style={{ marginLeft: -10 }}>
              <Button style={{ backgroundColor: "#0baa56", elevation: 0 }} onPress={() => this.previousPage()}>
                <Icon style={{ color: "white" }} name="arrow-back" />
              </Button>
            </Left>
            <Item
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0baa56"
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "Lato-Semibold",
                  marginLeft: -100,
                  fontSize: 18
                }}
              >
                Booking
              </Text>
            </Item>
          </Header>
          <View style={{ backgroundColor: "white", height: 1 }}></View>
          <ScrollView vertical showsVerticalScrollIndicator={false}>
          <Content style={{ marginHorizontal: 20 }}>
           
  
              {/* LOOP TANGGAL */}
              <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
  
              {/* PILIH TANGGAL */}
              <View style={{ height: 90 }}>
                <DatePicker
                  defaultDate={new Date(2019, 8, 17)}
                  minimumDate={new Date(2019, 8, 17)}
                  maximumDate={new Date(2020, 12, 1)}
                  locale={"id"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"slide"}
                  androidMode={"calendar"}
                  textStyle={{ color: "#0baa56" }}
                  placeHolderText="Tanggal Masuk"
                  onDateChange={this.setDate}
                  disabled={false}
                />
                <Text>
                  Date: {this.state.chosenDate.toString().substr(4, 12)}
                </Text>
              </View>
  
             
              </View>
            
              {/* GARIS GRAY */}
              <View style={{ backgroundColor: "#bdbdbd", height: 1 }} />
  
              {/* DETAIL KOST DAN HARGA */}
              <View
                style={{
                  backgroundColor: "white",
                  height: 130,
                  flexDirection: "row"
                }}
              >
                <View
                  style={{ flex: 2, backgroundColor: "red", marginVertical: 20 }}
                >
                  <Image
                    source={{uri : `https://mamikos.herokuapp.com/static/${photos}`}}
                    style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                  />
                </View>
                <View
                  style={{
                    flex: 5,
                    backgroundColor: "white",
                    marginLeft: 20,
                    marginVertical: 20,
                    flexDirection: "column"
                  }}
                >
                  <Text style={{ flex: 2, fontFamily: "Lato-Semibold" }}>
                    {title} {city}
                  </Text>
                  <Image
                    source={require("../src/img/detail/fasilitass.png")}
                    style={{ width: 141, height: 18, resizeMode: "contain" }}
                  />
                  <Text style={{ flex: 1, fontFamily: "Lato-Bold", marginTop: 2 }}>
                    Rp {price} / bulan
                  </Text>
                </View>
              </View>
  
              {/* GARIS GRAY */}
              <View style={{ backgroundColor: "#bdbdbd", height: 1 }} />
  
              {/* DATA PENGHUNI */}
              <View
                style={{
                  backgroundColor: "white",
                  height: 220,
                  flexDirection: "column",
                  marginVertical: 20
                }}
              >
                <View
                  style={{
                    flex: 1.1,
                    justifyContent: "space-between",
                    flexDirection: "row"
                  }}
                >
                  <Text style={styles.textsemibold}>Data Penghuni</Text>
                  <Text style={{ color: "#ec4a0c" }}>Ubah</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                    flexDirection: "row"
                  }}
                >
                  <Text style={styles.textabu}>Nama Lengkap</Text>
                  <Text style={styles.textsemibold}>Angga Priyatna</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                    flexDirection: "row"
                  }}
                >
                  <Text style={styles.textabu}>Jenis Kelamin</Text>
                  <Text style={styles.textsemibold}></Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                    flexDirection: "row"
                  }}
                >
                  <Text style={styles.textabu}>No Handphone</Text>
                  <Text style={styles.textsemibold}>-</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                    flexDirection: "row"
                  }}
                >
                  <Text style={styles.textabu}>Pekerjaan</Text>
                  <Text style={styles.textsemibold}>Lainnya</Text>
                </View>
              </View>
  
              {/* GARIS GRAY */}
              <View style={{ backgroundColor: "#bdbdbd", height: 1 }} />
  
              {/* KETERANGAN BIAYA LAIN */}
              <View
                style={{
                  backgroundColor: "white",
                  height: 70,
                  marginTop: 20,
                  flexDirection: "column"
                }}
              >
                <Text style={styles.textsemibold}>Keterangan Biaya Lain</Text>
                <Text style={styles.textabu}>-</Text>
              </View>
  
              {/* CHECK BOX */}
              <View
                style={{
                  backgroundColor: "white",
                  marginTop: 20,
                  height: 50,
                  flexDirection: "row"
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    marginLeft: -10,
                    marginTop: -5
                  }}
                >
                  <CheckBox checked={true} checkedColor="#0baa56" size={40} />
                </View>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                  <Text style={styles.textcheckbox}>{"Saya menyetujui "}</Text>
                  <Text
                    onPress={() => alert("syaratnya bootcamp 6 minggu")}
                    style={styles.textcheckboxijo}
                  >
                    {"syarat ketentuan"}
                  </Text>
                  <Text style={styles.textcheckbox}>
                    {" dan memastikan data di atas benar"}
                  </Text>
                </View>
              </View>
  
              {/* BUTTON BOOK */}
              <Button
                block
                style={{
                  backgroundColor: "#0baa56",
                  marginVertical: 20,
                  borderRadius: 6
                }}
  
                onPress={() => this.booking(params,this.state.chosenDate.toString().substr(4, 12))}
              >
                <Text
                  uppercase={false}
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontFamily: "Lato-Semibold"
                  }}
                >
                  Book
                </Text>
              </Button>
          </Content>
        </ScrollView>
        </Container>
      );
    }else{
      return(
        <Container>
            <Content>
                 <Spinner />
              </Content>
         </Container>
      )
    }
    
  }
}

const styles = StyleSheet.create({
  textsemibold: {
    fontFamily: "Lato-Semibold"
  },

  textbold: {
    fontFamily: "Lato-Bold"
  },

  textabu: {
    fontFamily: "Lato-Regular",
    color: "#727272"
  },

  textcheckboxijo: {
    fontFamily: "Lato-Regular",
    color: "#0baa56",
    justifyContent: "center",
    alignItems: "center",
    textDecorationLine: "underline"
  },

  textcheckbox: {
    fontFamily: "Lato-Regular",
    justifyContent: "center",
    alignItems: "center"
  }
});
