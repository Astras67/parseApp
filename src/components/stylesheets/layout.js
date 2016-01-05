import React from 'react-native';
var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Navigator,
  Component
} = React;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: 'pink',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  toolbarButton: {
    width: 70,
    color: 'white',
    textAlign: 'center'
  },
  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1
  },
  mainContainer: {
    flex: 1
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  description: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch'
},
buttonText: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center'
},
button: {
  height: 36,
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#48BBEC',
  borderColor: '#48BBEC',
  borderWidth: 1,
  borderRadius: 8,
  marginBottom: 10,
  alignSelf: 'stretch',
  justifyContent: 'center'
},
searchInput: {
  height: 36,
  padding: 4,
  marginRight: 5,
  flex: 4,
  fontSize: 18,
  borderWidth: 1,
  borderColor: '#48BBEC',
  borderRadius: 8,
  color: '#48BBEC'
},
image: {
  width: 217,
  height: 138
}
});
module.exports = styles
