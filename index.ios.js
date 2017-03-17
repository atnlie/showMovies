/**
 * Task React Native
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';
//import { StackNavigator } from 'react-navigation';
import MoviesList from './component/MoviesList'
import DetailsMovie from './component/DetailsMovie'

export default class showMovies extends Component {
  constructor(props) {
    super(props);
  //   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //   this.state = {
  //     dataSource: ds.cloneWithRows([
  //       'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
  //     ])
  //   };
  }

  // detailsPage = () => {
  //   this.props.navigator.push({
  //     title: 'Details',
  //     component: DetailsMovie
  //   })
  // }

  // onRightButtonPress = () => {
  //     this.props.navigator.push({
  //       title: 'Scene ' + nextIndex,
  //     });
  //   };

  render() {
    // return (
    //   <View style={styles.container}>
    //   <ListView styles={styles.container}
    //     dataSource={this.state.dataSource}
    //     //renderRow={(rowData) => <View><Text>{rowData}</Text></View>}
    //     renderRow={(rowData) => <Text>{rowData}</Text>}
    //   />

    //   </View>
    // );

    return (
      <NavigatorIOS
        initialRoute={{
          component: MoviesList,
          title: 'Movies List',
          name: 'MoviesList'
          //rightButtonTitle: 'Details!'
          //leftButtonTitle: 'Back',
          //onRightButtonPress: this.detailsPage
          //passProps: { myProp: 'foo' }
          //name: 'MoviesList'
        }}
        // renderScene={ this.renderScene } 
        style={{flex: 1}}
      />
    );


  }

  // renderScene(route, navigator) {
  //     if(route.name == 'MoviesList') {
  //        return (
  //           <MoviesList
  //              navigator = {navigator}
  //              {...route.passProps} 
  //           />
  //        )
  //     }
  //     if(route.name == 'DetailsMovie') {
  //        return (
  //           <DetailsMovie
  //              navigator = {navigator}
  //              {...route.passProps} 
  //           />
  //        )
  //     }
  //  }

}


// class MoviesList extends Component {
//   // static propTypes = {
//   //   title: PropTypes.string.isRequired,
//   //   navigator: PropTypes.object.isRequired,
//   // }

//   _onForward = () => {
//     this.props.navigator.push({
//       title: 'Scene ' + nextIndex,
//     });
//   }


//   render() {
//     return (
//       <View>
//         <Text>Current Scene: { this.props.title }</Text>
//         <TouchableHighlight onPress={this._onForward}>
//           <Text>Tap me to load the next scene</Text>
//         </TouchableHighlight>
//       </View>
//     )
//   }
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    //justifyContent: 'center',
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

AppRegistry.registerComponent('showMovies', () => showMovies);
