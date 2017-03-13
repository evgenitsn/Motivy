import React, { Component } from 'react'
import { Container, Content, Header, Title, Left, Body, Item, Input, Button, Text } from 'native-base'
import { StyleSheet, Image } from 'react-native'

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Header</Title>
          </Body>
        </Header>
        <Content>
          <Item underline>
            <Input placeholder='Underlined Textbox' />
          </Item>
          <Image
            style={styles.image}
            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
          />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App
