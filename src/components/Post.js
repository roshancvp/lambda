import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Post extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>campbelltown • 8 hours ago • ethereum.io</Text>
        <Text style={styles.title}>153k Ether Stolen in Parity Multi-Sig Attack </Text>
        <View style={styles.footer}>
          <Image source={require('../../assets/icons/star.png')} style={styles.icon}/>
          <Text style={styles.footerItem}>321</Text>
          <Image source={require('../../assets/icons/comments.png')} style={styles.icon}/>
          <Text>843</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    padding: 30,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: '#E7E7E7',
    borderBottomWidth: 1,
  },
  description: {
    fontSize: 14,
    paddingBottom: 5,
    color: '#A7BBC3',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    paddingBottom: 10,
    color: '#4A4A4A',
  },
  footer: {
    flexDirection: 'row',
  },
  footerItem: {
    marginRight: 10,
  },
  icon: {
    height: 14,
    width: 14,
    marginRight: 10,
  }
});
