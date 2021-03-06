import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class TouchAble extends React.Component {
  render() {
    const props = this.props
    return (
      <TouchableHighlight
         style={ styles.touchAble }
         onPress={ props.onPress }
      >
        { props.content }
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  touchAble: {
    alignItems: 'center',
    backgroundColor: '#00bfa5',
    padding: 10,
    width: '50%'
  }
});
