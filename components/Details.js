import React from 'react';
import data from '../data/letters.json';
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
// import Letters from './Letters';
// import Canvas from './Canvas';

export default class Details extends React.Component {



  render(){

    const { navigation } = this.props;
    const letter = navigation.getParam('letterObject');
    console.log(letter);

    return (
      <ScrollView style={styles.container}>
        <Text>Letter: {letter.letter}</Text>
        <Text>IPA: {letter.ipa}</Text>
        <Text>Vowel: {letter.vowel}</Text>
        <Text>Pronounce: {letter.pronouce}</Text>


        {/* <Canvas /> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 0,
    margin: 0,
    borderWidth: 3,
    width: 730,
    height: 410,
  },
});
