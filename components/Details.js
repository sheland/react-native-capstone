import React from 'react';
import data from '../data/letters.json';
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import Letters from './Letters'
export default class Details extends React.Component {
  render(){

    return (
      <ScrollView style={styles.container}>
        <Text>Hello from Details!</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
