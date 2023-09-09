import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import params from './src/params';
import Field from './src/components/Field';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines </Text>
        <Text>
          Tamanho da Grade:
          {' ' + params.getRownAmout()} x {params.getColumnsAmout()}
        </Text>
        <Field />
        <Field opened />
        <Field opened nearMines={2} />
        <Field opened nearMines={1} />
        <Field opened nearMines={5} />
        <Field opened mined />
        <Field opened mined exploded />
        <Field flagged />
        <Field flagged opened />
        <Field flagged bigger />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
