var React = require('react-native');
var {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Component,
  Navigator

} = React;
var ROUTES = {
  //key: reference to component
  signin: Signin,
  signup: Signup,
  tweets: Tweets,
  searchpage: SearchPage
}
import Parse from 'parse/react-native';
import Signin from './components/authentication/signin';
import Signup from './components/authentication/signup';
import Tweets from './components/tweets';
import SearchPage from './components/pages/searchpage';
import SearchResults from './components/pages/searchresults';
/*
module.exports = React.createClass({
  render:function() {
    return (
      <View style={styles.container}>
        <Text> Hello!
        </Text>
      </View>
    )
  }
});
*/

export default class Main extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    Parse.initialize("ptyjBnhc6rsf7cvUUjhn77N0iqiWL1vPuVMOOUej", "LAN1tycJZkESu8tdbynWsTP52yzfU2EbjEbIoI9v");
  }
  renderScene(route, navigator) {
    var Component = ROUTES[route.name]; //ROUTES['signin'] => Signin
    return <Component route={route} navigator={navigator} />;

  }
  render() {
    return(
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}>

      </Navigator>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0099CC'
  }
});
