
import React from 'react-native';
var {
  Text,
  View,
  Navigator,
  Component,
  StyleSheet,
  TextInput
} = React;
import Button from '../common/button';
import Parse from 'parse/react-native';


export default class Signup extends Component {
  constructor(props) {
    super(props);
    //binding function
    this.state = {
      username: '',
      password: '',
      passwordConfirmation:'',
      errorMessage: ''
    };
  }
  onSigninPress() {
    this.props.navigator.pop();
  }
  onSignUpPress(){
    if (this.state.password !== this.state.passwordConfirmation ) {
      return this.setState({errorMessage: 'Your passwords do not match'})
    }
    var user = new Parse.User();
    user.set('username', this.state.username);
    user.set('password', this.state.password);

    user.signUp(null, {
      success: (user) => { this.props.navigator.immediatelyResetRouteStack([{name: 'tweets'}]); },
      error: (user, error) => { this.setState({ errorMessage: error.message }) }
    });
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(text) => this.setState({username: text})}
          style={styles.input}/>

        <Text style={styles.label}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}
          style={styles.input}/>

        <Text style={styles.label}>Confirm Pasword:</Text>
        <TextInput
          secureTextEntry={true}
          value={this.state.passwordConfirmation}
          onChangeText={(text) => this.setState({passwordConfirmation: text})}
          style={styles.input}/>
        <Text style={styles.label}>{this.state.errorMessage}</Text>
        <Button text={'Signup'} onPress={this.onSignUpPress.bind(this)}/>
        <Button text={'I have an account...'} onPress={this.onSigninPress.bind(this)} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66ffcc'
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
