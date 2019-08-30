import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
        <Footer>
          <FooterTab style={{backgroundColor: 'white'}}>
            <Button transparent>
              <Icon name="apps" />
              <Text>explore</Text>
            </Button>
            <Button transparent>
              <Icon name="camera" />
              <Text>Whislist</Text>
            </Button>
            <Button transparent>
              <Icon active name="navigate" />
              <Text>Chat</Text>
            </Button>
            <Button transparent>
              <Icon name="person" />
              <Text>Login</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}