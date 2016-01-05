import React from 'react-native';
var { View, Text, StyleSheet, TextInput, Component, TextInput, Navigator } = React;
import Button from '../common/button';
import Parse from 'parse/react-native';



export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: ''
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <Text> Sign in</Text>

        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          onChangeText={(text) => this.setState({username: text})} />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}/>
        <Text style={styles.label}>{this.state.errorMessage}</Text>
        <Button text={'Sign In'} onPress={this.onPress.bind(this)}/>
        <Button text={'Sign Up'} onPress={this.onSignupPress.bind(this)}  />
      </View>
    )
  }
  onPress() {
    Parse.User.logIn(this.state.username, this.state.password, {
    success: (user) => { this.props.navigator.immediatelyResetRouteStack([{name: 'tweets'}]); },
    error: (data, error) => { this.setState({ errorMessage: error.message })}
    });
  }
  onSignupPress() {
    this.props.navigator.push({ name: 'signup'});
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: '#CCFF66',
    borderWidth: 3,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  }
});

/* KEYS
application ID ptyjBnhc6rsf7cvUUjhn77N0iqiWL1vPuVMOOUej
client key: 2uA2ZlvQ652g14qNmqkgxbAe8gB3qhRbvg91k8Mt
restapi key:
Parse.initialize("ptyjBnhc6rsf7cvUUjhn77N0iqiWL1vPuVMOOUej", "LAN1tycJZkESu8tdbynWsTP52yzfU2EbjEbIoI9v");
*/
