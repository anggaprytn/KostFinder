import React, { Component } from 'react';
import { Image, 
        View, 
        ScrollView,
        StyleSheet,
        FlatList,
        Share
      } from 'react-native';
import { Container, 
        Header, 
        Content, 
        Footer, 
        Left,
        Right,
        FooterTab, 
        Button, 
        Text, 
        Badge,
        Icon,
        Fab
       } from 'native-base';
import {connect} from 'react-redux'


class DetailPage extends Component {
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'KostFinder',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this)
    this.kostmenarik = this.kostmenarik.bind(this)
}

  nextPage(destination,senddata) {
    const { navigate } = this.props.navigation; 
    navigate(destination,senddata);
  };

  previousPage() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  kostmenarik(){
    return(
      <React.Fragment>
      <View style={{backgroundColor: 'white', height: 260, marginHorizontal: 20, marginTop: 30}}>
        <Text style={{color: 'black', fontFamily: 'Lato-Semibold', fontSize: 20}}>
          Kos Menarik Lainnyaa  
        </Text>
          {/* GARIS GRAY */}
        <View style={{backgroundColor: '#dbdbdb', height: 1, marginTop: 5}}/>

          {/* LIST KOST MENARIK */}
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection: 'row'}}>

                {/* LOOP HERE */}
                <FlatList
                horizontal
                data = {this.props.listkost.data}
                renderItem = { ( {item } ) => (

                  <View style={{flex: 0.8, backgroundColor: 'white', marginLeft: 10, height: 180, width: 180, marginTop: 10, borderRadius: 5}}>
                    <View style={{backgroundColor: 'white', height: 30}}>
                      <Button style={{width: 180, height: 30, borderRadius: 5, backgroundColor: 'white', borderColor: '#0baa56', justifyContent: 'center', alignItems: 'center', borderWidth: 1}}>
                        <Text style={{color: '#0baa56', fontFamily: 'Lato-Regular'}}>Ada {item.availablerooms} Kamar</Text>
                      </Button>
                      <Image source={{uri : `https://mamikos.herokuapp.com/static/${item.photos}`}} style={{height: 150, width: 180, resizeMode: 'cover', borderRadius: 5}}/>
                      <View style={{backgroundColor: 'black', opacity: 0.5, height: 50, marginTop: -50, flexDirection: 'column', borderRadius: 5}}>
                      </View>
                      <View style={{marginTop: -50, marginLeft: 5, borderRadius: 5}}>
                        <Text style={{color: 'white', fontFamily: 'Lato-Regular', fontSize: 18}}>{item.price}</Text>
                        <Text style={{color: 'white', fontFamily: 'Lato-Regular', fontSize: 18}}>{item.title}</Text>
                      </View>
                      <View style={{marginTop: -47, marginLeft: 95, borderRadius: 5}}>
                        <View style={{backgroundColor: '#9b59b6', height: 23, width: 75, borderRadius: 5}}>
                          <Text style={{marginLeft: 3, fontFamily: 'Lato-Regular', color: 'white'}}>
                            {item.gender}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>

                
                )}/>
                
              </View>
              
            </ScrollView>
          </View>
        </View>
      <View style={{backgroundColor: '#dbdbdb', height: 1, marginTop: 15}}/>
    </React.Fragment>

    )
  }

  getFacility(e){
    console.log(e)
    return(
      <React.Fragment>
        {e[0] == 'true' ? ( <Image source={require('../src/img/detail/kasur.png')} style={{width: 82, height: 100, resizeMode: "contain"}}/> ) : null}
        {e[1] == 'true' ? ( <Image source={require('../src/img/detail/kamarmandi.png')} style={{width: 125, height: 100, resizeMode: "contain"}}/> ) : null}
        {e[2] == 'true' ? ( <Image source={require('../src/img/detail/wifi.png')} style={{width: 120, height: 100, resizeMode: "contain"}} /> ) : null}
        {e[3] == 'true' ? ( <Image source={require('../src/img/detail/kunci.png')} style={{width: 137, height: 100, resizeMode: "contain"}}/> ) : null }

        
        
      </React.Fragment>
    )
    
    // if(e[0] == 'true'){
    //   return(
    //     
    //   )
    // }
    // if(e[2] == 'true'){
    //   return (
        
    //   )
    // }
  }



  render() {

    const { params } = this.props.navigation.state;
    const { title,price,description,photos,city,seller,gender,contact,availablerooms,large,facility,create_by } = params;
    return (
      <Container>

        {/* HEADER */}
        <Header style={styles.bgwhite} androidStatusBarColor='#0baa56'>
          <Left style={styles.headermarginl}>
            <Button style={styles.buttonheader} onPress={this.previousPage}>
              <Icon style={styles.headericon} name="arrow-back" />
            </Button>
          </Left>
          <Right style={styles.headermarginr}>
            <Button style={styles.buttonheader}>
              <Icon style={styles.headericon} name="md-heart" />
            </Button>
            <Button onPress={this.onShare} style={styles.buttonheader}>
              <Icon style={styles.headericon} name="md-share" />
            </Button>
          </Right>
        </Header>


        {/* KONTEN */}
        <Content>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <View style={{backgroundColor: 'white', height: 210}}>
            <Image source={{uri : `https://mamikos.herokuapp.com/static/${photos}`}} style={{height: '100%', flex: 1, width: '100%',resizeMode:'contain'}}/>
          </View>
          <View style={{backgroundColor: '#252525', flexDirection: 'row'}}>
          <View style={{flex:1}}>
            <Button style={{backgroundColor: 'black', justifyContent: 'center'}}>
              <Image source={require('../src/icon/detailkost/image.png')} style={{height: 50, flex: 1, width: null}}/>
            </Button>
          </View>
        <View style={{flex:1}}>
          <Button style={{backgroundColor: 'black', justifyContent: 'center'}}>
            <Image source={require('../src/icon/detailkost/peta.png')} style={{height: 50, flex: 1, width: null}}/>
          </Button>
        </View>
        <View style={{flex:1}}>
          <Button style={{backgroundColor: 'black', justifyContent: 'center'}}>
            <Image source={require('../src/icon/detailkost/360.png')} style={{height: 50, flex: 1, width: null}}/>
          </Button>
        </View>
            <View style={{flex:1}}>
            <Button style={{backgroundColor: 'black', justifyContent: 'center'}}>
            <Image source={require('../src/icon/detailkost/video.png')} style={{height: 50, flex: 1, width: null}}/>
            </Button>
            </View>
        </View>

        {/* DESKRIPSI SINGKAT */}
        <View style={{backgroundColor: 'white', height: 120}}>
           <View style={{flexDirection: 'row',marginTop: 10}}>
            <Text style={{color: '#4A92E6', marginLeft: 20, fontFamily: 'Lato-Regular', fontSize: 19}}>
              {gender}
            </Text>
            <Text style={{color: 'gray', marginLeft: 10}}>
              {'\u2022'}
            </Text>
            <Text style={{color: '#ec7e2f', marginLeft: 10, fontFamily: 'Lato-Regular', fontSize: 18}}>
              {availablerooms} Kamar
            </Text>
            </View>
            <View style={{flexDirection: 'row',marginTop: 5}}>
              <Text style={{color: 'black', marginLeft: 20, fontFamily: 'Lato-Semibold', fontSize: 21}}>
                {title}
              </Text>       
            </View>
            <View style={{flexDirection: 'row',marginTop: 5}}>
              <Text style={{color: 'black', marginLeft: 20, fontFamily: 'Lato-Semibold', fontSize: 21}}>
                {city}
              </Text>       
            </View>
          </View>

          {/* GARIS GRAY */}
          <View style={{backgroundColor: '#dbdbdb', height: 1, marginHorizontal: 20}}>
          </View>

          {/* TIDAK TERMASUK TIDAK ADA */}
          <View style={{backgroundColor: 'white', height: 40, justifyContent: 'center',alignItems:'center', marginTop: 5}}>
          <View style={{flexDirection: 'row',marginTop: 0}}>
           
         
              <Text style={{color: 'black', marginLeft: 0, fontFamily: 'Lato-Regular', fontSize: 15}}>
              <Image source={require('../src/icon/detailkost/listrik.png')} style={{height: 18,width: 18}}/>{" Tidak Termasuk Listrik"}
              </Text>       
              
            
              <Text style={{color: 'black', marginLeft: 20, fontFamily: 'Lato-Regular', fontSize: 15}}>
              <Image source={require('../src/icon/detailkost/bayar.png')} style={{height: 18,width: 18}}/>{" Tidak ada min. bayar"}
              </Text>       
              </View>
          </View>

           {/* GARIS GRAY */}
           <View style={{backgroundColor: '#dbdbdb', height: 1, marginHorizontal: 20, marginTop: 5}}/>

          
          <View style={{backgroundColor: 'white', height: 230}}>

          {/* LUAS KAMAR */}
            <View>
            <Text style={{color: 'black', marginTop: 10, marginLeft: 20, fontFamily: 'Lato-Semibold', fontSize: 20}}>
                Luas Kamar
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 20}}>
            <Icon style={styles.headericon} name="md-expand" />
            <Text style={{color: 'black', marginLeft: 10, fontFamily: 'Lato-Regular', fontSize: 18}}>
                {large} m
            </Text>
            </View>
            </View>

            {/* FASILITAS KOST */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center'}}>
             <Text style={{color: 'black', marginTop: 20, fontFamily: 'Lato-Semibold', fontSize: 20}}>
                Fasilitas kost dan kamar
            </Text>
            <Text style={{color: '#0baa56', marginTop: 20, fontFamily: 'Lato-Regular', fontSize: 16}}>
                Lihat Semua
            </Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row', marginTop: 10}}>
            
            {this.getFacility(facility.split(','))}
            {/* <Image source={require('../src/img/detail/kamarmandi.png')} style={{width: 125, height: 100, resizeMode: "contain"}}/>
            <Image source={require('../src/img/detail/wifi.png')} style={{width: 120, height: 100, resizeMode: "contain"}}/>
            <Image source={require('../src/img/detail/kunci.png')} style={{width: 137, height: 100, resizeMode: "contain"}}/> */}
            </ScrollView>
            </View>

            <View>
              {/* DESKRIPSI KOST */}
              <View>
                <Text style={{color: 'black', marginTop: 20, marginLeft: 20, fontFamily: 'Lato-Semibold', fontSize: 20}}>
                    Deskripsi Kost
                </Text>
              <View style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 20, flexWrap: 'wrap'}}>
                <Text>
                  {description}
                </Text>
              </View>
            </View>
            </View>

            {/* Pemilik Kost */}

            <View>
              <View style={{backgroundColor: '#f8f8f8', height: 70, marginTop: 30}}>
         
                  <Text style={{color: 'black', fontFamily: 'Lato-Regular', fontSize: 16, flex: 1, marginHorizontal: 20}}>
                    Data bisa berubah sewaktu-waktu,
                  </Text>
                  <Text style={{color: 'black', fontFamily: 'Lato-Regular', fontSize: 16, flex: 1, marginHorizontal: 20}}>
                    tanyakan data saat ini
                  </Text>
                
              </View>
            </View>
            <View>
                <View style={{backgroundColor: '#f8f8f8', height: 100, marginTop: 0, flexDirection: 'row'}}>
                  <View style={{backgroundColor: 'transparent', flex: 0.3, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                    <Image source={require('../src/img/home.png')} style={{height: 80, width: 80}} />
                  </View>       
                  <View style={{backgroundColor: 'transparent', flex: 0.7, flexDirection: 'column'}}>
                    <View style={{backgroundColor: 'transparent', flex: 1}}>
                      <Text style={{color: 'black', fontFamily: 'Lato-Semibold', fontSize: 20, flex: 1}}>
                      Pemilik Kost
                      </Text>
                      <Text style={{color: 'black', fontFamily: 'Lato-Regular', fontSize: 18, flex: 1}}>
                      {seller}
                      </Text>
                      <Text style={{color: 'black', fontFamily: 'Lato-Regular', fontSize: 18, flex: 1}}>
                      {contact}
                      </Text>
                    </View>
                  </View>
                </View>
            </View>

           {/* KOS MENARIK */}
           {this.kostmenarik()}
           
          
        </ScrollView>
        </Content>

        {/* FOOTER */}
        <Footer style={styles.footerbg}>
          <FooterTab style={{backgroundColor: 'white'}}>
            <Left style={{flexDirection: 'column', marginHorizontal: 10}}>
              <Text style={{color: 'black', marginLeft: 20, fontFamily: 'Lato-Semibold', fontSize: 14}}>
                Rp {price} / Bulan
              </Text>
              <Text style={{color: '#0baa56', marginLeft: 20, fontFamily: 'Lato-Semibold', fontSize: 14}}>
                Lihat semua harga
              </Text>
            </Left>
            <Right style={{flexDirection: 'row', marginHorizontal: 10}}>
              <Button style={{borderRadius: 10, height: 40, width: '50%', marginRight:5 , backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: '#ec7e2f'}} onPress={() => alert(this.props.listkost.data[0].title)}>
                <Text style={{color: '#ec7e2f', fontSize: 14, fontFamily: 'Lato-Semibold', justifyContent: 'center', textAlign: 'center', alignItems: 'center'}} uppercase={false}>
                  Hubungi Kost
                </Text>
              </Button>
              <Button onPress={() => this.nextPage('booking',params)} style={{borderRadius: 10, height: 40, width: '50%', backgroundColor: '#ec7e2f', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 14, fontFamily: 'Lato-Semibold', textAlign: 'center'}} uppercase={false}>
                  Booking
                </Text>
              </Button>
            </Right>
          </FooterTab>
        </Footer>
        
        </Container>
    );
  }
}
const mapStateToProps = state => {
  return{
    listkost : state.listkost
  }
}
export default connect(mapStateToProps,null)(DetailPage);

const styles = StyleSheet.create({

  bgwhite : { 
    backgroundColor: 'white'
  },

  headermarginl : { 
    marginLeft: -10
  },

  buttonheader : { 
    backgroundColor: 'white', 
    elevation: 0
  },
  
  headericon : {
    color: '#0baa56'
  },

  headermarginr : {
    marginRight: -10
  },
  
  footerbg : {
    borderTopColor: '#DCDCDC', 
    borderTopWidth: 1
  },

  

});