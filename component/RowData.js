import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableHighlight, 
  NavigatorIOS 
} from 'react-native';
import DetailsMovie from '../component/DetailsMovie'

const styles = StyleSheet.create({
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
});

  // _onForward = () => {
  //   console.log('test')
  //   // this.props.navigator.push({
  //   //   title: 'Scene ' + nextIndex,
  //   // });
  // }

  // goToDetails = () => {
  //   this.props.navigator.push({
  //     title: 'nextPage',
  //     component: DetailsMovie,
  //     passProps: {myElement: 'text'}
  //   });
  // }


const RowData = (props) => (
  <TouchableHighlight /*onPress={this.goToDetails}*/>
    <View style={styles.container}>
      <Image source={{ uri: props.url}} style={styles.photo} />
      <Text style={styles.text}>
          {`${props.name} \nRating: ${props.rating}`}
      </Text>
    </View>
  </TouchableHighlight>
);

export default RowData;