import React from 'react-native';
var {
  Text,
  StyleSheet,
  TouchableHighlight,
  Component
} = React;

export default class Button extends Component {
  render() {
    return(
        <TouchableHighlight

          underlayColor={'pink'}
          onPress={this.props.onPress}
          >
          <Text style={styles.button}>{this.props.text}</Text>
        </TouchableHighlight>
    )
  }
};

const styles = StyleSheet.create({
  button:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 2,
    padding: 3,
    marginTop: 10,
    borderColor: '#CCFF66'
  },
  buttonText: {

    fontSize: 20,
    alignSelf: 'center'
  }
});
