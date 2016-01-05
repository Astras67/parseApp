var React = require('react-native');
//import React from 'react-natve';
var {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  ListView,
  Component
} = React;
import PropertyView from './propertyview';

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
      this.state = {
        dataSource: dataSource.cloneWithRows(this.props.listings)
      };
  }
  rowPressed(propertyGrid) {
    var property = this.props.listings.filter(prop => prop.guid === propertyGuid)[0];

    this.props.navigator.push({
      title: 'Property',
      component: PropertyView,
      passProps: {property: property}
    });
  }
  renderRow(rowData, sectionID, rowID) {
    var price = rowData.price_formatted.split('')[0];

    return(
      <TouchableHighlight
        onPress={() => this.rowPressed(rowData.guid)}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thunb} source={{ uri: rowData.img_url}} />
            <View style={styles.textContainer}>
            <Text>{rowData.title}</Text>
            <Text style={styles.title}
              numberOfLines={1}>{rowData.title}</Text>
            </View>
          </View>
          <View style={styles.separator}></View>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return(
      <ListView dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    )
  }
}

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});
