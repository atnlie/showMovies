/*
 * Task React Native 2017
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ListView,
    Navigator,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import MoviesList from './component/MoviesList'
import DetailsMovie from './component/DetailsMovie'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer'
import MoviesContainer from './containers/moviesContainer'

const initialState = {};
const store = createStore(
      rootReducer, 
      initialState,
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


export default class showMovies extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator
            /*style={styles.container}*/
            initialRoute={{id: 'MoviesList', title: 'Movies' }}
            renderScene={this.navigatorRenderScene.bind(this)}
            navigationBar = {
               <Navigator.NavigationBar
                  style = { styles.navigationBar }
                  routeMapper = { NavigationBarRouteMapper } />
            }
        />
      </Provider>
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'MoviesList':
        return (
          <MoviesContainer navigator={navigator} {...route.passProps}  title="Movies List"/>
        );
      case 'DetailsMovie':
       return (<DetailsMovie navigator={navigator} {...route.passProps} leftButton={ "Back" }  title="Details" />);
    }
  }
}

const NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        if(index > 0) {
            return (
                <TouchableOpacity
                    onPress = {() => { if (index > 0) { navigator.pop() } }}>
                  <Text style={ styles.leftButton }>
                    Back
                  </Text>
                </TouchableOpacity>
            )
        }
        else { return null }
    },
    RightButton(route, navigator, index, navState) {
        if (route.openMenu) return (
            <TouchableOpacity
                onPress = { () => route.openMenu() }>
              <Text style = { styles.rightButton }>
                  { route.rightText || 'Menu' }
              </Text>
            </TouchableOpacity>
        )
    },
    Title(route, navigator, index, navState) {
        return (
            <Text style = { styles.title }>
                {route.title}
            </Text>
        )
    }
};



const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 25,
//     //justifyContent: 'center',
//     //alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
    navigationBar: {
        backgroundColor: '#F5FCFF',
    },
    leftButton: {
        color: '#333333',
        margin: 10,
        fontSize: 17,
    },
    title: {
        paddingVertical: 10,
        color: '#333333',
        justifyContent: 'center',
        fontSize: 18
    },
    rightButton: {
        color: '#333333',
        margin: 10,
        fontSize: 16
    }
});

AppRegistry.registerComponent('showMovies', () => showMovies);
