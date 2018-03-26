/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to React Native!
        </Text>
        <View style={styles.row}>
          <View style={styles.buttons}>
             <Text>
              1
             </Text>
          </View>
          <View style={styles.buttons}>
            <Button
              title="2"
            />
          </View>
          <View style={styles.buttons}>
            <Button
              title="3"
            />
          </View>
          <View style={styles.buttons}>
            <Button
              title="4"
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.buttons}>
            <Button 
              title="5"
              style={styles.buttons}
            />
          </View>
          <View style={styles.buttons}>
            <Button
              title="6"
              style={styles.buttons}
            />
          </View>
          <View style={styles.buttons}>
            <Button
              title="7"
              style={styles.buttons}
            />
          </View>
          <View style={styles.buttons}>
            <Button
              title="8"
              style={styles.buttons}
            />
          </View>
        </View>
        <View style={styles.row}>

        </View>
        <View style={styles.row}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  buttons: {
    flex: 1,
    width: 50,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    margin: 10
  },
  input: {
    flex: 1,
  },
  row: {
    justifyContent: "space-around",
    flexDirection: "row",
    flex: 1,
  }
});
