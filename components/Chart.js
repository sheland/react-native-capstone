import React from 'react';
import data from '../data/letters.json';
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import Letters from './Letters'

export default class Chart extends React.Component {
  render(){

    return (
      <ScrollView style={styles.container}>
        <Text>Hello from Chart!</Text>
        <Letters data={data}/>
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
