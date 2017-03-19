/*
Render all movies
 */
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
//import NavigationBar from 'react-native-navigationbar';
import DetailsMovie from '../component/DetailsMovie';
import Header from '../component/HeaderMovies';
 
class MoviesList extends React.Component{
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  goToDetails = (movieId) => {
    return (event) => {
      this.props.navigator.push({
        title: 'Details',
          id: 'DetailsMovie',
        component: DetailsMovie,
        passProps: {movieId: movieId }
      });
    };
  }

  render(){
    const dataSource =  this.ds.cloneWithRows(this.props.movies)
    return (
      <ListView style = {styles.headerContainer}
        dataSource={dataSource}
        renderRow = {(rowData) => 
          <TouchableHighlight onPress={this.goToDetails(rowData.id) }>
            <View style={styles.detailContainer}>
              <Image source={{ uri: rowData.movieImage}} style={styles.photo} />
               <Text style={styles.text}>
                   {`${rowData.movieName} \nRating: ${rowData.rating}`}
               </Text>
            </View>
          </TouchableHighlight>
        }
        enableEmptySections={true}
        renderHeader={() => <Header />}
      />
    );
  } 
}


const styles = StyleSheet.create({
  /*
  container: {
    flex: 1,
    justifyContent: 'center',
    //marginTop: 100,
    alignItems: 'center',
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
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  */
  container: {
      flex: 0,
      flexDirection: 'row',
      marginTop: 65,
      margin: 10,
  },
    headerContainer:{
        flex:0,
        flexDirection: 'column',
        marginTop: 65,
    },
    detailContainer: {
        flex: 0,
        flexDirection: 'row',
        //marginTop: 40,
        margin: 10,
    },
  text: {
    marginLeft: 12,
    fontSize: 16,

  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

module.exports = MoviesList;