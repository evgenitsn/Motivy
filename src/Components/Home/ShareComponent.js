import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SocialIcon, Icon } from 'react-native-elements'

export const ShareComponent = ({navigate}) => (
  <View style={styles.socialView}>
    <SocialIcon
      style={styles.socialIcon}
      iconSize={36}
      onPress={() => navigate('Settings')}
      type='facebook'
      raised={false}
    />
    <SocialIcon
      style={styles.socialIcon}
      iconSize={36}
      onPress={() => navigate('Settings')}
      type='twitter'
      raised={false}
    />
    <SocialIcon
      style={styles.socialIcon}
      light
      iconSize={36}
      onPress={() => navigate('Settings')}
      type='instagram'
      raised={false}
    />
    <Icon
      size={26}
      name='more-horiz'
      color='#fff'
      raised
      containerStyle={styles.icon}
    />
  </View>
)

const styles = StyleSheet.create({
  socialIcon: {width: 58, height: 58, borderRadius: 360},
  icon: {backgroundColor: '#aaa'},
  socialView: {height: 80, flexDirection: 'row'}
})
