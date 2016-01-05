import React from 'react-native';
import SearchResults from './searchresults';
var {
  StyleSheet,
  Image,
  View,
  Text,
  Component
} = React;

export default class PropertyView extends Component {
  render() {
    var property = this.props.property;
    var stats = property.bedroom_number + 'bed' + property.property_type;
    if (property.bathroom_number) {
      stats += ',' + property.bathroom_number + '' + (property.bathroom_number > 1
      ? 'bathrooms' : 'bathroom');
    }
    var price = property.price_formatted.split('')[0];
    return (
      <View>
        <Image style={styles.image}
          source={{uri: property.img_url}} />
        <View style={styles.heading}>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.title}>{property.title}</Text>
          <View style={styles.separator}/>
        </View>
        <Text style={styles.description}>{stats}</Text>
        <Text style={styles.description}>{property.summary}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  heading: {
    backgroundColor: '#F8F8F8',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300
  },
  price: {
    width: 400,
    height: 300
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  }
});
