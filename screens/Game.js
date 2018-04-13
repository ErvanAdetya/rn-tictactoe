import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TouchAble from '../components/TouchAble';
import WhiteText from '../components/WhiteText';
import { startNewGame } from '../store/game/game.actions';
import BoardGame from '../components/BoardGame'

export default class Dashboard extends React.Component {
  static navigationOptions = { title: 'Dashboard' };

  playGame = () => {
    // startNewGame()
    this.props.navigation.navigate('Tic-Tac-Toe');
  }

  render() {
    return (
      <View style={styles.container}>
        <BoardGame />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
