import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const Letter = (props) => {
  return (
    <View style={styles.letterformat}>
      <Text>{props.letter}</Text>
    </View>
  )
}

const Letters = (props) => {
  const letters = props.data.map((letterData) => {
    return (<Letter key={letterData.id} {...letterData}/>)
  });
  return (
    <View style={styles.container}>
      {letters}
    </View>
  )
}

const styles = StyleSheet.create({
  letterformat: {
    borderWidth: 2,
    borderColor: "red",
    width: "14%",

  },
  container: {
    backgroundColor:'#4286f4',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap'


  }
});

export default Letters;
