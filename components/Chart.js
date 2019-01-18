import React from 'react';
import data from '../data/letters.json';

import Vowels from './Vowels';
import {
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import Letters from './Letters';
import Ipas from './Ipa';


export default class Chart extends React.Component {
  render(){

    return (

      <ScrollView style={styles.container}>
        <Text style={styles.title}>Tigrinya Chart</Text>
        <View style={styles.outercontainer}>
          <Ipas />
          <View>
            <Vowels />
            <Letters data={data}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'

  },
  title: {
    color: 'steelblue',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'AmericanTypewriter-CondensedBold',
    textAlign: 'center',

  },
  outercontainer: {
    flex: 1,
    flexDirection: "row"
  }
});
