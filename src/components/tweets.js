import React from 'react-native';
var {
  StyleSheet,
  TextInput,
  Text,
  View,
  Component,
  Navigator
} = React;
import Parse from 'parse/react-native';
import Button from './common/button';

export default class Tweets extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    Parse.User.currentAsync()
    //return a promise
    .then((user) => {this.setState({user: user}); })
  }
  onPressReturn() {
    this.props.navigator.push({ name: 'signin'});

  }
  onPressSearchPage() {
    this.props.navigator.push({ name: 'searchpage'});
  }
  render() {
    if(!this.state.user) {
      return <Text>loading...</Text>
    }
    var username = this.state.user.get('username');

    return(
      <View style={styles.container}>
        <Text>Hello</Text>
        <Button text={'return to signup'} onPress={this.onPressReturn.bind(this)}/>
        <Button text={'Take me to Search'} onPress={this.onPressSearchPage.bind(this)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
