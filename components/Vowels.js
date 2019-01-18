import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import letterheaderdata from '../data/letterheaders.json';


const Vowel = (props) => {
  return (
    <View style={styles.vowelformat}>
      <Text>{props.vowel}</Text>
    </View>
  )
}

const Vowels = () => {
  const vowels = letterheaderdata.vowels.map((vowel, index) => {
    return <Vowel
      key={index}
      vowel={vowel}
    />
  });

  return (
    <View style={styles.container}>
      {vowels}
    </View>
  )
}

const styles = StyleSheet.create({
  vowelformat: {
    borderWidth: 1,
    borderColor: "powderblue",
    width: "14%",
    alignItems: 'center'

  },
  container: {
    backgroundColor:'white',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',

  }
});

export default Vowels;
