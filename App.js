import React from 'react';
import { StyleSheet, View } from 'react-native';

import PostsContainer from './src/components/PostsContainer'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PostsContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },
});
