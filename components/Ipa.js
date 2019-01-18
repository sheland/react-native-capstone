import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import letterheaderdata from '../data/letterheaders.json';


const Ipa = (props) => {
  return (
    <View style={styles.ipaformat}>
      <Text>{props.ipa}</Text>
    </View>
  )
}

const Ipas = () => {
  const ipas = letterheaderdata.ipa.map((ipa, index) => {
    return <Ipa
      key={index}
      ipa={ipa}
    />
  });

  return (
    <View style={styles.container}>
      {ipas}
    </View>
  )
}

const styles = StyleSheet.create({
  ipaformat: {
    borderWidth: 1,
    borderColor: "red",
    width: 50,
    flexDirection: 'column',
    alignItems: 'center'

  },
  container: {
    backgroundColor:'white',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    flexWrap: 'wrap',

  }
});

export default Ipas;
