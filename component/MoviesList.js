import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import RowData from '../component/RowData';

 
class MoviesList extends React.Component{
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {'name':'John', 'url':'https://image.shutterstock.com/z/stock-photo-man-worker-washing-car-s-alloy-wheels-on-a-car-wash-243440098.jpg', 'rating':2}, 
        {'name':'Joel','url':'https://static.pexels.com/photos/141635/pexels-photo-141635.jpeg', 'rating':8}, 
        {'name':'James','url':'https://image.shutterstock.com/z/stock-photo-woman-in-retro-car-against-night-city-103153997.jpg','rating':9}, 
        {'name':'Jimmy', 'url':'https://static.pexels.com/photos/141635/pexels-photo-141635.jpeg', 'rating':5}, 
        {'name':'Jackson', 'url':'https://image.shutterstock.com/z/stock-photo-man-worker-washing-car-s-alloy-wheels-on-a-car-wash-243440098.jpg', 'rating':7}, 
        {'name':'Jillian', 'url':'https://image.shutterstock.com/z/stock-photo-woman-in-retro-car-against-night-city-103153997.jpg','rating':5}, 
        {'name':'Julie', 'url':'https://static.pexels.com/photos/141635/pexels-photo-141635.jpeg', 'rating':4}, 
        {'name':'Devin','url':'https://image.shutterstock.com/z/stock-photo-woman-in-retro-car-against-night-city-103153997.jpg','rating':3},
        {'name':'John', 'url':'https://image.shutterstock.com/z/stock-photo-man-worker-washing-car-s-alloy-wheels-on-a-car-wash-243440098.jpg', 'rating':2}, 
        {'name':'Joel','url':'https://static.pexels.com/photos/141635/pexels-photo-141635.jpeg', 'rating':8}, 
        {'name':'James','url':'https://image.shutterstock.com/z/stock-photo-woman-in-retro-car-against-night-city-103153997.jpg','rating':9}, 
        {'name':'Jimmy', 'url':'https://static.pexels.com/photos/141635/pexels-photo-141635.jpeg', 'rating':5}, 
        {'name':'Jackson', 'url':'https://image.shutterstock.com/z/stock-photo-man-worker-washing-car-s-alloy-wheels-on-a-car-wash-243440098.jpg', 'rating':7}, 
        {'name':'Jillian', 'url':'https://image.shutterstock.com/z/stock-photo-woman-in-retro-car-against-night-city-103153997.jpg','rating':5}, 
        {'name':'Julie', 'url':'https://static.pexels.com/photos/141635/pexels-photo-141635.jpeg', 'rating':4}, 
        {'name':'Devin','url':'https://image.shutterstock.com/z/stock-photo-woman-in-retro-car-against-night-city-103153997.jpg','rating':3},
        {'name':'John', 'url':'https://image.shutterstock.com/z/stock-photo-man-worker-washing-car-s-alloy-wheels-on-a-car-wash-243440098.jpg', 'rating':2}, 
        {'name':'Joel','url':'https://static.pexels.com/photos/141635/pexels-photo-141635.jpeg', 'rating':8}, 
        {'name':'James','url':'https://image.shutterstock.com/z/stock-photo-woman-in-retro-car-against-night-city-103153997.jpg','rating':9}, 
        {'name':'Jimmy', 'url':'https://static.pexels.com/photos/141635/pexels-photo-141635.jpeg', 'rating':5}, 
        {'name':'Jackson', 'url':'https://image.shutterstock.com/z/stock-photo-man-worker-washing-car-s-alloy-wheels-on-a-car-wash-243440098.jpg', 'rating':7}, 
        {'name':'Jillian', 'url':'https://image.shutterstock.com/z/stock-photo-woman-in-retro-car-against-night-city-103153997.jpg','rating':5}, 
        {'name':'Julie', 'url':'https://static.pexels.com/photos/141635/pexels-photo-141635.jpeg', 'rating':4}, 
        {'name':'Devin','url':'https://image.shutterstock.com/z/stock-photo-woman-in-retro-car-against-night-city-103153997.jpg','rating':3},
        {'name':'John', 'url':'https://image.shutterstock.com/z/stock-photo-man-worker-washing-car-s-alloy-wheels-on-a-car-wash-243440098.jpg', 'rating':2}, 
        {'name':'Joel','url':'https://static.pexels.com/photos/141635/pexels-photo-141635.jpeg', 'rating':8}, 
        {'name':'James','url':'https://image.shutterstock.com/z/stock-photo-woman-in-retro-car-against-night-city-103153997.jpg','rating':9}, 
        {'name':'Jimmy', 'url':'https://static.pexels.com/photos/141635/pexels-photo-141635.jpeg', 'rating':5}, 
        {'name':'Jackson', 'url':'https://image.shutterstock.com/z/stock-photo-man-worker-washing-car-s-alloy-wheels-on-a-car-wash-243440098.jpg', 'rating':7}, 
        {'name':'Jillian', 'url':'https://image.shutterstock.com/z/stock-photo-woman-in-retro-car-against-night-city-103153997.jpg','rating':5}, 
        {'name':'Julie', 'url':'https://static.pexels.com/photos/141635/pexels-photo-141635.jpeg', 'rating':4}, 
        {'name':'Devin','url':'https://image.shutterstock.com/z/stock-photo-woman-in-retro-car-against-night-city-103153997.jpg','rating':3},
        {'name':'John', 'url':'https://image.shutterstock.com/z/stock-photo-man-worker-washing-car-s-alloy-wheels-on-a-car-wash-243440098.jpg', 'rating':2}, 
        {'name':'Joel','url':'https://static.pexels.com/photos/141635/pexels-photo-141635.jpeg', 'rating':8}, 
        {'name':'James','url':'https://image.shutterstock.com/z/stock-photo-woman-in-retro-car-against-night-city-103153997.jpg','rating':9}, 
        {'name':'Jimmy', 'url':'https://static.pexels.com/photos/141635/pexels-photo-141635.jpeg', 'rating':5}, 
        {'name':'Jackson', 'url':'https://image.shutterstock.com/z/stock-photo-man-worker-washing-car-s-alloy-wheels-on-a-car-wash-243440098.jpg', 'rating':7}, 
        {'name':'Jillian', 'url':'https://image.shutterstock.com/z/stock-photo-woman-in-retro-car-against-night-city-103153997.jpg','rating':5}, 
        {'name':'Julie', 'url':'https://static.pexels.com/photos/141635/pexels-photo-141635.jpeg', 'rating':4}, 
        {'name':'Devin','url':'https://image.shutterstock.com/z/stock-photo-woman-in-retro-car-against-night-city-103153997.jpg','rating':3}

      ])
    };
  }

   static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  //  _onForward = () => {
  //   this.props.navigator.push({
  //     title: 'Scene ' + nextIndex,
  //   });
  // }

  render(){
    // return(
    //   <View style={styles.container}>
    //     <Text>Current Scene: { this.props.title }</Text>
    //     <TouchableHighlight onPress={this._onForward}>
    //       <Text>Tap me to load the next scene</Text>
    //     </TouchableHighlight>
    //   </View>
    //   );

    return (
      <View style={styles.container}>
      <ListView styles={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <RowData {...rowData} />} 
      />
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    marginTop: 0,
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = MoviesList;