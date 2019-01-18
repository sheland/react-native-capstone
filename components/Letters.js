import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Letter = (props) => {
  return (
    <View style={styles.letterformat}>
      <Text onPress={(e) => {
        this.props.navigation.navigate('Details')


      }} >{props.letter}</Text>
    </View>
  )
}



const Letters = (props) => {
  console.log(props)
  return (
    <View style={styles.container}>
      {
        props.data.map((letterData,index) => {
          return (
            <Letter key={index} letter={letterData.letter} />
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  letterformat: {
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

export default Letters;
