import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import { bindActionCreators } from 'redux'
import * as actions from '../action/movies'
import { connect } from 'react-redux'

class DetailsMovie extends React.Component {
    componentWillMount(){
        this.props.loadDetailMovies()
    }

	render(){
        //const { detailMovies } = this.props;
        const { info } = this.props;
        console.error(info)
		return(
		    <View style = {styles.containerDetail}>
                <Text>Halooo {info.movieName}</Text>
            </View>
			// <View style={styles.containerDetail}>
             //    <Image source={{ uri: this.props.movieImage}} style={styles.photoView} />
			//  	<Text style={styles.text}>Hallo {this.props.id} {this.props.movieId}</Text>
			// </View>
			);
	}
}

const mapStateToProps = (store) => {
    return  { info: store.detailMovies };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadDetailMovies: bindActionCreators(actions.detailMovies, dispatch)
    };
};

const styles = StyleSheet.create({
  containerDetail: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 65,
    //backgroundColor: '#F5FCFF',
    // justifyContent: 'space-between',
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
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  photoView: {
  	//marginTop : 10,
  	justifyContent: 'center',
  	alignItems: 'center',
    height: 250,
    width: 300,
    borderRadius: 10,
  },
});

module.exports = connect(mapStateToProps,mapDispatchToProps)(DetailsMovie);

// module.exports = DetailsMovie;