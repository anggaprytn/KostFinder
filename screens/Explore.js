import React, { Component } from 'react';
import { Image, 
        View, 
        ScrollView,
        StyleSheet,
        TouchableOpacity,
        TouchableHighlight
      } from 'react-native';
import { Container, 
        Header, 
        Content, 
        Footer, 
        FooterTab, 
        Button, 
        Icon, 
        Text, 
        Badge
       } from 'native-base';

import CariKost from './CariKost';
import Carousel, { Pagination } from 'react-native-snap-carousel';

//  redux requirement


class Explore extends Component {

  static navigationOptions = {
    header: null
  }

  get pagination () {
    const { entries, activeSlide } = this.state;
    return (
        <Pagination
          dotsLength={entries.length}
          activeDotIndex={activeSlide}
          containerStyle={{ backgroundColor: 'transparent' }}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              // left: -140,
              marginHorizontal: -5,
              backgroundColor: 'rgba(11, 170, 86, 1)'
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
}
  
  constructor() {
    
    super()
    this.state = {
      entries: [
        { image: <Image  style={styles.imagepromo} source={require('../src/img/promo/promo1.jpg')} />,
          title: 'promo1' },
        { image: <Image  style={styles.imagepromo} source={require('../src/img/promo/promo2.jpg')} />,
          title: 'promo2' },
        { image: <Image  style={styles.imagepromo} source={require('../src/img/promo/promo3.jpg')} />,
          title: 'promo3' },
        { image: <Image  style={styles.imagepromo} source={require('../src/img/promo/promo4.png')} />,
          title: 'promo4' },
        { image: <Image  style={styles.imagepromo} source={require('../src/img/promo/promo5.png')} />,
          title: 'promo5' },
      ],
    }
  }

  _renderItem ({item, index}) {
    return <MySlideComponent data={item} />
}

  _renderImage ({item, index}) {
    return (
      <View  >
          <View >
          { item.image }
          </View>
          
      </View>
  );}

  
  render() {
    return (
      <Container>

        {/* HEADER */}
        <Header style={{backgroundColor: 'white', flexDirection: 'row', height: 30, borderBottomColor: 'white', elevation: 0}} androidStatusBarColor="white">
          <View style={{flex: 1, backgroundColor: 'white', width: '100%'}}>
          <Image source={require('../src/icon/logo2.png')} style={{ width: '90%', height: '90%',resizeMode: 'contain', marginLeft: -95, marginTop: 5 }}/>
          </View>
        </Header>

        {/* KOS APART BARANGJASA LOKER */}
        <View style={{flex: 0.08, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 20}}>
          <View style={{flex: 1}}><Image style={{width: '100%', height: '100%', resizeMode: 'contain' }} source={require('../src/icon/haha.png')}/></View>
        </View>
        

        {/* CONTENT */}
        <Content>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View>
        <View style={{backgroundColor: 'white', flexDirection: 'column' }}>

                  {/* HAI BOSKU, MAU CARI KOST DIMANA */}
                  <View style={{backgroundColor: 'white', flex: 2, marginHorizontal: 20, flexDirection: 'column', height: 125}}>
                    <Text style={{fontSize: 23, fontFamily: 'Lato-Regular'}}>Halo</Text>
                    <Text style={{fontSize: 24, fontFamily: 'Lato-Semibold'}}>Mau cari Kost dimana ?</Text>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('searchkost')}>
                    <View style={{marginTop: 20}}>
                      <Image  source={require('../src/icon/inputaddrs.png')} style={{marginTop: -23, width: '100%', height: '100%', resizeMode: 'contain'}}/>
                    </View>
                    </TouchableOpacity>
                  </View>
                  
                  {/* GARIS ABU */}
                  <View style={{backgroundColor: 'gray', flex: 1}}>
                    <View style={{backgroundColor: '#f2f2f2', flex: 1, height: 10}}/>
                  </View>

                  {/* PROMO */}
                  <View style={{backgroundColor: 'white', height: 250}}>
                  <Text style={{fontSize: 20, marginTop: 10, marginLeft: 20, color: 'black', fontWeight: '600', fontFamily: 'Lato-Semibold'}}>Promo</Text>
                    <View style={{backgroundColor: 'transparent', marginTop: -20, marginBottom: 40}} >
                    <Carousel layout={'default'} 
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries}
                    renderItem={this._renderImage}
                    sliderWidth={400}
                    itemWidth={300}
                    autoplay={true}
                    enableMomentum={false}
                    lockScrollWhileSnapping={false}
                    loop={true}
                    
                    
                    />
                    <View style={{ marginTop: -50 }}>
                    { this.pagination } 
                    </View>
                    </View>
                  </View>

                  {/* TERTARIK MENGIKLANKAN KOSMU? */}
                  <View style={{backgroundColor: 'white', flex: 1, marginHorizontal: 20, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                    <Text style={{fontSize: 17, fontFamily: 'Lato-Regular'}}>Tertarik mengiklankan kosmu ?</Text>
                    <Button warning style={{borderRadius: 10, height: 30, backgroundColor: '#ec7e2f'}} onPress={()=> this.props.navigation.navigate('addadvertisement')}><Text style={{color: 'white', fontSize: 13, fontFamily: 'Lato-Semibold'}} uppercase={false}>Pasang Iklan</Text></Button>
                  </View>

                  {/* KOTA POPULER */}
                  <Text style={styles.textkotapopuler}>Kota Populer</Text>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row', marginHorizontal: 20, marginBottom: 20}}>
                    <View>           
                      <Image source={require('../src/img/yogyakarta.png')} style={{width: 100, height: 170, marginLeft: 0, marginTop: 10, borderRadius: 4}} />
                      <Text style={{color: 'white', position: 'absolute', marginTop: 10,top: 145, left: 15, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                        Yogyakarta
                      </Text>
                    </View>
                    <View>           
                      <Image source={require('../src/img/jakarta.png')} style={styles.showhorizontal}/>
                      <Text style={styles.texthorizontal}>
                        Jakarta
                      </Text>
                    </View>
                    <View>           
                      <Image source={require('../src/img/bandung.png')} style={styles.showhorizontal}/>
                      <Text style={styles.texthorizontal}>
                        Bandung
                      </Text>
                    </View>
                    <View>           
                      <Image source={require('../src/img/surabaya.png')} style={styles.showhorizontal}/>
                      <Text style={styles.texthorizontal}>
                        Surabaya
                      </Text>
                    </View>
                    <View>           
                      <Image source={require('../src/img/denpasar.png')} style={styles.showhorizontal}/>
                      <Text style={styles.texthorizontal}>
                        Denpasar
                      </Text>
                    </View>
                    <View>           
                      <Image source={require('../src/img/semarang.png')} style={styles.showhorizontal}/>
                      <Text style={styles.texthorizontal}>
                        Semarang
                      </Text>
                    </View>
                    <View>           
                      <Image source={require('../src/img/makasar.png')} style={styles.showhorizontal}/>
                      <Text style={styles.texthorizontal}>
                        Makasar
                      </Text>
                    </View>
                    <View>           
                      <Image source={require('../src/img/medan.png')} style={styles.showhorizontal}/>
                      <Text style={styles.texthorizontal}>
                        Medan
                      </Text>
                    </View>
                  </ScrollView>     
          </View>
        </View>
        </ScrollView>
        </Content>

        {/* FOOTER */}
        <Footer style={{borderTopColor: '#f2f2f2', borderTopWidth: 1}}>
          <FooterTab style={{backgroundColor: 'white'}}>
          <Button vertical>
              <Icon name="md-home" style={{color: '#0baa56'}} />
              <Text style={{color: '#0baa56'}}>Explore</Text>
            </Button>
            <TouchableOpacity>
            <Button vertical onPress={()=> this.props.navigation.navigate('searchkost')}>
              <Icon name="md-search" style={{color: '#9E9E9E'}} />
              <Text style={{color: '#9E9E9E'}}>Search</Text>
            </Button>
            </TouchableOpacity>
            <Button vertical>
              <Icon name="md-calendar" style={{color: '#9E9E9E'}} onPress={() => this.props.navigation.navigate('listbooking')} />
              <Text style={{color: '#9E9E9E'}}>Booking</Text>
            </Button>
            <Button vertical onPress={()=> this.props.navigation.navigate('profilePage')}>
              <Icon name="md-person" style={{color: '#9E9E9E'}} />
              <Text style={{color: '#9E9E9E'}} >Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


export default Explore


const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

  },
  
  showhorizontal : { 
    width: 100, 
    height: 170, 
    marginLeft: 5, 
    marginTop: 10, 
    borderRadius: 4
  },

  texthorizontal : {
    color: 'white', 
    position: 'absolute', 
    marginTop: 10, 
    top: 145, 
    left: 25, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  },

  textkotapopuler : {
    fontSize: 20, 
    marginLeft: 20, 
    marginTop: 20, 
    color: 'black', 
    fontWeight: '600', 
    fontFamily: 'Lato-Semibold'
  },

  imagepromo: {
    width: '100%', 
    height: '100%', 
    resizeMode: 'contain',


  },

});