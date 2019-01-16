import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Home!</Text>
        <Button
          title="Alphabet Chart"
          onPress={() => this.props.navigation.navigate('Chart')}
        />
        <Button
          title="Quiz me!"
          onPress={() => this.props.navigation.navigate('Quiz')}
        />
        <Button
          title="About Tigrinya"
          onPress={() => this.props.navigation.navigate('About')}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
