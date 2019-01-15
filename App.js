import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_hTx7KHdFGFCLoDhy9Sj9lOHn-HKkmp4",
  authDomain: "learntigrinya-c5d56.firebaseapp.com",
  databaseURL: "https://learntigrinya-c5d56.firebaseio.com",
  projectId: "learntigrinya-c5d56",
  storageBucket: "learntigrinya-c5d56.appspot.com",
  messagingSenderId: "240303417955"
};

firebase.initializeApp(firebaseConfig);

import { Container, Form, Input, Item, Button, Label } from 'native-base'
// import { StackNavigator } from 'react-navigation';
// import { Icon } from 'react-native-elements';
//
// import About from './components/About';
// import Chart from '.components/Chart';
// import Quiz from '.components/Quiz'

// PressChart = () => {
//
// }

// const AppNavigator = StackNavigator({
//   About: { screen: About },
//   Chart: { screen: Chart}
// })
export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log(user)
      }
    })
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("Please enter atleast 6 characters")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user)
      })
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  async loginWithFacebook() {
    const {type,token} = await Expo.Facebook.logInWithReadPermissionsAsync('2074220252876215',
    { permissions:['public_profile']})

    if (type === 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token)
      
      firebase.auth().signInWithCredential(credential).catch((error) => {
        console.log(error)
      })
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}> Login</Text>
          </Button>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.signUpUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}> Sign Up</Text>
          </Button>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.loginWithFacebook()}
          >
            <Text style={{ color: 'white' }}> Login With Facebook</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },
});
