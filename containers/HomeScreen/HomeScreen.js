import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { COLOR } from 'react-native-material-ui';
import ListTabContent from './../ListTabContent';
import MainView from './../MainView'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: [],
    }
  }

  render() {

    return (
      <MainView>
        <ListTabContent rows={this.state.rows} navigation={this.props.navigation} />
      </MainView>);
  }
}


const styles = StyleSheet.create({
  titleText: {
    marginLeft: 0,
    color: 'white',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
    backgroundColor: COLOR.grey300,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});